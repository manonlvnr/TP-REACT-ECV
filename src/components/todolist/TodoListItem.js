
const itemStyle = {
    borderRadius: "15px",
    padding: "0.7em",
    marginTop: "10px",
}

const itemNameStyle = {
    testAlign: "center",
    fontSize:"22px",
    color:"black",
}

function TodoListItem ({listItem, todoList, setTodoList}) {
    const deleteTodoItem = () => {
        setTodoList(todoList.filter(item => item.id !== listItem.id))
    }

    return(
        <div style={itemStyle} className="todo-item">
            <h5 style={itemNameStyle}>{listItem.name}</h5>
            <button className="action-button" onClick={deleteTodoItem} variant="danger">Done</button>
        </div>
    )
}

export default TodoListItem;
