window.onload = function() {
  var boundary1 = document.querySelectorAll('div.boundary');
  var start = document.getElementById('start');
  var end = document.getElementById('end');
  var score = document.querySelector('.example')
  var x = 0;
  score.innerHTML = x
  //start or restart and reset
  start.addEventListener("click", function(){
    x = 0
    score.innerHTML = x
    console.log('clicked')
    document.getElementById('status').innerHTML = 'Begin by moving your mouse over the "S".';
  for (var i=0; i< boundary1.length; i++) {
        boundary1[i].style.borderColor = "black"; 
    }
  })
  //lose
  for (var i = 0; i < boundary1.length; i++) {
    boundary1[i].addEventListener("mouseover", function() {
      x -= 10
    score.innerHTML = x
      for (var j = 0; j < boundary1.length; j++) {
        boundary1[j].style.borderColor = "red";
        document.getElementById('status').innerHTML = "You lost";
      }
    })

  }
  //end which means win
end.addEventListener("click", function(){
  console.log('the end')
  document.getElementById('status').innerHTML = "You won";
  x+=5
  score.innerHTML = x;
  console.log('Score out')
} 
)
}