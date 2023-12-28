import "./TodoItems.css";
export const TodoItems = (props) => {
  return (
    <>
      <div className="todo-items-container">
        <li className="todo-items-list">
          <span
            className={`icon-check ${props.completed && "icon-check-active"}`}
            onClick={props.onCompleted}
          >
            V
          </span>
          <p className={`${props.completed && "todoItem-p--complete"} `}>
            {props.text}
          </p>
          <span onClick={props.onDelete}>X</span>
        </li>
      </div>
    </>
  );
};
