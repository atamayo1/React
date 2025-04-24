import PropTypes from "prop-types";
import { useFetchData } from "../../hooks/useFetchData";

export const FetchList = ({ endpoint }) => {
    const { items, loading, error } = useFetchData({ endpoint });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Have an error: {error.message}</p>;

    return (
        <ul>
            {endpoint === 'users'
                ? items.map((item) => <li key={item.id}>{item.name ?? 'Sin nombre'}</li>)
                : items.map((item) => <li key={item.id}>{item.body ?? 'Sin body'}</li>)}
        </ul>
    )
}

FetchList.propTypes = {
    endpoint: PropTypes.string.isRequired
}
