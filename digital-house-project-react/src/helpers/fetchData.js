export const fetchData = async ({ urlBase, setLoading, setItems, setError }) => {
    try {
        setLoading(true);
        const response = await fetch(urlBase);
        const data = await response.json();
        console.log(data);
        setItems(data);
    } catch (error) {
        setError(error);
        console.log(error);
    } finally {
        setLoading(false);
    }
}
