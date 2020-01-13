function isNotEmpty(str){
        return (str || str.length !== 0);
}

async function encode() {
        var toEncode = await document.getElementById("plain-text").value;
        if (isNotEmpty(toEncode)) {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
            if (response.ok){
                response.json().then(data => {
                    console.log(data);
                });
            }
        }
}

async function decode() {
        var toDecode = await document.getElementById("cypher-text").value;
        if (isNotEmpty(toDecode)) {
            console.log("decoding: " + toDecode);
            //create new text area for the result
        }
}
