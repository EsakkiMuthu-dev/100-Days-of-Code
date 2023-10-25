import React from 'react'

export default function CountryDetails({country}) {
    
    const fetchLang=()=>{
        let lang=[];
        for(let key in country.languages)
        {
            lang.push(country.languages[key]);
        }
        return lang;
    }
    
  return (
    <div>
        <h1>{country.name.common}</h1>
        <p>Capital: {country.capital[0]}</p>
        <p>Area: {country.area}</p>

        <h3>Languages</h3>
            <ul>
                {fetchLang().map((val,index)=> <li key={index}>{val}</li>) }
            </ul>
        
        <img src={country.flags.png} alt={country.flags.alt} />
    </div>

  )
}
