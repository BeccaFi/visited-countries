import { Link } from "react-router-dom";
import Star from '../images/star.png';


const CountryList = ({ countries, country }) => {
   
    return (
      <div className="country-list">
      {countries.map((country) => (
        <Link to={`/countries/${country.id}`} key={country.id}>
        <div className="country-preview" >
          <img src={ country.flag } height="130px" width="200"/>
          <div className="name-rate">
            <h2>{ country.country }</h2>
            <p className="rating">{ country.rating } <img src={Star} width="20px" height="20px" /></p>
            </div>
            <div className="quick-info">
            <p>{ country.capital }</p>
            <button>Details</button>
          </div>
        </div>
        </Link>
    ))}
      </div>
    )
}

export default CountryList;

