var textarea = document.getElementById("textarea");
var enviar = document.getElementById("enviar");
var sucesso = document.getElementById("sucesso");
var input = document.getElementById('contador');
var checkboxes = document.querySelectorAll(".checkbox");



enviar.addEventListener("click", function(event) {
    function validar() {

        if (input.value < 1) {
            input.style.backgroundColor = "#F59393"
            erro.style.display = "initial";
            return false;
        }

        if(textarea.value.length < 1) {
            alert("O campo observações deve ser preenchido");
            textarea.focus();
            return false;
        }

        sucesso.style.display = "initial";
            
    };
    validar()
});