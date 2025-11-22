import React, { useContext } from "react";
import CountriesContext from "../context/CountriesContext";
import Cards from "../components/Cards/Cards";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const CountriesPage = () => {
  const { countries, loading } = useContext(CountriesContext);
  const { regionId } = useParams();

  if (loading) return <Loading>Loading...</Loading>;

  const actualCountries = regionId
    ? countries.filter(c => c.region === regionId)
    : countries;

  return <Cards countries={actualCountries} />;
};

export default CountriesPage;
