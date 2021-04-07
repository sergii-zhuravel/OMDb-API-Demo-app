import React from "react";
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 50px;
`;

const CenteredCell = styled.td`
  text-align: center;
`;

export type ResultItemProps = {
    Poster: string;
    Title: string;
    Year: string;
    imdbID: string;
}

export default function ResultItem({ Title, Year, Poster }: ResultItemProps) {
    return <tr>
        <td>{Title}</td>
        <CenteredCell>{Year}</CenteredCell>
        <CenteredCell><StyledImage src={Poster} /></CenteredCell>
    </tr>
}