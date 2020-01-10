function isNotEmpty(str){
        return (str || str.length !== 0)
}

function encode() {
        var toEncode = document.getElementById("plain-text").value
        if (isNotEmpty(toEncode)) {
            console.log("encoding: " + toEncode)
            //create new text area for the result
        }
}

function decode() {
        var toDecode = document.getElementById("cypher-text").value
        if (isNotEmpty(toDecode)) {
            console.log("decoding: " + toDecode)
            //create new text area for the result
        }
}
