import { createStore } from "redux";
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  //never mutate state?
  switch (action.type) {
    case ADD_TODO:
      return [];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer); //기존의 toDo는 html만 바꾸는 꼴이고, toDo list의 원소들을 보관할 수 없었다는 점을 개선!

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  store.dispatch({ type: ADD_TODO, text: toDo }); //action에 안에 뭐 있는지 정보도 함께 보냄.
};

form.addEventListener("submit", onSubmit);
