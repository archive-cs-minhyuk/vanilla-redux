import React, { useState } from "react";
import { connect } from "react-redux";
import { add } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text); //넘겨 받은 prop인 addToDo가 dispatch 작업을 포함하기 때문에, 이렇게만 쓰면 됨
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  return { toDos: state }; //toDos: ["Hi"] 형식으로 props에 추가됨
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addToDo: (text) => dispatch(add(text)), //이렇게 해놓으면 component에서 addToDo(text) 이렇게 바로 쓸 수 있음
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
