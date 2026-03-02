function greetUser() {
  alert("Welcome to Bean Box! Enjoy your coffee journey.");
}

let search = document.querySelector('.search-box');


document.querySelector('#search-icon').onclick =()=>{
    search.classList.toggle('active')
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menuicon').onclick = ()=>{
    navbar.classList.toggle('active')

}
