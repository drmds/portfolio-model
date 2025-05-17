const logo = document.querySelector(".logo");
const menuLinks = document.querySelector(".menu-links");
const nav = document.querySelector(".navbar");
const hamMenu = document.querySelector(".ham-menu");
const submitBtn = document.getElementById("submit-btn")

function hamenuChange() {
    if (menuLinks.classList.contains("mobile")) {
        menuLinks.classList.remove("mobile");
        nav.classList.remove("mobile");
        hamMenu.classList.remove("mobile");
        logo.classList.remove("mobile");
      } else {
        menuLinks.classList.add("mobile");
        nav.classList.add("mobile")
        hamMenu.classList.add("mobile");
        logo.classList.add("mobile");
  }}

  submitBtn.addEventListener("click", () => {
    alert("This button is only for demonstation.");
  })
