const toggleButton = document.getElementById("goto")[0];
const navlist = document.getElementsByClassName("nav-list")[0];
const navitems = document.getElementsByClassName("nav-links");

toggleButton.addEventListener("click", () => {
  navlist.classList.toggle("active");
});

navitems[0].addEventListener("click", () => {
  navlist.classList.toggle("active");
});

navitems[1].addEventListener("click", () => {
  navlist.classList.toggle("active");
});

navitems[2].addEventListener("click", () => {
  navlist.classList.toggle("active");
});

navitems[3].addEventListener("click", () => {
  navlist.classList.toggle("active");
});
