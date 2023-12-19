
import './TodoItems.css'
export const TodoItems = (props) => {
  return (
    <>
    <div className="todo-items-container">

    <li className="todo-items-list">
      <span className={`icon-check ${props.completed && "icon-check-active"}`}>V</span>
      <p className={`${props.completed && "todoItem-p--complete"} `}>{props.text}</p>
      <span>X</span>
    </li>


    </div>
    
    </>
  );
};
