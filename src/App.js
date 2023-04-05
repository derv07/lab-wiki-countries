import './App.css';
import dataCountry from './countries.json';
import { useState } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails'

function App() {

  const [countries, setCountries] = useState(dataCountry)


  return (
    <div className="App">
      <Navbar/>
      <div className="d-flex flex-row row">
        <div className="col-4">
          <CountriesList countries={countries}/>
        </div>
        <div className="col">
          <Routes>
            <Route path="/:id" element={ <CountryDetails countries={countries} className="col m-5"/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
