import { useState } from "react";
import { useNavigate } from 'react-router-dom'; 

const Create = () => {
    const [country, setCountry] = useState('');
    const [capital, setCapital] = useState('');
    const [flag, setFlag] = useState('');
    const [languages, setLanguages] = useState('');
    const [population, setPopulation] = useState('');
    const [rating, setRating] = useState('');
    const [continent, setContinent] = useState('');
    {/*const [author, setAuthor] = useState('Mario');*/}
const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // const newBlog = { title, body, author };

        setIsPending(true);

        fetch('http://localhost:3002/countries', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ country, capital , continent, flag, languages, population, rating })
        }).then(() => {
            setIsPending(false);
            navigate('/')
        })

    }


    return (
        <div className="create">
            <h2>Add a New Country</h2>
            <form onSubmit={handleSubmit}>
                <label>Country: </label>
                <input
                    type="text"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    />
                    <label>Capital: </label>
                <input
                    type="text"
                    required
                    value={capital}
                    onChange={(e) => setCapital(e.target.value)}
                    />
                    <label>Continent: </label>
                <input
                    type="text"
                    required
                    value={continent}
                    onChange={(e) => setContinent(e.target.value)}
                    />
                <label>Flag: </label>
                    <input
                    type="text"
                    required
                    placeholder="input flag image url"
                    value={flag}
                    onChange={(e) => setFlag(e.target.value)}
                    />
                    <label>Languages: </label>
                <input
                    type="text"
                    required
                    placeholder="If several, please separate with a comma"
                    value={languages}
                    onChange={(e) => setLanguages(e.target.value)}
                    />
                    <label>Population: </label>
                <input
                    type="text"
                    required
                    value={population}
                    onChange={(e) => setPopulation(e.target.value)}
                    />
                    <label>Rating: </label>
                <input
                    type="text"
                    required
                    placeholder="1-10"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    />
                {/*<label>Blog author: </label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>*/}
                {!isPending && <button>Add country</button>}
                {isPending && <button disabled>Adding country...</button>}
            </form>
            <p>{ country }</p>
            <p>{ capital }</p>
            {/*<p>Written by: { author }</p>*/}
        </div>
    );
}

export default Create;