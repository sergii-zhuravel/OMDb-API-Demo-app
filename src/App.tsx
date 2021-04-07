import React, { useCallback, useState } from "react";
import styled from 'styled-components';
import GlobalStyle from './globalStyles';
import SearchForm from './components/SearchForm';
import { ResultContainer } from './containers/ResultContainer';
import { QueryClient, QueryClientProvider } from "react-query";

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #f0a900;
`;


export default function App() {
    const queryClient = new QueryClient();
    const [searchQuery, setSearchQuery] = useState("");
    const [isFetching, setIsFetching] = useState(false);
    const isFetchingCallback = useCallback((isFetching) => {
        setIsFetching(isFetching);
    }, []);
    return <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Container>
            <Title>Welcome to the OMDb catalog</Title>
            <SearchForm searchQuery={searchQuery} onSearchChange={setSearchQuery} />
            <Title>Results{isFetching && " In the process!"}:</Title>
            <ResultContainer searchQuery={searchQuery} isFetchingCallback={isFetchingCallback} />
        </Container>
    </QueryClientProvider>
}
