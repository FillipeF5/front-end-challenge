var textarea = document.getElementById("textarea");
var enviar = document.getElementById("enviar");
var sucesso = document.getElementById("sucesso");
var input = document.getElementById('contador');
var react = document.getElementById("react");
var vue = document.getElementById("vue");
var angular = document.getElementById("angular");



function validar(e) {
    if (!react.checked && !vue.checked && !angular.checked) {
        erro.style.display = "initial";
        sucesso.style.opacity = "0";
        alert("Deve selecionar ao menos 1 sticker")
        return false;
    }

    if (input.value == 0) {
        input.style.backgroundColor = "#F59393";
        erro.style.display = "initial";
        sucesso.style.opacity = "0";
        return false;
    }

    if (textarea.value.length < 1) {
        erro.style.display = "initial";
        sucesso.style.opacity = "0";
        
        return false;
    }

    sucesso.style.display = "initial";

};

enviar.onclick = function (e) {
    validar();
    e.preventDefault();
};
