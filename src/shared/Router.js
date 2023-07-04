import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoListPage from "../pages/TodoListPage";
import TodoDetailPage from "../pages/TodoDetailPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoListPage />}></Route>
        <Route path="/:id" element={<TodoDetailPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
