import { useState } from "react";
import TodoDetails from "./todo-details";
import DeleteTodo from "./delete-todo";

const Body= ()=>{

  const [name, setName]= useState("")
  const [allTodos, setAllTodos]= useState([]);

  let nextId = 0;

  const addNewTodo = (event) => {
    if(event.key === 'Enter'){
      console.log('enter press here! ')
      console.log(allTodos);
      setAllTodos([
        ...allTodos,
        { id: nextId++, name: event.target.value }
      ]);
      event.target.value= "";
    }
    console.log(allTodos);
  }

  function deleteData(data){
    setAllTodos(data)
  }

    return (
      <>
      
      {/* <input value={name} onChange={(e) => setName(e.target.value)} /> */}
      <input className="input-box" type="text" onKeyPress={(e) => addNewTodo(e)} /> 
        
        <div className='todo-data'>
            

            {
              allTodos.map(todo => (
              <>
                  <TodoDetails key={todo.id} details={todo}/>
                  <DeleteTodo deleteTodoItem={deleteData}/>
              </>
          
        ))}
          </div>


        {/* {  Footer goes here */
        
            allTodos?.length === 0 ? <div></div>
            :
            <div className="todo-footer">
              <div>{allTodos.length}{ allTodos?.length> 1 ? " items" : " item"}{" left"}</div>
              <div>All</div>
              <div>Active</div>
              <div>Completed</div>
            </div>
          
        }
        

      </>
    )
  }

  export default Body;