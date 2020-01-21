function isNotEmpty(str){
    return (str || str.length !== 0);
}


async function encode() {
    const formData = await new FormData(document.getElementById("encode"))
    const response = await fetch("https://zero-width-api-web.azurewebsites.net/Encode", {
        method: 'POST',
        body: formData
    });
    if (response.ok){
        response.text().then(data => {
            document.getElementById("response").textContent = data; 
        });
    }
} 


async function decode() {
    const response = await fetch("https://zero-width-api-web.azurewebsites.net/Decode", {
        method: 'POST',
        body: await new FormData(document.getElementById("decode"))
    });
    if (response.ok){
        response.text().then(data => {
            document.getElementById("response").textContent = data; 
        });
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
