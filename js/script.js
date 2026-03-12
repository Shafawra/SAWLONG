// NAVBAR TOGGLE 
const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".mobile-menu");

toggle.addEventListener("click", function (e) {
  e.stopPropagation(); 
  nav.classList.toggle("show");
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

document.addEventListener("click", function (e) {
  const faqSection = document.querySelector(".faq-section");

  if (!faqSection.contains(e.target)) {
      items.forEach(i => i.classList.remove("active"));
  }
});


// BTN CAT
function filterProduct(category) {

  document.querySelectorAll('.f-btn').forEach(btn => btn.classList.remove('active'));
  event.currentTarget.classList.add('active');


  document.querySelectorAll('.product').forEach(product => {
      if (category === 'all' || product.classList.contains(category)) {
          product.style.display = 'block';
      } else {
          product.style.display = 'none';
      }
  });
}


// CARD 
document.querySelectorAll('.product').forEach(card => {
  card.addEventListener('click', () => {
    card.querySelector('.next-btn a').click();
  });
});