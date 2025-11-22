import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import CountriesContext from '../context/CountriesContext';
import Loading from '../components/Loading/Loading';
import CountryDetails from '../components/CountryDetails/CountryDetails';

const CountryDetailsPage = () => {
  const {countries, loading} = useContext(CountriesContext);
  const {countryId} = useParams();
  const country = countries.find(item => item.cca3 === countryId);

  if (loading) return <Loading>Loading...</Loading>;


  return (
    <CountryDetails country={country}></CountryDetails>
  )
}

export default CountryDetailsPage