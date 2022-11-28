import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const numder = document.querySelector("span");

numder.innerText = 0

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  // console.log(count, action);
  // if (action.type === "ADD") {
  //   return count + 1;
  // } else if (action.type === "MINUS") {
  //   return count - 1;
  // } else {
  //   return count;
  // }    // if문보다 switch case문을 쓰는게 일반적이다
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);
// store : 나의 data를 저장하는 곳

const onChange = () => {
  numder.innerText = countStore.getState();
}

countStore.subscribe(onChange)

const handleAdd = () => {
  countStore.dispatch({ type: ADD})
                     // action은 {오브젝트}여야한다. 스트링이 될 수 없다
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS})
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
