import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Example4 extends Component {

    constructor() { // initilize the variable
        super()
        this.state = {
            userName: '',
        };
    }

    handleChange(event) {
        this.setState({
            userName: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('Bonjour :' + this.state.userName)
    }

    render() {
        return (
            <div>
                <h2>Formulaire</h2>
                <Form onSubmit={(e) => this.handleSubmit(e)}>
                    <Form.Label>
                        <h3>Votre nom:</h3>
                    </Form.Label>
                    <Form.Control type="text" value={this.state.userName} onChange={(e) => this.handleChange(e)}/>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default Example4;
