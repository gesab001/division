
function getRandomIntMinMax(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}	

function getRandomInt(max) {
		  return Math.floor(Math.random() * max);
		}

function getMultiples(number){
   var result = [];
   for (var x=1; x<=12; x++){
	  var product = number * x;
	  result.push(product);
   }
   return result;
}	

var interval;
var counter = 0;
function stopTimer() {
  clearInterval(interval);
}
function startTimer(){
	var el = document.getElementById("timer");
	counter = counter + 1;
	el.innerHTML = "TIMER: " + counter;
}
function createQuestion(){
	
  var f1 = document.getElementById("numberToPractice").value;//getRandomIntMinMax(1, 12);
  var multiples = getMultiples(f1);
  f2 = multiples[getRandomInt(multiples.length)];
  var question = f1.toString() + " &divide; "  +f2.toString();
  document.getElementById("correctAnswer").innerHTML = f1 / f2;
  if (f2>f1){	
    question = f2.toString() + " &divide; "  +f1.toString();
	document.getElementById("correctAnswer").innerHTML = f2 / f1;

  }
  document.getElementById("main").innerHTML = question;

  document.getElementById("answers").innerHTML = multiples;
  counter = 0;
  stopTimer();
  interval = setInterval(startTimer, 1000);
  console.log('Ready to receive a color command.');



}