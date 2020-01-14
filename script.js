function isNotEmpty(str){
        return (str || str.length !== 0);
}

async function encode() {
    var toEncode = await document.getElementById("plain-text").value;
    if (isNotEmpty(toEncode)) {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + toEncode);
        if (response.ok){
            response.json().then(data => {
            document.getElementById("response").textContent = data.name + " " + data.id;
            });
        }
    } 
}

async function decode() {
    var toDecode = await document.getElementById("cypher-text").value;
    if (isNotEmpty(toDecode)) {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + toDecode);
        if (response.ok){
            response.json().then(data => {
            document.getElementById("response").textContent = data.name + " " + data.id;
            });
        }
    }
}

function clearForm(id) {
    document.getElementById(id).value = "";
}

function clearResults() {
    document.getElementById("response").textContent = "--Result will appear here--";
}

function copyContent(){
    const resp = document.getElementById("response").textContent;
    navigator.clipboard.writeText(resp);
}
