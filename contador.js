let mais = document.getElementById('mais');
let menos = document.getElementById('menos');
var input = document.getElementById('contador');

var somandoInput = function () {input.value = ++input.value}
var subtraindoInput = function () {input.value = --input.value}

function Load(e) {
    mais.addEventListener('click', function (e) {
        somandoInput()
        e.preventDefault();
        if (input.value + 1 > 0) {
            menos.disabled = false;
            menos.style.opacity = "1"
        }
    }); 

    menos.addEventListener('click', function (e) {

        if (input.value < 1 ) {
            menos.setAttribute("disabled", "disabled");
            menos.style.opacity = ".2"

        } else {
            subtraindoInput()
        }
        e.preventDefault();
    });
};