import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Countries from './components/countries';
import Filter from './components/filter';
import Country from './components/country';

function App() {
  const[countries,setCountries]=useState([])
  const [searchInput, setSearchInput] = useState("");
  const [filtered, setFiltered] = useState([]);
 
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<React.Fragment> {/* Wrap child components in a React.Fragment */}
          <Filter 
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setFiltered={setFiltered}
          setCountries={setCountries}
          countries={countries}/>
          <Countries />
        </React.Fragment>}>
        </Route>
        <Route path="/countries/:name" element={<Country />} />
      </Routes>
    </Router>
  );
}

export default App;
