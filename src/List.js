
/*
Komponenten ska innehålla ett textfält där användarenkan skriva in en text.
Där ska finnas en button, som man kan klicka på för att lägga till texten i en lista.
Komponenten ska visa listan på något lämpligt sätt.
När listan renderas ska varje element i den förses
med en button som kan användas för att ta bort elementet.
*/

import React, { Component } from 'react';
import './CSS/List.css';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className='listComponent'>
                <div>
                    List Component
                </div>
                <div className="inputDiv">
                    <input type="text" />
                    <button>Add</button>
                </div>
                <div>
                    <ul className="theList">
                        <li>
                            One
                            <button>Delete</button>
                        </li>
                        <li>
                            Two
                            <button>Delete</button>
                        </li>
                        <li>
                            Three
                            <button>Delete</button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Counter;