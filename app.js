const textarea = document.querySelector(".task textarea");

textarea.addEventListener("input", () => {
  textarea.style.height = "auto";              // reset
  textarea.style.height = textarea.scrollHeight + "px";
});
const add = document.querySelector(".add");
const input = document.getElementById("text");
const container = document.querySelector(".container")
add.addEventListener("click",()=> {
  let task = document.createElement("div");
  task.classList.add("taskdiv");
  let check = document.createElement("input");
  check.type = "checkbox";
  let text = document.createElement("h2");
  text.innerText = input.value;
  let del = document.createElement("button");
  del.innerText = "✕";
  del.classList.add("delete-btn");
  task.append(check, text, del);
  container.appendChild(task);
  input.value = "";
})