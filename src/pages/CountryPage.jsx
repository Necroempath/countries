import React, { useContext } from 'react'
import CountriesContext from '../context/CountriesContext'
import Cards from '../components/Cards';

const CountryPage = () => {
    const { countries, regions, loading } = useContext(CountriesContext);

    if (loading) return <div>Loading...</div>;

    return <Cards countries={countries} />


}

export default CountryPage