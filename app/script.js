mytodo = [
  {
    id: 1,
    note: "kkkk",
  },
  {
    id: 2,
    note: "jjjj",
  },
  {
    id: 3,
    note: "jjj",
  },
  {
    id: 4,
    note: "jjjj",
  },
];

function makeTodoDiv(list) {
  const div = document.createElement("div");
  div.setAttribute("class", "list-card");

  // Configure the check box
  var checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.setAttribute("id", `checkbox ${list["id"]}`);
  checkBox.addEventListener("click", function jj() {
    let v = document.getElementsByTagName("li");
    for (let i = 0; i < v.length; i += 1) {
      v.item(i).classList.toggle("checked");
    }
  });

  // Configure the label
  var label = document.createElement("label");
  var labelText = document.createElement("span");
  labelText.innerText = list["note"];

  const ul = document.createElement("ul");
  ul.setAttribute("class", "ul-class");
  const li = document.createElement("li");
  // li.setAttribute("class", "list-class");
  li.setAttribute("id", `list${list["id"]}`);

  // li.innerText = list["note"];
  // console.log(list["note"]);

  label.appendChild(checkBox);
  label.appendChild(labelText);
  ul.appendChild(li);
  div.appendChild(ul);
  li.appendChild(label);

  return div;
}
function appendToApp(listDiv) {
  const app = document.querySelector("#todo-list");
  app.appendChild(listDiv);
}

function clearApp() {
  const app = document.querySelector("#todo-list");
  app.innerHTML = "";
}
function updateUI() {
  clearApp();
  for (let i = 0; i < mytodo.length; i++) {
    const listDiv = makeTodoDiv(mytodo[i]);
    appendToApp(listDiv);
  }
}
const inputField = document.getElementById("inputField");
const submitButton = document.getElementById("submitButton");
inputField.addEventListener("input", function () {
  if (inputField.value !== "") {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});
submitButton.addEventListener("click", function () {
  // const todolist = {
  //   id: new Date().getTime(),
  //   list: list,
  // };
  submitButton.disabled = true;
  inputField.value = "";
});
function saveToLocalStorage() {
  const str = JSON.stringify(mytodo);
  localStorage.setItem("my-todo-list", str);
}
function getFromLocalStorage() {
  const str = localStorage.getItem("my-todo-list");
  if (!str) {
    MyNotes = [];
  } else {
    MyNotes = JSON.parse(str);
  }
}
updateUI();
