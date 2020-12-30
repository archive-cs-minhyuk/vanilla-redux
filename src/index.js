import { createStore } from "redux"; //store는 내 data(state)를 넣는 곳

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (state = 0) => {
  //state=0 준 것은 default 값.
  return state;
}; //reducer는 내 data를 modify하는 함수! return하는 것: 내 app에 있는 data
const countStore = createStore(countModifier); //createStore은 reducer(함수)를 인자로 받아야함.

console.log(countStore.getState()); //이렇게 값 사용. 위에서 return한 값 나옴.

/* only reducer can modify the state! */
