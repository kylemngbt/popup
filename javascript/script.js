const submitBtn = document.querySelector("#submit-btn");
const okBtn = document.querySelector("#ok-btn");
const popup = document.querySelector("#popup");

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}


submitBtn.addEventListener("click", openPopup);
okBtn.addEventListener("click", closePopup);