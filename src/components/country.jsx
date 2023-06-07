import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../country.css";
import ErrorBoundary from "./errorBoundary";

const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      const data = await response.json();

      if (Array.isArray(data)) {
        setCountry(data);
        console.log(data);
      } else if (typeof data === "object") {
        setCountry([data]);
      }
    };

    fetchCountryData();
  }, [name]);

  return (
    <div>
      <h1>Country Data</h1>
      <section className="country">
        <Link to="/" className="btn btn-light">
          <i className="fas fa-arrow-left"></i> Back Home
        </Link>
        {country.map((c) => {
          const {
            flag,
            name,
            nativeName,
            common,
            region,
            subregion,
            capital,
            translation,
            currencies,
            language,
            borders,
          } = c;

          return (
            <ErrorBoundary key={name.capital}>
              <article>
                <div className="country-inner">
                  <div className="flag">
                    <img src={flag} alt={name} />
                  </div>

                  <div className="c-details">
                    <div>
                      <h2>{name}</h2>
                      <h5>
                        Native Name: <span>{nativeName}</span>
                      </h5>
                      <h5>
                        Common: <span>{common}</span>
                      </h5>
                      <h5>
                        Region: <span>{region}</span>
                      </h5>
                      <h5>
                        Sub Region: <span>{subregion}</span>
                      </h5>
                      <h5>
                        Capital: <span>{capital}</span>{" "}
                      </h5>
                    </div>

                    <div>
                      <h5>
                        Top Level Domain: <span>{translation}</span>
                      </h5>
                      <h5>
                        Currencies: <span>{currencies?.[0]}</span>
                      </h5>
                      <h5>
                        Languages: <span>{language?.[0]}</span>
                      </h5>
                    </div>
                  </div>

                  {borders && borders.length > 0 && (
                    <div>
                      <h3>Border Countries: </h3>
                      <div className="borders">
                        {borders.map((border) => (
                          <ul key={border}>
                            <li>{border}</li>
                          </ul>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            </ErrorBoundary>
          );
        })}
      </section>
    </div>
  );
};

export default Country;
