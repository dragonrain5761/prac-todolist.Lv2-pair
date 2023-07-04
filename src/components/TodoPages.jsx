import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function TodoPages() {
  return (
    <StButtonSet>
      <StPagesButton>상세페이지</StPagesButton>
    </StButtonSet>
  );
}

export default TodoPages;

const StButtonSet = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 5px;
`;

const StPagesButton = styled.button`
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 100%;
  background-color: #fff;
  border: 2px solid black;
`;
