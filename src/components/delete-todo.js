

const DeleteTodo= ()=>{

    function deleteTodoItem(){
        
    }

    return (
        <>
           <span className="cursor-pointer" onClick={deleteTodoItem} ><img src={"../cross-icon.png"} alt="cross-icon"/></span>
        </>
    )
}

export default DeleteTodo;