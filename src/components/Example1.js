import { Component } from "react";
import { Button } from "react-bootstrap";

class Example1 extends Component {

    constructor() { // initilize the variable
        super()
        this.state = {
            compteur: 0,
        }
    }

    increment() {
        this.setState({
            compteur: this.state.compteur + 1
        })
    }

    render() {
        return (
            <div>
                <h2>Compteur</h2>
                <p>{this.state.compteur}</p>
                <Button variant="primary" onClick={ () => this.increment() }>Cliker</Button>
            </div>
        )
    }
}

export default Example1;
