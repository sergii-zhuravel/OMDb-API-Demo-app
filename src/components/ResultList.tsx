import React from "react";
import styled from 'styled-components';
import ResultItem, { ResultItemProps } from './ResultItem';

const Table = styled.table`
  width: 100%;
`;

export type ResultListProps = {
    result: ResultItemProps[]
}

export default function ResultList({ result = [] }: ResultListProps) {
    return <Table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Thumbnail</th>
            </tr>
        </thead>
        <tbody>
            {result.map(item => <ResultItem {...item} key={item.imdbID} />)}
        </tbody>
    </Table>
}