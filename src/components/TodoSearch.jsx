import "./TodoSearch.css";

export const TodoSearch = ({ search, setSearch }) => {
  return (
    <>
      <div className="todo-search-container">
        <div className="todo-text">
          <input
            className="todo-placeholder"
            type="text"
            placeholder="search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};
