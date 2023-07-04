import React from "react";
import { styled } from "styled-components";
import TodoCreator from "../components/TodoCreator";
import TodoEditor from "../components/TodoEditor";

function TodoListPage() {
  return (
    <StLayout>
      <StContainer>
        <div>My Todo List</div>
        <div>React</div>
      </StContainer>
      <TodoCreator></TodoCreator>
      <TodoEditor></TodoEditor>
    </StLayout>
  );
}

export default TodoListPage;

const StLayout = styled.section`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

const StContainer = styled.div`
  align-items: center;
  border: 1px solid #ddd;
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0 20px;
`;
