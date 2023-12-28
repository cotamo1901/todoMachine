import "./App.css";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoCreateButton } from "./components/TodoCreateButton";
import { TodoList } from "./components/TodoList.jsx";
import { TodoItems } from "./components/TodoItems.jsx";

/* CSS */
import "./reset.css";
import { useState } from "react";

const defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar el cursi de intro a react", completed: true },
  { text: "Llorar con la llorona", completed: false },
  { text: "LLALAAL", completed: true },
  { text: "Usar Estados", completed: true },
];

function App() {
  const [search, setSearch] = useState("");
  const [todos, setTodos] = useState(defaultTodos);
  console.log(search);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(search.toLowerCase());
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    
    newTodos.splice(todoIndex,1)
    setTodos(newTodos);
  };

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch search={search} setSearch={setSearch} />
      <TodoList>
        {searchedTodos.map((todo, index) => (
          <TodoItems
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <TodoCreateButton />
    </>
  );
}

export default App;
