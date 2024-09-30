import React, { useRef,useState } from 'react'


function ListApp() {
const task=useRef("")

const [todos, setTodos] = useState([]);

const addTodo = () => {
   var t=task.current.value
   alert (t)
};


  return (
    <div>
      <h1>To-Do App</h1>
      
      <input ref={task} type='text' placeholder='Enter your list'></input>
      <button onClick={()=>addtodoList()}>Add</button>
    </div>
  )
}

export default ListApp