console.log("halo");

// NAVBAR TOGGLE 
const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".navbar-nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});


// FAQ
const headers = document.querySelectorAll(".faq-header");
const items = document.querySelectorAll(".faq-item");

headers.forEach(header => {
    header.addEventListener("click", () => {
        const item = header.parentElement;
        items.forEach(i => i.classList.remove("active"));

        item.classList.toggle("active");
    });
});


