import { nanoid } from "nanoid";
import { Form } from "react-bootstrap";


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
        <div className="">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Control type="text" value={todo} onChange={handleChange}/>
                    <button className="action-button" type="submit">Add</button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default TodoForm;
