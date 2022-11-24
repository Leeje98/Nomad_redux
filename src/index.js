const add = document.getElementById("add");
const minus = document.getElementById("minus");
const numder = document.querySelector("span");

let count = 0;

numder.innerText = count;

const updateText = () => {
  numder.innerText = count;
};

const handleAdd = () => {
  console.log("add");
  count = count + 1
  updateText()
};

const handleMinus = () => {
  count = count - 1
  updateText()
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
