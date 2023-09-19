mytodo = [
  {
    id: 1,
    note: "kkkk",
  },
];

function makeTodoDiv(list) {
  const div = document.createElement("div");
  div.setAttribute("class", "list-card");

  // Configure the check box
  var checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.setAttribute("id", `checkbox ${list["id"]}`);

  // Configure the label
  var label = document.createElement("label");
  var labelText = document.createElement("span");
  labelText.innerText = list["note"];

  const ul = document.createElement("ul");
  ul.setAttribute("class", "ul-class");
  const li = document.createElement("li");
  li.setAttribute("class", "list-class");
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
updateUI();

function dodajAktywne(elem) {
  // get all 'a' elements
  var a = document.getElementsByTagName("a");
  // loop through all 'a' elements
  for (i = 0; i < a.length; i++) {
    // Remove the class 'active' if it exists
    a[i].classList.remove("active");
  }
  // add 'active' classs to the element that was clicked
  elem.classList.add("active");
}
