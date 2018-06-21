
import React, { Component } from 'react';
import './CSS/List.css';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list : [],
            text : ''
        }
    }

    handleChange = event => {
        this.setState({
            text : event.target.value
        });
    }

    handleAdd = event => {
        let theList = this.state.list;
        let newItem = this.state.text;
        
        if(newItem !== '' && !this.itemExist(newItem)) {
            theList.push(newItem);
        }
        
        this.setState({
            list : theList
        });
    }

    itemExist = (item) => {
        for(let i = 0; i < this.state.list.length; i++) {
            if(this.state.list[i] === item) {
                return true;
            }
        }
        return false;
    }

    handleDelete = item => {
        let theList = this.state.list;
        for(let i = 0; i < theList.length; i++) {
            if(theList[i] === item) {
                theList.splice(i, 1);
            }
        }
        this.setState({
            list : theList
        });

    }

    render() {
        return (
            <div className='listComponent'>
                <div>
                    List Component
                </div>
                <div className="inputDiv">
                    <input onChange={ this.handleChange } type="text" />
                    <button onClick={ this.handleAdd }>Add</button>
                </div>
                <div>
                    <ul className="theList">
                        {
                            this.state.list.map((text, index) => {
                                return(
                                <li key={index + text}>
                                    {text}
                                    <button onClick={() => this.handleDelete(text)}>Remove</button>
                                </li>
                                );
                            })
                    }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Counter;