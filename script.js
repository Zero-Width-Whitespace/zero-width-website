function isNotEmpty(str){
    return (str || str.length !== 0);
}

const api_headers = new Headers({
    'Content-Type': 'text/plain'
});

async function encode() {
    var toEncode = await document.getElementById("plain-text").value;
    if (isNotEmpty(toEncode)) {
        const response = await fetch("https://zero-width-api-web.azurewebsites.net/Encode?stringToEncode=" + toEncode, {
            method: 'POST',
            headers: api_headers
        });
        if (response.ok){
            response.text().then(data => {
                document.getElementById("response").textContent = data; 
            });
        }
    }
} 


async function decode() {
    var toDecode = await document.getElementById("cypher-text").value;
    if (isNotEmpty(toDecode)) {
        const response = await fetch("https://zero-width-api-web.azurewebsites.net/Decode?stringToDecode=" + toDecode, {
            method: 'POST',
            headers: api_headers
        });
        if (response.ok){
            response.text().then(data => {
                document.getElementById("response").textContent = data; 
            });
        }
    }
}

function clearForm(id) {
    document.getElementById(id).value = "";
}

function clearResults() {
    document.getElementById("response").textContent = `Result will appear here. When encoding, this message will disappear.
    This means the conversion was successful. Click 'Copy' to copy your zero-width-encoded text to clipboard`;
}

function copyContent(){
    const resp = document.getElementById("response").textContent;
    navigator.clipboard.writeText(resp);
}
