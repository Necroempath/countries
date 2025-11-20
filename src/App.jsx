import { CountriesProvider } from './context/CountriesContext'
import CountryPage from './pages/CountryPage'
import './App.css'


function App() {
  return (
    <CountriesProvider>
      <CountryPage />
    </CountriesProvider>
  );
}

export default App
