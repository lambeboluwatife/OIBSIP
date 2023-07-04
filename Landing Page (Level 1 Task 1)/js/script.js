const open = document.getElementById("open-menu");
const close = document.getElementById("close-menu");
const dropdown = document.getElementById("dropdown");

open.addEventListener("click", () => {
  open.style.display = "none";
  close.style.display = "block";
  dropdown.style.display = "block";
});

close.addEventListener("click", () => {
  close.style.display = "none";
  open.style.display = "block";
  dropdown.style.display = "none";
});
