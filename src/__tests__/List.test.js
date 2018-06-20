
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import List from '../List.js';

describe('List test suite', () => {

    it('render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('Smoke test', () => {
        let wrapper = shallow(<List />);
    });

    test('Initial list length should be 0', () => {
        let wrapper = shallow(<List />);
        expect(wrapper.find('.theList').length).toBe(1);
    });

});