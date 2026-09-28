const textarea = document.querySelector(".task textarea");

textarea.addEventListener("input", () => {
  textarea.style.height = "auto";              // reset
  textarea.style.height = textarea.scrollHeight + "px";
});