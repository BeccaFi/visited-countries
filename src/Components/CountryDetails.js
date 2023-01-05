import { Navigate, useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { useNavigate } from "react-router-dom";
import Star from '../images/star.png';

const CountryDetails = () => {
    const { id } = useParams();
    const { data } = useFetch(`http://localhost:3002/countries/${id}`);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch(`http://localhost:3002/countries/${id}`, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }

    return (
        <div className="country-details">
            { data && (
                <>
                <div className="short-info">
                    <img src={ data.flag } height="200px" width="300px"/>
                    <div className="top">
                        <h2>{ data.country }</h2>
                        <p>{ data.rating } <img src={Star} width="20px" height="20px" /></p>
                    </div>
                    <div className="flex-info">
                        <div className="question">
                        <p>Capital: </p>
                        <p>Continent: </p>
                        <p>Languages: </p>
                        <p>Population: </p>
                        </div>
                        <div className="answer">
                        <p>{ data.capital }</p>
                        <p>{ data.continent }</p>
                        <p>{ data.languages }</p>
                        <p>{ data.population }</p>
                        </div>
                    </div>
                        <button onClick={handleClick}>Delete</button>
                </div>
                <div className="all-info">
                <h1>DETAILS</h1>
                <p>{ data.comment }</p>
                </div>
                </>
            ) }

            

        </div>
    );
}

export default CountryDetails;