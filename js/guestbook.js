const openBtn = document.getElementById("openGuestBook");
const modal = document.getElementById("guestbookModal");
const closeBtn = document.getElementById("closeGuestBook");

openBtn.addEventListener("click", function(e) {
  e.preventDefault();
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});