import { useState } from "react";
import { Form,Button } from "react-bootstrap";
import List from "./List";

function ToDo () {
    
    const [todo, setTodo] = useState();
    const [todolist, setTodoList] = useState([]);

    const handleChange = (event) => {
        setTodo(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        todolist.push(todo);
        console.log(todolist);
        setTodo("");
    }

    return(
        <div className="container">
            <h3>Add ToDo :</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Control type="text" value={todo} onChange={handleChange}/>
                    <Button variant="primary" type="submit">Add</Button>
                </Form.Group>
            </Form>
            {todolist.map((listItem)=>(
                <p key={listItem}>{listItem}</p>
            ))}
            <List />
        </div>
    )
}

export default ToDo;
