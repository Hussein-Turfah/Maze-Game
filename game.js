window.onload = function() {
  var boundary1 = document.querySelectorAll('div.boundary');
  var start = document.getElementById('start');




  for (var i = 0; i < boundary1.length; i++) {
    boundary1[i].addEventListener("mouseover", function() {
      for (var j = 0; j < boundary1.length; j++) {
        boundary1[j].style.borderColor = "red";}
      })
    }
  start.addEventListener("click", function(){
    console.log('clicked')
  for (var i=0; i< boundary1.length; i++) {
        boundary1[i].style.borderColor = "black"; 
      }
    })
  }
