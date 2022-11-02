
var multiples;

function answerCheckTyping(user_answer){
  var correctAnswer = parseInt(document.getElementById("correctAnswer").innerHTML);
  console.log(user_answer);


  //document.getElementById("answer").textContent= ;

  if (user_answer===correctAnswer){
	  //alert("CORRECT");	
	  var totalCorrect = parseInt(document.getElementById("totalCorrect").innerHTML) + 1;
	  document.getElementById("totalCorrect").innerHTML = totalCorrect;
  }else{
	  //alert("WRONG! THE CORRECT ANSWER IS: " + correctAnswer);
	  var totalCorrect = parseInt(document.getElementById("totalCorrect").innerHTML) - 1;
	  document.getElementById("totalCorrect").innerHTML = totalCorrect;
  }	
}

function makeMultiples(){
	
  var f1 = document.getElementById("numberToPractice").value;//getRandomIntMinMax(1, 12);
  multiples = getMultiples(f1);	
  console.log(multiples);
  document.getElementById("answers").innerHTML = multiples;

}

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
	  document.getElementById("answer").innerHTML= ""	;

  var  multipleIndex = getRandomInt(multiples.length); 
  if (multiples.length>0){
    f2 = multiples[multipleIndex];
  }else{
	 makeMultiples();
     multipleIndex = getRandomInt(multiples.length); 
  }
  f1 = document.getElementById("numberToPractice").value;
  f2 = multiples[multipleIndex];	 
  var question = f1.toString() + " &divide; "  +f2.toString();
  document.getElementById("correctAnswer").innerHTML = f1 / f2;
  if (f2>f1){	
    question = f2.toString() + " &divide; "  +f1.toString();
	document.getElementById("correctAnswer").innerHTML = f2 / f1;

  }
  document.getElementById("question").innerHTML = question;

  counter = 0;
  stopTimer();
  interval = setInterval(startTimer, 1000);
  console.log('Ready to receive a color command.');
    console.log(multiples);

  multiples.splice(multipleIndex, 1);
  
  



}