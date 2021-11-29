let mais = document.getElementById('mais');
let menos = document.getElementById('menos');
let contador = document.getElementById('contador');

let start = 0;
contador.innerHTML = start;

mais.addEventListener('click', function(event) {
    contador.innerHTML = ++start;
    event.preventDefault();
});

menos.addEventListener('click', function(event) {
    contador.innerHTML = --start;
    event.preventDefault()
});