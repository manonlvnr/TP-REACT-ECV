import { Navbar } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ToDo from "../todolist/ToDo";

function Header () {
    return(
        <Router>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/">
                    Cours React
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/ToDo">TodoList</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Routes>
                <Route path="/ToDo" element={<ToDo/>} />
            </Routes>
        </Router>
    );
}

export default Header;
