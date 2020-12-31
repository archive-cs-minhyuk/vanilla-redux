import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

const addToDo = createAction("ADD"); //addToDo 자체는 fucntion임.
const deleteToDo = createAction("DELETE");
// addToDo()로 호출하면 {type:"ADD", payload:undefined} 준다
// action에 전달하고 싶은 정보가 무엇이던지 간에 payload와 함께 보내짐.

/* const reducer = (state = [], action) => {
  //action에 전달된 정보 == payload 기억! 
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return state;
  }
}; */

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload),
}); //createReducer는 새로운 state를 return해도 되고, 원래의 state를 mutate해도 됨.

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
