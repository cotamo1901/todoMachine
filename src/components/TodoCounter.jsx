import "./TodoCounter.css";
import "../global.css";

export const TodoCounter = ({ total, completed }) => {
  return (
    <>
      <div className="todo__counter__container">
        <h1 className="title__todo">your task</h1>
        <p className="subtitle__todo">
          {" "}
          <span className="todo__work">{completed}</span> of <span className="todo__work">{total}</span>
        </p>
      </div>
    </>
  );
};
