const transition = document.getElementById('transitionSection');
transition.style.display = "none";
const showButton = document.getElementById('showBtn');
showButton.addEventListener('click', () => {
  if (transition.style.display == "none") {
    transition.style.display = "block";
  } else {
    transition.style.display = "none";
  }
})


const submitButton = document.getElementById("submitButton");
const categoryTitle = document.getElementById("categoryOrder");
const categoryOrder = document.getElementById("categoryTitle");
const categoryShortDescription = document.getElementById("category-short-description");
const categoryDescription = document.getElementById("category-description");
const categoryForm = document.getElementById("category-form");

let error = "";
submitButton.addEventListener("click", () => {


  if (categoryTitle.value === "") {
    error += "please add category title\n";
  }

  if (categoryOrder.value === "") {
    error += "please add category order\n";
  }

  if (categoryShortDescription.value === "") {
    error += "please add category short description\n"
  }
  if (categoryDescription.value === "") {
    error += "please add category description\n"
  }
  if (error.value === "") {
    alert("success")
    categoryForm.submit();
  } else {
    alert(error)
    error = "";
  }
});