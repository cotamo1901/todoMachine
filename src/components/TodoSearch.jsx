import './TodoSearch.css'
import { useState } from 'react'; // import useState


export const TodoSearch = () => {
  const [search, setSearch] = useState('') // declare a state variable called search and initialize it to an empty string
  console.log(search)
  return (
    <>
      <div className="todo-search-container">
        <div className="todo-text">
        <input  className='todo-placeholder' type="text" placeholder="search..." value={search} onChange={(e)=>{
          setSearch(e.target.value)
        }} />


        </div>
      </div>
    </>
  );
};
