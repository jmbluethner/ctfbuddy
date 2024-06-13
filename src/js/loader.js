export function loadCss(file) {
    let cssFile = document.createElement("link");
    cssFile.rel =  "stylesheet";
    cssFile.href  = file;
    cssFile.type = "text/css";
    document.getElementsByTagName("head")[0].appendChild(cssFile);
    return true;
}