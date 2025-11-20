import React from 'react'

const Card = ({ country }) => {
    return (
        <div className='card'>
            <img src={country.flags.svg} alt={country.flags.alt} />
            <div className="text-content">
                <h3>{country.name.common}</h3>
                <p>Capital: {country.capital[0]}</p>
                <p>Population: {country.population}</p>
            </div>
        </div>
    )
}

export default Card