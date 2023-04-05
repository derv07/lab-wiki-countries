import React from 'react'
import { Link, useParams } from 'react-router-dom'

function CountryDetails({countries}) {

  const {id} = useParams()
  const activeCountry = countries.filter((country) => id === country.alpha3Code)
  console.log(activeCountry[0].borders)

  return (
    <div className="p-5 d-flex flex-column justify-content-center align-items-center m-2">
      <img className="card-img-top mb-2" src={`https://flagpedia.net/data/flags/icon/72x54/${activeCountry[0].alpha2Code.toLowerCase()}.png`} alt=" " style={{width:'200px'}}/>
      <h3 className="mb-5">{activeCountry[0].name.common}</h3>
      <div className="card-body row">
        <div className="col">{
          <p>Capital</p>
        }</div>
        <div className="col">
          <p>{activeCountry[0].capital[0]}</p>
        </div>
      </div>
      <div className="card-body row">
        <div className="col">{
          <p>Area</p>
        }</div>
        <div className="col">
          <p>{`${activeCountry[0].area}km²`}</p>
        </div>
      </div><div className="card-body row">
        <div className="col">{
          <p>Border</p>
        }</div>
        <div className="col">
          {activeCountry[0].borders.map(element => (
            <Link to={`/${element}`}>
              <p key={element}>{element}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CountryDetails