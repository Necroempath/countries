import CountUp from 'react-countup'
import '../Card/Card.css'

const Card = ({ country }) => {
    return (
        <div className='card'>
            <img src={country.flags.svg} alt={country.flags.alt} />
            <div className="text-content">
                <h3>{country.name.common}</h3>
                <p className='capital'>Capital: {country.capital.join(", ")}</p>
                <p>Population: <CountUp end={country.population} duration={3.75}/></p>
            </div>
        </div>
    )
}

export default Card