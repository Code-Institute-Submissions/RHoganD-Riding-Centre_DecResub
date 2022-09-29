const toggleButton = document.getElementById("menuline");
const navlist = document.getElementById("navlistmenu");

toggleButton.addEventListener('click', () =>{
  navlist.classlist.toggle("active");

})