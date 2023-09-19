mytodo = [];
// mytodocheck = [...mytodo];
function makeTodoDiv(list) {
  // list div
  const div = document.createElement("div");
  div.setAttribute("class", "list-card");
  const kk = document.querySelector("#todo-list-checked");
  //  check box
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.checked = false;
  checkBox.setAttribute("id", `checkbox ${list["id"]}`);
  checkBox.addEventListener("click", function jj() {
    let v = document.getElementsByTagName("li");
    uncheck();
    updateUI();
  });
  function uncheck() {
    if (checkBox.checked == true) {
      li.style.textDecoration = "line-through";

      sortlist(list["id"]);
      // removenotes(list["id"]);
      // kk.appendChild(ul);
      ischecked = true;
      console.log("check");
    } else {
      checkBox.checked == false;
      li.style.textDecoration = "none";
      div.appendChild(ul);
      console.log("hiii");
    }
  }
  //  label
  var label = document.createElement("label");
  var labelText = document.createElement("span");
  labelText.innerText = list["note"];
  //  list
  const ul = document.createElement("ul");
  ul.setAttribute("class", "ul-class");
  const li = document.createElement("li");
  li.setAttribute("class", "list-class");
  li.setAttribute("id", `list--${list["id"]}`);
  // append
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
// clear
function clearApp() {
  const app = document.querySelector("#todo-list");
  app.innerHTML = "";
}
// update
function updateUI() {
  clearApp();
  for (let i = 0; i < mytodo.length; i++) {
    const listDiv = makeTodoDiv(mytodo[i]);
    appendToApp(listDiv);
  }
}
// button disable
const inputField = document.getElementById("inputField");
const submitButton = document.getElementById("submitButton");
inputField.addEventListener("input", function () {
  if (inputField.value !== "") {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});
// input add
submitButton.addEventListener("click", function () {
  const inputField = document.getElementById("inputField");
  const list = inputField.value;
  const todolist = {
    id: new Date().getTime(),
    note: list,
    ischecked: false,
  };
  addNotes(todolist);
  submitButton.disabled = true;
  inputField.value = "";
});
// add function
function addNotes(todolist) {
  mytodo.push(todolist);
  saveToLocalStorage();
  updateUI();
}
// save to local storage
function saveToLocalStorage() {
  const str = JSON.stringify(mytodo);
  localStorage.setItem("my-todo-list", str);
}
// get from local
function getFromLocalStorage() {
  const str = localStorage.getItem("my-todo-list");
  if (!str) {
    mytodo = [];
  } else {
    mytodo = JSON.parse(str);
  }
}

function sortlist(todoId) {
  const toDeleteIndex = mytodo.findIndex((list) => list.id == todoId);
  console.log("Deleting ", todoId);
  mytodo.push(mytodo.splice(toDeleteIndex, 1)[0]);
  saveToLocalStorage();
  updateUI;
}
// function removenotes(todoId) {
//   console.log("Deleting ", todoId);
//   const filteredArray = mytodo.filter((note) => note.id == todoId);
//   mytodocheck.push(filteredArray);
//   console.log(mytodocheck);
//   saveToLocalStorage1;
//   updateUI();
// }
// function saveToLocalStorage1() {
//   const str = JSON.stringify(mytodocheck);
//   localStorage.setItem("my-todo-list1", str);
// }
// function getFromLocalStorage1() {
//   const str = localStorage.getItem("my-todo-list1");
//   if (!str) {
//     mytodocheck = [];
//   } else {
//     mytodocheck = JSON.parse(str);
//   }
// }
getFromLocalStorage();
// getFromLocalStorage1();
updateUI();
