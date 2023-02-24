window.onload = function() {
  var boundary1 = document.querySelectorAll('div.boundary');
  var start = document.getElementById('start');
  var end = document.getElementById('end');
  var score = document.querySelector('.example')
  var y = 0;
  var x = 0;
  score.innerHTML = x;


  //reset the game
  start.addEventListener("click", function(){
    x = 0
    y = 0
    score.innerHTML = x
    console.log('clicked')
    document.getElementById('status').innerHTML = 'Begin by moving your mouse over the "S".';
    for (var i=0; i< boundary1.length; i++) {
        boundary1[i].style.borderColor = "black"; 
    }
  })

  //start playing again
start.addEventListener('mouseover',function(){
  console.log('starthovering game start')
y=0
document.getElementById('status').innerHTML = 'Begin by moving your mouse over the "S".';
    for (var i=0; i< boundary1.length; i++) {
        boundary1[i].style.borderColor = "black"; 
}})


  //lose
  for (var i = 0; i < boundary1.length; i++) {
    boundary1[i].addEventListener("mouseover", function() { 
      if(y==0){
      x -= 10
      score.innerHTML = x
      for (var j = 0; j < boundary1.length; j++) {
        boundary1[j].style.borderColor = "red";
        document.getElementById('status').innerHTML = "You lost"; 
        y+=5
       }}
      }
    )}


  //end which means win
  end.addEventListener("mouseover", function(){
  console.log('the end')
  if (y == 0){
  document.getElementById('status').innerHTML = "You won";
  x+=5
  score.innerHTML = x;
  console.log('Score out')
  y+=5
}}
)
}