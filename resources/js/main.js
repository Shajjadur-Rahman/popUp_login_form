let login_btn = document.querySelector(".login_btn");
login_btn.addEventListener("click", function () {
  let popUpForm = document.querySelector(".popUpForm");
  popUpForm.style.display = "block";
});

let close_btn = document.querySelector(".close_btn");
close_btn.addEventListener("click", function () {
  let popUpForm = document.querySelector(".popUpForm");
  popUpForm.style.display = "none";
});
