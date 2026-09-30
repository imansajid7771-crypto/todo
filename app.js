const textarea = document.querySelector(".task textarea");

textarea.addEventListener("input", () => {
  textarea.style.height = "auto";              // reset
  textarea.style.height = textarea.scrollHeight + "px";
});
const add = document.querySelector(".add");
const input = document.getElementById("text");
const container = document.querySelector(".container");

add.addEventListener("click", () => {
   function todosys() {
   let task = document.createElement("div");
  task.classList.add("taskdiv");
  let check = document.createElement("input");
  check.type = "checkbox";
  let text = document.createElement("h2");
   text.innerText = input.value;
     let date = document.createElement("p");
     date.classList.add("date");
   const now = new Date();
   const days = [
       "Sunday",
       "Monday",
       "Tuesday",
       "Wednesday",
       "Thursday",
       "Friday",
       "Saturday"
     ];
  let day = days[now.getDay()];
     let time = now.toLocaleTimeString([], {
     hour: "2-digit",
     minute: "2-digit"
     });
   date.innerText = `${day}${time}`;
     let div = document.createElement("div");
     div.classList.add("task-main");
     div.append(text, date);
  let del = document.createElement("button");
  del.innerText = "✕";
  del.classList.add("delete-btn");
  task.append(check,div, del);
  container.appendChild(task);
  input.value = ""; 
  }
  
  if (input.value.trim() === "") {
  alert("add task details");
  } else {
    todosys();
  }
})