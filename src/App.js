
import React, { Component } from 'react';

import Counter from './Counter.js';
import List from './List.js';

class App extends Component {
    render() {
        return (
            <div>
                <Counter />
                <List />
            </div>
        );
    }
}

export default App;
