import { useCallback, useEffect, useState } from "react";
import { fetchData } from "../helpers/fetchData";

export const useFetchData = ({ endpoint }) => {
    const urlBase = `https://jsonplaceholder.typicode.com/${endpoint}`;

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleGetItems = useCallback(async () => {
        await fetchData({ urlBase, setLoading, setItems, setError })
    }, [urlBase])

    useEffect(() => {
        handleGetItems();
    }, [handleGetItems])

    return {
        items, loading, error
    }
}
