import React, { useCallback, useEffect, useRef } from "react";
import styled from 'styled-components';


const StyledInput = styled.input`
    padding: 0.5em 1em;
    margin: 0.5em;
    color: palevioletred;
    background: papayawhip;
    border: none;
    border-radius: 15px;
    width: 50%;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
`;

export type SearchInputProps = {
    searchQuery: string;
    onSearchChange: (searchQuery: string) => void;
};

export default function SearchForm({ searchQuery, onSearchChange }: SearchInputProps) {
    const onInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        onSearchChange(e.target.value);
    }, []);
    const onSubmitHandler = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }, []);
    const inputRef = useRef(null);
    useEffect(() => {
        if (inputRef && inputRef.current) {
            inputRef.current.focus();
        }
    }, [])
    return <Form onSubmit={onSubmitHandler}>
        <StyledInput ref={inputRef} placeholder="Enter Title" id="searchInput" type="text" name="search" aria-label={"Search Input"} onChange={onInputChange} value={searchQuery} />
    </Form>
}