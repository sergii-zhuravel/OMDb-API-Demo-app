import * as React from 'react';
import { shallow } from 'enzyme';
import SearchForm from '../SearchForm';

test('SearchForm component test', () => {
    const searchQuery = "test";
    const onSearchChangeMock = jest.fn();
    const mockProps = {
        searchQuery,
        onSearchChange: onSearchChangeMock
    }
    const component = shallow(<SearchForm {...mockProps} />);

    // Snapshot 
    expect(component).toMatchSnapshot();
});