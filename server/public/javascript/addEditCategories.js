var transition = document.getElementById('transitionSection');
transition.style.display = "none";
var showButton = document.getElementById('showBtn');
showButton.addEventListener('click', () => {
  if (transition.style.display == "none") {
    transition.style.display = "block";
  } else {
    transition.style.display = "none";
  }
})