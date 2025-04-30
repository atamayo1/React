import { useCallback, useEffect, useState } from "react"

export const useFetch = (url = '') => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        errors: null
    });

    const { data, isLoading, errors } = state;

    const getFetch = useCallback(async () => {
        if (!url) return;

        try {
            const res = await fetch(url);
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
    }, [url])

    useEffect(() => {
        getFetch();
    }, [url, getFetch])

    return {
        data,
        isLoading,
        errors
    }
}
