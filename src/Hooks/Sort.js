import { useEffect, useState } from "react";

const Sort = (url) => {
    const [sortedData, setSortedData] = useState(null);

    useEffect(() => {
        async function loadData() {
            const res = await fetch(url);
            const data = await res.json();

            setSortedData(data);
        }
            loadData();
    }, [url]);

    return { sortedData };
}



const SortReverse = (url) => {
    const [sortedDataR, setSortedDataR] = useState(null);

    useEffect(() => {
        async function loadData() {
            const res = await fetch(url);
            const data = await res.json();

            setSortedDataR(data);
        }
            loadData();
    }, [url]);

    return { sortedDataR };
}

export {Sort, SortReverse};
