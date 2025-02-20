const menu = document.getElementById("menu");
const actions = document.getElementById("actions");

menu.addEventListener("click", ()=> {
hundleMunu();
});

function hundleMunu(){
  menu.classList.toggle("is-active");
  actions.classList.toggle("is-active");
}