let bodyContainer = document.querySelector(".container");

let toggle = document.querySelector(".switch-toggle");
toggle.addEventListener("click", (e) => {
  if (bodyContainer.getAttribute("id") === "default-theme") {
    bodyContainer.setAttribute("id", "light-theme");
  } else {
    bodyContainer.setAttribute("id", "default-theme");
  }
});
