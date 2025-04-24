import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";

export const FetchList = ({ endpoint }) => {
    const urlBase = `https://jsonplaceholder.typicode.com/${endpoint}`;

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleGetItems = useCallback(async () => {
        try {
            setLoading(true);
            const response = await fetch(urlBase);
            const data = await response.json();
            console.log(data);
            setItems(data);
        } catch (error) {
            console.log(error);
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [urlBase])

    useEffect(() => {
        handleGetItems();
    }, [handleGetItems])

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Hubo un error: {error.message}</p>;

    return (
        <ul>
            {items.map((item) => <li key={item.id}>{item.name ?? 'Sin nombre'}</li>)}
        </ul>
    )
}

FetchList.propTypes = {
    endpoint: PropTypes.string.isRequired
}
