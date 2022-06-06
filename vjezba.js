let con_todos = document.getElementById("con-todos");
let add = document.getElementById("add");
let input = document.getElementById("input");
let root = document.getElementById("root");

add.addEventListener("click", () => {
  if (input.value == "") {
    let message = document.createElement("div");
    message.setAttribute("class", "message");
    let messageP = document.createElement("p");
    let messageText = document.createTextNode("Write your Todo first");
    root.appendChild(message);
    message.appendChild(messageP);
    messageP.appendChild(messageText);
    setTimeout(() => {
      message.style.display = "none";
    }, 1500);
  } else {
    let TodoHolder = document.createElement("div");
    TodoHolder.setAttribute("class", "TodoHolder");
    let btnHolder = document.createElement("div");
    btnHolder.setAttribute("class", "btnHolder");
    let trashBtn = document.createElement("button");
    trashBtn.setAttribute("class", "trashBtn");
    let completeBtn = document.createElement("button");
    completeBtn.setAttribute("class", "completeBtn");
    let trashBtnText = document.createTextNode("X");
    let completeBtnText = document.createTextNode("✓");
    let todo = document.createElement("div");
    todo.setAttribute("class", "todo");
    let todoP = document.createElement("p");
    let todoText = document.createTextNode(input.value);
    trashBtn.addEventListener("click", () => {
      con_todos.removeChild(TodoHolder);
    });
    completeBtn.addEventListener("click", () => {
      todoP.style.color = "green";
    });
    TodoHolder.appendChild(todo);
    TodoHolder.appendChild(btnHolder);
    btnHolder.appendChild(trashBtn);
    btnHolder.appendChild(completeBtn);
    trashBtn.appendChild(trashBtnText);
    completeBtn.appendChild(completeBtnText);
    todoP.appendChild(todoText);
    todo.appendChild(todoP);
    con_todos.appendChild(TodoHolder);

    input.value = "";
  }
});
