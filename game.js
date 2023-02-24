window.onload = function() {
  var boundary1 = document.querySelectorAll('div.boundary');
  var start = document.getElementById('start');
  var end = document.getElementById('end');
  var score = document.querySelector('.example')
  var x = 0;
  var y = 0; //used not to avoid repeating collisions and wins
  score.innerHTML = x;
  //reset the game on mouse click
  start.addEventListener("click", function(){
    x = 0
    y = 0
    score.innerHTML = x
    document.getElementById('status').innerHTML = 'Begin by moving your mouse over the "S".';
    for (var i=0; i< boundary1.length; i++) {
        boundary1[i].style.borderColor = "black"; 
    }
  })
  //start playing again on mouse over
  start.addEventListener('mouseover',function(){
    document.getElementById('status').innerHTML = 'Begin by moving your mouse over the "S".';
    for (var i=0; i< boundary1.length; i++) {
      boundary1[i].style.borderColor = "black"; 
}})
  //lose when mouse touches the walls
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
  //end which means win when touching end button
  end.addEventListener("mouseover", function(){
    if (y == 0){
    document.getElementById('status').innerHTML = "You won";
    x+=5
    score.innerHTML = x;
    y+=5
}}
)
}