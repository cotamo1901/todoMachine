import logo from "./platzi.webp";
import "./App.css";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItems } from "./components/TodoItems";
import { TodoSearch } from "./components/TodoSearch";
import {TodoCreateButton} from "./components/TodoCreateButton.jsx"



const defaultTodos=[

  {text:"Cortar cebolla",completed:true},
  {text:"Tomar el cursi de intro a react",completed:false},
  {text:"Llorar con la llorona",completed:false},
  {text:"LLALAAL",completed:false}
]

function App() {
  return (
    <>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch/>
      <TodoItems />
      <TodoCreateButton/>

    </>
  );
}

export default App;
