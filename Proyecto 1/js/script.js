//Challenge 1
function ageIndays() {
    var birthYear = prompt('Año en que naciste?');
    var days = (2021 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('Tienes ' + days + ' dias de edad.');
    h1.setAttribute('id', 'ageIndays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageIndays').remove();
}

//Challenge 2: Cat generator
function generarmichis() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-generator');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

//Challenge 3 Rock, Paper and Scissor
function juego(yourChoice){
console.log("Seleccion de la persona",yourChoice.id);
var humanChoice, botChoice;
humanChoice =yourChoice.id;
botChoice = numberTochoice(randomToImages());
console.log("BotChoice", botChoice);
results = decideWinner(humanChoice, botChoice);//[1,0]human won | bot lost
console.log("Resultados",results);
message =finalMessage(results); //{'message': 'Ganaste!', 'color': 'green'}
console.log(message);
mostrarResultado(yourChoice.id, botChoice, message);
}

function randomToImages(){
    return (Math.floor(Math.random()*3));
}

function numberTochoice(number){
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, botChoice){
 var opciones = {
    'rock': {'scissors': 1, 'rock': 0.5, 'paper':0},
    'paper': {'rock': 1, 'paper': 0.5, 'scissors':0},
    'scissors': {'paper': 1, 'scissors': 0.5, 'rock':0},
 }
 var yourScore = opciones[yourChoice][botChoice];
 var computerScore = opciones[botChoice][yourChoice];
 return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if(yourScore === 0){
        return {'message': 'You lost!', 'color': 'red'};
    }else if (yourScore === 0.5) {
        return {'message': 'You tied!', 'color': 'yellow'};
    }else{
        return {'message': 'You won!', 'color': 'green'};
    }
}

function mostrarResultado (humanImageChoice, botImageChoice, finalMessage){
    var imagesDB = {
        'rock': document.getElementById('rock').src,
        'scissors': document.getElementById('scissors').src,
        'paper': document.getElementById('paper').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDB[humanImageChoice] + "' heigth=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDB[botImageChoice] + "' heigth=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);; '>"

    document.getElementById('flex-game-genertor').appendChild(humanDiv);
    document.getElementById('flex-game-genertor').appendChild(messageDiv);
    document.getElementById('flex-game-genertor').appendChild(botDiv);

}