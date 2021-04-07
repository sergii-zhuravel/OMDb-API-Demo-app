import React, { useEffect } from "react";
import useDebounce from "../hooks/useDebounce";
import useReactQuery from "../hooks/useReactQuery";
import ResultList from "../components/ResultList";
import { ResultItemProps } from "../components/ResultItem";

export type ContainerProps = {
    searchQuery: string;
    isFetchingCallback: (key: boolean) => void;
};

export const ResultContainer = ({
    searchQuery,
    isFetchingCallback,
}: Readonly<ContainerProps>): JSX.Element => {
    const debouncedSearchQuery = useDebounce(searchQuery, 600);
    const { status, error, data } = useReactQuery(
        debouncedSearchQuery
    );
    const isFetching = status === 'loading';
    useEffect(() => isFetchingCallback(isFetching), [
        isFetching,
        isFetchingCallback,
    ]);

    return <>
        { isFetching && <div>Loading</div>}
        { !isFetching && data && <ResultList result={data as any as ResultItemProps[]} />}
        { error && "Fetching Error Component"}
    </>
};