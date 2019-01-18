const compareStrings = (strings) => {
    return new Promise((resolve, reject) => {
        if (areArgsValid(strings)) {
            if (detectWebGLContext() === true) {
                /* if (typeof OffscreenCanvas !== 'undefined') { */
                //webgl available
                //run TFJS web worker
                resolve("return TFJS data");
            } else {
                //run CPU web workers thread pool
                resolve("return CPU data");
            }
        } else {
            reject("Invalid arguments. Give an array of strings. Example: compareStrings([\"ELOQUENT\",\"ELOQUENTLY\"]).then(response => { console.log(response); });");
        }
    });
};

function areArgsValid(strings) {
    if (!Array.isArray(strings)) return false;
    if (!strings.length) return false;
    if (strings.find(s => typeof s !== 'string')) return false;
    return true;
}

function detectWebGLContext() {
    if(typeof document === "undefined"){
        return false;
    }
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    if (gl && gl instanceof WebGLRenderingContext) {
        return true;
    } else {
        return false;
    }
}

export { compareStrings };