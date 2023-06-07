import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
// import Country from "./country"

const url = "https://restcountries.com/v3.1/all"

  
const Countries = () => {
  const [countries, setCountries] = useState([])
  
 
    const fetchCountryData = async () => {
      const response = await fetch(url)
      const countries = await response.json()
      setCountries(countries)
      console.log(countries)
      
    }
 useEffect(() => {
   fetchCountryData()
  }, [])
  const removeCountry=(capital)=>{
    const newCountry=countries.filter((country)=> country.capital !== capital)
    setCountries(newCountry)
  }

   return (
    <div>
      <section className="grid">
  {countries.map((country) =>{
    const { name, language, subregion, region, capital,flags, population }=country
    
    return<article key ={country.name.capital}> 
    <div>
      <img src={country.flags.svg} alt={name} />
      <div className="details">
      <h3 className="country-name">{country.name.common}</h3>
      <h4>Population: <span>{country.population}</span></h4>
       <h4>Region: <span>{country.region}</span></h4>
      <h4>Capital: {country.capital}</h4>

      <div className="buttons">
      <Link to ={`/countries/${name}`}
       className="btn">Learn More</Link>
       <button className="btn" onClick={()=> removeCountry (country.capital)
       
       }>Remove Country</button>

    </div>
      </div>
    </div>
    </article>
  })}
  </section>
     </div>
  )

}




      
      /* <Filter
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setFiltered={setFiltered}
        setCountries={setCountries}
        countries={countries}
      />
      {isLoading ? (
        <h1 className="loading">Loading...</h1>
      ) : searchInput.length > 1 ? (
        <section className="countries">
          {filtered.map((country) => {
            const { capital, name,flags?.svg, s region, capital } =
              country

            return (
              <Link to={`/countries/${name}`} key={capital}>
                <article>
                  <div className="flag">
                    <img src={flag} alt={name} />
                  </div>
                  <div className="details">
                    <h4 className="country-name">
                      Name: <span>{name}</span>
                    </h4>
                    <h4>
                      language: <span>{language.toLocaleString()}</span>
                    </h4>
                    <h4>
                      Region: <span>{region}</span>
                    </h4>
                    <h4>
                      Capital: <span>{capital}</span>
                    </h4>
                  </div>
                </article>
              </Link>
            )
          })}
        </section>
      ) : (
        <section className="countries">
          {countries.map((country) => {
            const { capital, name,flags?.svg, population, region, capital } =
              country

            return (
              <Link to={`/countries/${name}`} key={capital}>
                <article>
                  <div className="flag">
                    <img src={flag} alt={name} />
                  </div>
                  <div className="details">
                    <h4 className="country-name">
                      Name: <span>{name}</span>
                    </h4>
                    <h4>
                      Population: <span>{population.toLocaleString()}</span>
                    </h4>
                    <h4>
                      Region: <span>{region}</span>
                    </h4>
                    <h4>
                      Capital: <span>{capital}</span>
                    </h4>
                  </div>
                </article>
              </Link>
            )
          })}
        </section>
      )}
    </>
  )
} */

 

export default Countries