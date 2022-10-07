import { nanoid } from "nanoid";
import { Form,Button } from "react-bootstrap";


function TodoForm ({todo, setTodo, todoList, setTodoList}) {

    const handleChange = (event) => {
        setTodo(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setTodoList([...todoList, {name:todo, id:nanoid()}])
        setTodo("");
    }

    return(
        <div className="container">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Control type="text" value={todo} onChange={handleChange}/>
                    <Button variant="primary" type="submit">Add</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default TodoForm;
