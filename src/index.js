import { createStore } from "redux"; //store는 내 data(state)를 넣는 곳

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const countModifier = (count = 0, action) => {
  //state를 modify하는 방법? action 사용!
  if (action.type === "add") {
    return count + 1;
  } else if (action.type === "minus") {
    return count - 1;
  } else {
    return count;
  }
};
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};
countStore.subscribe(onChange);

add.addEventListener("click", () => countStore.dispatch({ type: "add" }));
minus.addEventListener("click", () => countStore.dispatch({ type: "minus" }));
