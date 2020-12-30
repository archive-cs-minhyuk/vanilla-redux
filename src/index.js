import { createStore } from "redux"; //store는 내 data(state)를 넣는 곳

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

//const reducer = () => {};
//const store = createStore(reducer); //createStore은 reducer(함수)를 인자로 받아야함.

let count = 0;

number.innerText = count;

const updateText = () => {
  number.innerText = count;
};

const handleAdd = () => {
  count = count + 1;
  updateText();
};

const handleMinus = () => {
  count = count - 1;
  updateText();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
