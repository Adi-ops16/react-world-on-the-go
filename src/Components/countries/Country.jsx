import React from 'react';
import './country.css'
const Country = ({ country }) => {
    const handleBtn = ()=>{
        console.log("btn clicked")
    }
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>name: {country.name.common}</h2>
            <p>population: {country.population.population} </p>
            <p>area: {country.area.area }
                 {country.area.area > 300000 ? " Big Country" : " Small Country"} </p>
            <button onClick={handleBtn} className='btn'>Not Visited</button>
        </div>
    );
};

export default Country;