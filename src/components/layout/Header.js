import { Navbar } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Todo from "../todolist/Todo";

function Header () {
    return(
        <Router>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/">
                    Cours React
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/Todo">TodoList</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Routes>
                <Route path="/Todo" element={<Todo/>} />
            </Routes>
        </Router>
    );
}

export default Header;
