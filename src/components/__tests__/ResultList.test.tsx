import * as React from 'react';
import { shallow } from 'enzyme';
import ResultList from '../ResultList';

test('ResultList component test', () => {
    const mockData = [{ Title: "Title", Year: "2021", Poster: "test/url", imdbID: "1" }];
    const component = shallow(<ResultList result={mockData} />);

    // Snapshot 
    expect(component).toMatchSnapshot();
});