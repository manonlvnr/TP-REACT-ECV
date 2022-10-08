import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo () {
    
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    return(
        <div className="todo-container">
            <h3 className="todo-title">Add ToDo :</h3>
            <TodoForm todo={todo}
            todoList={todoList}
            setTodo={setTodo}
            setTodoList={setTodoList}
            />
            <TodoList todoList={todoList} setTodoList={setTodoList}/>
        </div>
    )
}

export default Todo;
