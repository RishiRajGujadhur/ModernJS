const inputBox = document.querySelector("#input-box");

// CSS Selectors
// . for classes
// # for ids
// name for names

const listContainer = document.querySelector("#List-Container");

function addTask() {
  let li = document.createElement("li");
  li.className = "list-group-item";
  li.innerHTML = inputBox.value;
  listContainer.appendChild(li);

  // create span element
  let span = document.createElement("span");
  span.className = "btn p-2 btn-danger ms-5";
  span.innerHTML = "-";
  // append span element to li
  li.appendChild(span);
  inputBox.value = "";

  // callback function is a function within another function
  // target is where we clicked in the context of an event
  listContainer.addEventListener(
    "click",
    function (e) {
      if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
      }
    },
    false
  );
}
