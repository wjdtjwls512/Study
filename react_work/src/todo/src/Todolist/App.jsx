import "./App.css";
import Header from "./header";
import TodoEditor from "./TodoEditor";
import TodoList from "./Todolist";
import TodoItem from "./Todoitem";
import { useReducer, useRef } from "react";
import { perEnvironmentPlugin } from "vite";

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return;

      [action.newItem, ...state];

    default:
      return state;
  }
}

function App() {
  const [todo, dispatch] = useReducer(reducer, []);

  const idRef = useRef(0);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        createDate: new Date().getTime(),
      },
    });
    idRef.current += 1;
  };
  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      taretId,
    });
  };
  const onDelete = (targetId) => {
    dispatch({ type: "DELETE", targetId });
  };

  return;
  <div className="App">
    <Header /> <TodoEditor onCreate={onCreate} />
    <TodoList todo={todo} onUpdate={onUpdate} />
  </div>;
}

export default App;
