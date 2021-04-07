import * as React from 'react';
import { shallow } from 'enzyme';
import ResultItem from '../ResultItem';

test('ResultItem component test', () => {
    const component = shallow(<ResultItem Title="Title" Year="2021" Poster="test/url" imdbID="1" />);

    // Snapshot 
    expect(component).toMatchSnapshot();
});