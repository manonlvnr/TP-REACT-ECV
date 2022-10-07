import { Component } from "react";

class Example2 extends Component {

    constructor() { // initilize the variable
        super()
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() { // une fois que le composant est créé je fais ça
        this.timer =setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h2>Horloge</h2>
                <p>{this.state.date.toLocaleDateString()}</p>
                <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default Example2;
