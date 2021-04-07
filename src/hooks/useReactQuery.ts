import { useQuery } from "react-query";

export type QueryResponse = {
    [key: string]: string
};

const getStuff = async (searchQuery: string): Promise<QueryResponse> => {
    const response = await fetch(`http://www.omdbapi.com/?s=${searchQuery}&apikey=a9d603ba`);
    if (!response.ok) {
        throw new Error("Problem fetching data");
    }
    const data = await response.json();

    return data.Search;
};

export default function useReactQuery(searchQuery: string) {
    return useQuery<QueryResponse, Error>(["query", searchQuery], () => getStuff(searchQuery), {
        enabled: !!searchQuery, // If we have searchQuery, then enable the query on render
    });
}