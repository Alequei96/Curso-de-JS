//Challenge 1
function ageIndays (){
    var birthYear = prompt ('Año en que naciste?');
    var days = (2021-birthYear)*365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('Tienes ' + days + ' dias de edad.');
    h1.setAttribute('id', 'ageIndays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset (){
    document.getElementById('ageIndays').remove();
}