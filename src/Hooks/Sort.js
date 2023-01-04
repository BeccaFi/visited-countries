import { useEffect, useState } from "react";

const Sort = (url) => {
    const [sortedData, setSortedData] = useState(null);
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);

    useEffect(() => {
        async function loadData() {
            const res = await fetch(url);
            const data = await res.json();

            setSortedData(data);
        }
            loadData();
    }, [url]);

    // return { data, isPending, error };
    return { sortedData };
}

export default Sort;

