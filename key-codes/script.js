const container = document.getElementById("KeyContainer");

container.innerHTML = generateHTML("-","-","-");
/* evento al presionar una letra */
window.addEventListener("keydown", (e) => {
    /* charCodeAt metodo string para  mostrar el codigo del caracter presionado */
    container.innerHTML = generateHTML(e.key,e.code,e.key.charCodeAt(0));
});

function generateHTML(key,code,keyCode){
    return `
    <div class="key-container">
        <h4>Key</h4>
        <div class="key-content">${key === " " ? "Space" : key}
        </div>
    </div>  
    
    <div class="key-container">
        <h4>Code</h4>
        <div class="key-content">${code}
        </div>
    </div> 
    <div class="key-container">
        <h4>Key Code</h4>
        <div class="key-content">${keyCode}
        </div>
    </div> 
    `;
}    

