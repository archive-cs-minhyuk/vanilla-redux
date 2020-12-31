import { createStore } from "redux";
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
}; //코드 최적화를 위해 만든 action만 return하는 함수= action creator(밑에서 쓰임)
const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const reducer = (state = [], action) => {
  //never mutate state? state를 수정할 수 있는 유일한 방법은 action을 dispatch하는 것!
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state]; //...state : es6 spread. 안에 있는 원소들 다 풀어놓는 것
    case DELETE_TODO:
      return state.filter((elem) => elem.id !== action.id);
    default:
      return state;
  } //reducer의 핵심 - state를 mutate하는 것이 아니라 새로운 state를 return하는 것!
};

const store = createStore(reducer); //기존의 toDo는 html만 바꾸는 꼴이고, toDo list의 원소들을 보관할 수 없었다는 점을 개선!

const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id); //string으로 넘어오기 때문에 paresInt 해줘야 함.
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text)); //action에 안에 뭐 있는지 정보도 함께 보냄.
};

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
