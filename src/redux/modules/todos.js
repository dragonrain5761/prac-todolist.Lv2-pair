// Action value
const CREATE_TODO = "CREATE_TODO";
const DELETE_TODO = "DELETE_TODO";
const DONE_TODO = "DONE_TODO";
const CANCEL_TODO = "CANCEL_TODO";

// Action Creator
export const addTodo = (payload) => {
  return {
    type: CREATE_TODO,
    payload: payload,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id: id,
  };
};

export const doneTodo = (id) => {
  return {
    type: DONE_TODO,
    id: id,
  };
};

export const cancelTodo = (id) => {
  return {
    type: CANCEL_TODO,
    id: id,
  };
};

// initial State
const initialState = {
  todos: [
    {
      id: 1,
      title: "리덕스 어떻게하냐ㅠㅠ",
      body: "공부 더하기~!",
      isDone: false,
    },
    {
      id: 2,
      title: "2레벨 과제 어렵다!!",
      body: "과제 끝내기~!",
      isDone: true,
    },
  ],
};

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.id),
      };

    case DONE_TODO:
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              isDone: true,
            };
          }
          return item;
        }),
      };

    case CANCEL_TODO:
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              isDone: false,
            };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

// export default reducer
export default todos;
