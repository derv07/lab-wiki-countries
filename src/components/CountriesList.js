import React from 'react'
import { Link } from 'react-router-dom'

function CountriesList({countries}) {

  return (
    <div className="m-5">
      <ul className="list-group">
        {countries.map((country) => (
          <Link key={country.name.common} to={`/${country.alpha3Code}`}>
            <li className="list-group-item p-2">
              <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt=" "/>
              <p>{country.name.common}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default CountriesList