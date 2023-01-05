import { useState, useEffect } from 'react';
import useFetch from '../Hooks/useFetch';
import CountryList from './CountryList';
import {Sort, SortReverse} from '../Hooks/Sort';


const Home = () => {

  {/*  let url = `http://localhost:3002/countries`;

    let { data } = useFetch(url);
    const { sortedData } = Sort('http://localhost:3002/countries?_sort=rating&_order=desc');
    const { sortedDataR } = SortReverse('http://localhost:3002/countries?_sort=rating');
*/}

    const [filter, setFilter] = useState('All');
    const [sortBy, setSortBy] = useState('None');

    const { data } = useFetch(sorting());
    
    function sorting() {
        if(sortBy === 'Alphabetical order'){
            return 'http://localhost:3002/countries?_sort=country';
        } else if (sortBy === 'High-Low'){
            return 'http://localhost:3002/countries?_sort=rating&_order=desc';
        } else if (sortBy === 'Low-High'){
            return 'http://localhost:3002/countries?_sort=rating';
        }  else {
            return `http://localhost:3002/countries`;
        }
    };

    return (
        
        <div className="home">
        <div className='sort-filter'>
        <label>Sort by </label>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option></option>
            <option>Alphabetical order</option>
            <optgroup label='Rating'>
            <option>High-Low</option>
            <option>Low-High</option>
            </optgroup>
        </select>
        <label>Filter </label>
        <select value={filter} onChange={e => setFilter(e.target.value)}>
            <option>All</option>
            <optgroup label='Continent'>
                <option>Africa</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>
                <option>North America</option>
                <option>South America</option>
            </optgroup>
        </select>
    </div>

        {data && <CountryList countries={ filter === 'All' ? data : data.filter(country => country.continent === filter) }/>}


        </div>
    )
}

export default Home;