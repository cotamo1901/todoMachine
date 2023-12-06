export const TodoCounter = ({total,completed}) => {
 
 
  return (
    <>
      <h1>your task</h1>
      <p>
        {" "}
        <span>{completed}</span>of <span>{total}</span>
      </p>
    </>
  );
};
