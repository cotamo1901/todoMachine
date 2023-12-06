
import './TodoItems.css'
export const TodoItems = (props) => {
  return (
    <>
    <div className="todo-items-container">

    <li className="todo-items-list">
      <span>V{props.completed}</span>
      <p>{props.text}</p>
      <span>X</span>
    </li>


    </div>
    
    </>
  );
};
