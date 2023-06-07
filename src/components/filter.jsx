import React, { useEffect } from "react"

const Filter = ({
  searchInput,
  setSearchInput,
  setFiltered,
  setCountries,
  countries,

})=>{
  const regions = [
    {
      name: "Filter by region",
      desc: "All",
    },
    {
      name: "Africa",
      desc: "Africa",
    },
    {
      name: "Americas",
      desc: "Americas",
    },
    {
      name: "Asia",
      desc: "Asia",
    },
    {
      name: "Europe",
      desc: "Europe",
    },
    {
      name: "Oceania",
      desc: "Oceania",
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const searchCountries = (searchValue) => {
    setSearchInput(searchValue)

    if (Array.isArray(countries) && countries.length > 0) {
      const filteredCountries = countries.filter((country) =>
        Object.values(country)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
      setFiltered(filteredCountries);
    } else {
      setFiltered([]); // Handle the empty case appropriately
    }
    
  }

  // Filter by region

  const filterRegions = async (region ) => {
    const url = `https://restcountries.com/v3.1/region/${region}`
    const res = await fetch(url)
    const countries = await res.json()
    setCountries(countries)
    console.log(countries)
  }

  useEffect(() => {
    filterRegions()
    // eslint-disable-next-line
  }, [])


  

  return (
    <>
      <section className="filter">
        <form className="form-control" onSubmit={handleSubmit}>
          <input
            type="search"
            name="search"
            id="id"
            autoComplete="off"
            placeholder="Search for country"
            onChange={(e) => searchCountries(e.target.value)}
          />
        </form>

        <div className="region-filter">
          <select
            name="select"
            id="select"
            className="select"
            onChange={(e) => filterRegions(e.target.value)}
          >
            {regions.map((region) => (
              <option key={region.desc} value={region.desc}>
                {region.name}
              </option>
            ))}
          </select>
        </div>
      </section>
    </>
  );
};







export default Filter