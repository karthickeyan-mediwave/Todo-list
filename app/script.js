// mytodo = [
//   {
//     id: 1,
//     title: kk,
//   },
// ];

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
  submitButton.disabled = true;
  inputField.value = "";
});
