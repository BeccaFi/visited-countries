import { useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadData() {
            const res = await fetch(url);
            const data = await res.json();

            setData(data);
        }
            loadData();
    }, [url]);

    return { data, isPending, error };
}

export default useFetch;