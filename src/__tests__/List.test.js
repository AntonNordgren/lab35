
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

    test('input changes text in state', () => {
        let wrapper = shallow(<List />);
        let list = wrapper.find('input');
        list.simulate('change', { target: { value: 'item1' } });
        expect(wrapper.state('text')).toBe('item1');
    });

    test('click on add should add item to list', () => {
        let wrapper = shallow(<List />);
        let list = wrapper.find('input');
        let addButton = wrapper.find('button');
        list.simulate('change', { target: { value: 'item1' } });
        addButton.simulate('click');
        expect(wrapper.state('list')).toEqual(['item1']);
    });

    test('empty text should not add new item', () => {
        let wrapper = shallow(<List />);
        let input = wrapper.find('input');
        let addButton = wrapper.find('button').at(0);
        input.simulate('change', { target: { value: '' } });
        addButton.simulate('click');
        expect(wrapper.state('list')).toEqual([]);
    });
    
    test('adding an item to a list that is not empty', () => {
        let wrapper = shallow(<List />);
        let input = wrapper.find('input');
        let addButton = wrapper.find('button');
        wrapper.setState({
            list : ['item1']
        });
        input.simulate('change', { target: { value: 'item2' } });
        addButton.simulate('click');
        expect(wrapper.state('list')).toEqual(['item1', 'item2']);
    });

    test('should not add if already exist', () => {
        let wrapper = shallow(<List />);
        let input = wrapper.find('input');
        let addButton = wrapper.find('button').at(0);
        wrapper.setState({
            list : ['item1', 'item2', 'item3']
        });
        input.simulate('change', { target: { value: 'item1' } });
        addButton.simulate('click');

        expect(wrapper.state('list')).toEqual(['item1','item2','item3']);
    });

    test('delete button shuold work', () => {
        let wrapper = shallow(<List />);
        wrapper.setState({
            list : ['item1', 'item2', 'item3']
        });
        let firstDeleteButton = wrapper.find('button').at(1);
        firstDeleteButton.simulate('click');
        expect(wrapper.state('list')).toEqual(['item2', 'item3']);
    });

    test('delete button shuold work nr 2', () => {
        let wrapper = shallow(<List />);
        wrapper.setState({
            list : ['item1']
        });
        let firstDeleteButton = wrapper.find('button').at(1);
        firstDeleteButton.simulate('click');
        expect(wrapper.state('list')).toEqual([]);
    });

});