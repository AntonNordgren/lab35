
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Counter from '../Counter.js';

describe('Counter test suite', () => {
    
    it('render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Counter />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    
    test('shallow smoke test', () => {
        let wrapper = shallow(<Counter />);
    });

    test('initial state should be 0', () => {
        let wrapper = shallow(<Counter />);
        expect( wrapper.state('value')).toBe(0);
    });

    test('Increase button works', () => {
        let wrapper = shallow(<Counter />);
        let button = wrapper.find('button').at(0);
        button.simulate('click');
        expect( wrapper.state('value') ).toBe(1);
    });

    test('Decrease button works', () => {
        let wrapper = shallow(<Counter />);
        let button = wrapper.find('button').at(1);
        button.simulate('click');
        expect( wrapper.state('value') ).toBe(-1);
    });

    test('valid input should change state', () => {
        let wrapper = shallow(<Counter />);
        wrapper.find('input').simulate('change', {target:{value : '2'}});
        expect( wrapper.state('value') ).toBe( 2 );
    });

    test('change to a new number', () => {
        let wrapper = shallow(<Counter />);
        wrapper.setState({
            value : 2
        });
        wrapper.find('input').simulate('change', {target:{value : '13'}});
        expect( wrapper.state('value') ).toBe(13);
    });

    test('empty string should not change number', () => {
        let wrapper = shallow(<Counter />);
        wrapper.setState({
            value : 2
        });
        wrapper.find('input').simulate('change', {target:{value : ''}});
        expect( wrapper.state('value') ).toBe(2);
    });

    test('invalid input should not change state', () => {
        let wrapper = shallow(<Counter />);
        wrapper.setState({
            value : 2
        });
        wrapper.find('input').simulate('change', {target:{value : 'a'}});
        expect( wrapper.state('value') ).toBe(2);
    });

});