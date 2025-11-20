import { createContext, useEffect, useMemo, useState } from 'react'
import { fetchCountries } from '../api/countriesApi';

export const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const regions = useMemo(() => {
        if (loading) return [];

        const set = new Set();
        countries.forEach(country => set.add(country.region));
        return [...set];
    }, [countries, loading])

    useEffect(() => {
        fetchCountries().then(data => {
            setCountries(data);
            setLoading(false);
        });
    }, [])

    return (
        <CountriesContext.Provider value={{ countries, regions, loading }}>
            {children}
        </CountriesContext.Provider>
    );
}

export default CountriesContext