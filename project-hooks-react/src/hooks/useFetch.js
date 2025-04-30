import { useState } from "react"

export const useFetch = () => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        errors: null
    });

    const { data, isLoading, errors } = state;

    const fetchData = async (url, method, bodyData = null) => {
        if (!url) return;

        try {
            const options = {
                method: method,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: method == 'GET' || method == 'DELETE' ? null : JSON.stringify(bodyData)
            }
            const res = await fetch(url, options);
            const data = await res.json();
            setState({
                data,
                isLoading: false,
                errors: null,
            })
        } catch (error) {
            setState({
                data: null,
                isLoading: false,
                errors: error,
            })
        }
    }

    return {
        data,
        isLoading,
        errors,
        fetchData,
    }
}
