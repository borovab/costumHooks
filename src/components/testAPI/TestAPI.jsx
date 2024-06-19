import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import './test.css'
const TestAPI = () => {
    const [country,setCountry] = useState()

    const { data , loading, erorr} = useFetch(`https://restcountries.com/v3.1/name/${country}`);

    if(loading) return <h3>loading...</h3>
    if (erorr) return <h3>Erorr here</h3>

    const handleCountry = (e) => setCountry(e.target.value);
console.log(data)
  return (


    <div>
        <select onChange={handleCountry} value={country}>
        <option value={""} selected>Choose Country</option>
            <option value={"Albania"}>Albania</option>
            <option value={"Kosovo"}>Kosova</option>
            <option value={"Macedonia"}>North Macedonia</option>
            <option value={"Greece"}>Greece</option>
        </select>

        {data && data[0] && (
  <div className="country-card">
    <img src={data[0].flags.png} alt={`Flag of ${data[0].name.common}`} />
    {data[0].name.common && <h2>Name: {data[0].name.common}</h2>}
    {data[0].capital && <h2>Capital: {data[0].capital[0]}</h2>}
    {data[0].region && <h2>Region: {data[0].region}</h2>}
    {data[0].borders && <h2>Borders: {data[0].borders.join(", ")}</h2>}
  </div>
      )}
    </div>
  )
}

export default TestAPI