/**
 * @author jmbluethner <bluethner@heliophobix.com>
 */

const {logger} = import('./logger.js');

/**
 * @function callApi()
 * @description A general function to talk to the API
 * @param {string} route The URL for the XHR call
 * @param {string} reqBody Request Body
 * @param {string} method GET,POST,DELETE,PUT
 * @param {string} contentType Request content type
 * @param {function} callback The Callback function gets called when the API responded with Status 200
 * @param skipEncode
 * @returns {boolean}
 */
export function callApi(route,callback, reqBody = "",method = "GET",contentType = "application/json",skipEncode = false) {
    let xhr = new XMLHttpRequest();
    let url = route;
	try {
		xhr.onreadystatechange = function() {
			if(xhr.readyState === 4 && this.status === 200) {
				if(!skipEncode) {
					let resp = JSON.parse(this.response);
					Object.assign(resp,{status: this.status});
					callback(resp);
				} else {
					callback(this.response);
				}
			} else if(xhr.readyState === 4 && this.status !== 200) {
				if(!skipEncode) {
					let resp = JSON.parse(this.response);
					Object.assign(resp, {status: this.status});
					logger('Received data from the API at '+route+' but the HTTP response Code was ' + this.status,'warning','error');
					callback(resp);
				} else {
					callback(this.response);
				}
			}
		};
		xhr.open(method, url, true);
		xhr.setRequestHeader("Content-Type", contentType);
		xhr.send(reqBody);
	} catch(err) {
		logger("HTTP Error: " + err,'error');
		callback(false);
	}
}