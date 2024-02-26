const TodoDetails= (props)=>{
    

    const {name, id}= props.details
 
    return (
        <>
        <li>
            {name}
            
        </li>
            
        </>
    )
}

export default TodoDetails;