import "./App.css";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoCreateButton } from "./components/TodoCreateButton";
import { TodoList } from "./components/TodoList.jsx";
import { TodoItems } from "./components/TodoItems.jsx";

/* CSS */
import './reset.css'

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el cursi de intro a react", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "LLALAAL", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map((todo, index) => (
          <TodoItems 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          
          />
        ))}
      </TodoList>
      <TodoCreateButton />
    </>
  );
}

export default App;
