var textarea = document.getElementById("textarea");
var enviar = document.getElementById("enviar");
var sucesso = document.getElementById("sucesso");
var input = document.getElementById('contador');
var react = document.getElementById("react");
var vue = document.getElementById("vue");
var angular = document.getElementById("angular");


function Load() {
    function validar(e) {
        if (!react.checked && !vue.checked && !angular.checked) {
            alert("ERRO CHECKBOX")
            return false;
        }
    
        if (input.value == 0) {
            input.style.backgroundColor = "#F59393";
            erro.style.display = "initial";
            sucesso.style.opacity = "0";
            return false;
        }
    
        if (textarea.value.length < 1) {
            alert("O campo observações deve ser preenchido");
            return false;
        }
    
        alert("sucesso")
        sucesso.style.display = "initial";
        e.preventDefault();
    };

    enviar.onclick = function() {
        validar();
    };
}