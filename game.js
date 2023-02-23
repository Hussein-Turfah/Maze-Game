window.onload = function() {
  var boundary1 = document.querySelectorAll('div.boundary');
  var start = document.getElementById('start');
  var end = document.getElementById('end')
  for (var i = 0; i < boundary1.length; i++) {
    boundary1[i].addEventListener("mouseover", function() {
      for (var j = 0; j < boundary1.length; j++) {
        boundary1[j].style.borderColor = "red";
        document.getElementById('status').innerHTML = "You lost";
      }
    })
  }
  start.addEventListener("click", function(){
    console.log('clicked')
    document.getElementById('status').innerHTML = 'Begin by moving your mouse over the "S".';
  for (var i=0; i< boundary1.length; i++) {
        boundary1[i].style.borderColor = "black"; 
    }
  })
end.addEventListener("click", function(){
  console.log('the end')
  document.getElementById('status').innerHTML = "You won"
} 
)
}