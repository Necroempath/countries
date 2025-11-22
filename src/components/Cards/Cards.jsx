import { Link } from "react-router-dom";
import Card from "../Card/Card";
import "../Cards/Cards.css";

const Cards = ({ countries }) => {
  return (
    <div className="cards">
      {countries.map(country => (
        <Link to={`/country/${country.cca3}`}>
          <Card key={country.cca3} country={country} />
        </Link>
      ))}
    </div>
  );
};

export default Cards;
