
import React, { Component } from 'react';
import './CSS/Counter.css';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    increase = event => {
        this.setState({
            value: this.state.value + 1
        });
    }

    decrease = event => {
        this.setState({
            value: this.state.value - 1
        });
    }

    handleText = event => {
        if(event.target.value === '') {
            this.setState({
                value : 0
            });
        }
        else if(!isNaN(parseInt(event.target.value))) {
            this.setState({
                value : parseInt(event.target.value)
            });
        }
    }

    render() {
        return (
            <div className="Counter">
            Counter Component
                <div>
                    {this.state.value}
                </div>
                
                <input onChange={ this.handleText } type="text" />

                <button onClick={ this.increase } >+</button>
                <button onClick={ this.decrease }>-</button>

            </div>
        );
    }
}

export default Counter;