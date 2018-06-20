
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Counter from '../Counter.js';

describe('Counter test suite', () => {

    let wrapper = shallow(<Counter />);

    it('render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Counter />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('shallow smoke test', () => {
        wrapper;
    });

    test('initial state should be 0', () => {
        expect( wrapper.state('value')).toBe(0);
    });

    test('Increment button works', () => {
        let button = wrapper.find('button').at(0);
        button.simulate('click');
        expect( wrapper.state('value') ).toBe(1);
    });

    test('Decrease button works', () => {
        let button = wrapper.find('button').at(1);
        button.simulate('click');
        expect( wrapper.state('value') ).toBe(0);
    });
    
    test('valid input should change state', () => {
        wrapper.find('input').simulate('change', {target:{value : '2'}});
        expect( wrapper.state('value') ).toBe( 2 );
    });

    test('invalid input should not change state', () => {
        wrapper.find('input').simulate('change', {target:{value : 'a'}});
        expect( wrapper.state('value') ).toBe(2);
    });

});