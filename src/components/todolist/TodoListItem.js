import { Button } from "react-bootstrap";

const itemStyle = {
    backgroundColor: "#ddd",
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
        <div style={itemStyle} className="container">
            <h5 style={itemNameStyle}>{listItem.name}</h5>
            <Button onClick={deleteTodoItem} variant="danger">Done</Button>
        </div>
    )
}

export default TodoListItem;
