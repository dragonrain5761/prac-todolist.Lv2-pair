import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todos";

function TodoCreator() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos.todos);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onChangeTitleHandler = (event) => {
    setTitle(event.target.value);
    console.log(title);
  };
  const onChangeBodyHandler = (event) => {
    setBody(event.target.value);
    console.log(body);
  };

  //Todo 추가하기 기능
  // ---------------------------------------------
  const onSubmitAddHandler = (event) => {
    event.preventDefault();
    if (title === "") return alert("제목을 입력하세요.");
    if (body === "") return alert("내용을 입력하세요.");
    dispatch(
      addTodo({
        title: title,
        body: body,
        isDone: false,
      })
    );
    setTitle("");
    setBody("");
  };
  // ---------------------------------------------

  return (
    <StAddform onSubmit={onSubmitAddHandler}>
      <StInputgroup>
        <StLabel>제목</StLabel>
        <StAddInput
          value={title}
          type="text"
          name="title"
          onChange={onChangeTitleHandler}
        ></StAddInput>
        <StLabel>내용</StLabel>
        <StAddInput
          value={body}
          type="text"
          name="body"
          onChange={onChangeBodyHandler}
        ></StAddInput>
      </StInputgroup>
      <StAddbutton>추가하기</StAddbutton>
    </StAddform>
  );
}

export default TodoCreator;

const StAddform = styled.form`
  background-color: #eee;
  border-radius: 12px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px;
  align-items: center;
  display: flex;
  gap: 20px;
`;

const StInputgroup = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
`;
const StAddInput = styled.input`
  border: none;
  border-radius: 12px;
  height: 40px;
  padding: 0 12px;
  width: 240px;
`;

const StLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const StAddbutton = styled.button`
  background-color: teal;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  height: 40px;
  width: 140px;
  cursor: pointer;
`;
