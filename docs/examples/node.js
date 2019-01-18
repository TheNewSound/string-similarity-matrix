const stringSimilarityMatrix = require("../../dist/main.node.js");

stringSimilarityMatrix.compareStrings(["ELOQUENT","ELOQ","TNEUQOLE","ELOQUENTLY"]).then(response => {

    console.log(response);
}).catch(reason => {
    console.log(reason);
});