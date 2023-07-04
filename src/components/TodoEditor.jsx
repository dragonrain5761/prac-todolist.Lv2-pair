import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo, doneTodo, cancelTodo } from "../redux/modules/todos";

const TodoEditor = () => {
  const todoList = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  //삭제 기능
  // ---------------------------------------------
  const onClickDeleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  // ---------------------------------------------

  //완료 기능
  // ---------------------------------------------
  const onClickDoneHandler = (id) => {
    dispatch(doneTodo(id));
  };
  // ---------------------------------------------

  //완료 기능
  // ---------------------------------------------
  const onClickCancelHandler = (id) => {
    dispatch(cancelTodo(id));
  };
  // ---------------------------------------------

  return (
    <StlistContainer>
      <StH2>Working.. 🔥</StH2>
      <StWrapper>
        {todoList.map((item) => {
          if (item.isDone == false) {
            return (
              <StTodoContainer key={item.id}>
                <div>
                  <StH2>{item.title}</StH2>
                  <StH4>{item.body}</StH4>
                </div>
                <StButtonSet>
                  <StDeleteButton onClick={() => onClickDeleteHandler(item.id)}>
                    삭제
                  </StDeleteButton>
                  <StCompleteButton onClick={() => onClickDoneHandler(item.id)}>
                    완료
                  </StCompleteButton>
                </StButtonSet>
                <Link to={`/${item.id}`}>
                  <StPageButton>상세페이지</StPageButton>
                </Link>
              </StTodoContainer>
            );
          }
        })}
      </StWrapper>

      <StH2>Done..! 🎉</StH2>
      <StWrapper>
        {todoList.map((item) => {
          if (item.isDone == true) {
            return (
              <StTodoContainer key={item.id}>
                <div>
                  <StH2>{item.title}</StH2>
                  <StH4>{item.body}</StH4>
                </div>
                <StButtonSet>
                  <StDeleteButton onClick={() => onClickDeleteHandler(item.id)}>
                    삭제
                  </StDeleteButton>
                  <StCompleteButton
                    onClick={() => onClickCancelHandler(item.id)}
                  >
                    취소
                  </StCompleteButton>
                </StButtonSet>
                <Link to={`/${item.id}`}>
                  <StPageButton>상세페이지</StPageButton>
                </Link>
              </StTodoContainer>
            );
          }
        })}
      </StWrapper>
    </StlistContainer>
  );
};

export default TodoEditor;

const StlistContainer = styled.div`
  padding: 0 24px;
`;

const StH2 = styled.h2`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  //긴글 생략
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StH4 = styled.h4`
  display: block;
  //긴글 생략
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const StTodoContainer = styled.div`
  border: 4px solid teal;
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 270px;
`;

const StButtonSet = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;

const StDeleteButton = styled.button`
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 50%;
  background-color: #fff;
  border: 2px solid red;
`;

const StCompleteButton = styled.button`
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 50%;
  background-color: #fff;
  border: 2px solid green;
`;

const StPageButton = styled.button`
  margin-top: 10px;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 100%;
  background-color: #fff;
  border: 2px solid black;
`;
