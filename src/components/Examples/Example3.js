import { Component } from "react";
import { Button } from "react-bootstrap";

class Example3 extends Component {

    constructor() { // initilize the variable
        super()
        this.state = {
            isToggle: true
        };
    }

    handleClick() {
        this.setState({
            isToggle: !this.state.isToggle
        })
    }

    render() {
        return (
            <div>
                <h2>Le toggle !</h2>
                <Button variant={this.state.isToggle ? "primary" : "dark" } onClick={() => this.handleClick()}>{this.state.isToggle ? 'ON' : 'OFF'}</Button>
            </div>
        )
    }
}

export default Example3;
