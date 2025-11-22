import { Link } from "react-router-dom";
import '../CountryDetails/CountryDetails.css'
import { FaMap } from "react-icons/fa";
import CountUp from "react-countup";

const CountryDetails = ({ country }) => {
  let un = `It's not a UN member.`;
  let borders = country.borders;
  let languages = [];

  for(const key in country.languages){
    languages.push(country.languages[key]);
  }

  if (country.unMember) {
    un = `It's a UN member.`;
  }

  if (borders.length === 0) {
    borders = "No borders";
  } else {
    borders = borders.map(border => {
      return <Link className="link" to={`/country/${border}`}>{border} </Link>;
    });
  }
  return (
    <div className="country-detail">
      <img src={country.flags.svg} alt={country.flags.alt} />
      <div className="text-content">
        <p className="header">{country.name.common}</p>
        <p>Capital: {country.capital.join(', ')}</p>
        <p>Population: <CountUp end={country.population} duration={3.75}/></p>
        <p>{un}</p>
        <p>Languages: {languages.join(", ")}</p>
        <p>Borders: {borders}</p>
        <Link to={country.maps.googleMaps} target="_blank"><FaMap className="map"/></Link>
      </div>
    </div>
  );
};

export default CountryDetails;
