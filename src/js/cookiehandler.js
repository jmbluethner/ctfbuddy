export function getCookieByName(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

export function setCookie(name,value,lifetimeDays = null) {
    let lifetime;
    if(!value || !name) {
        return false;
    }
    let date = new Date();
    if(lifetimeDays) {
        date.setTime(date.getTime() + (lifetimeDays*24*60*60*1000));
    } else {
        date.setTime(date.getTime() + (365*24*60*60*1000));
    }
    lifetime = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + (value || "")  + lifetime + "; path=/";
}