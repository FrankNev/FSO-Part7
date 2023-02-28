import React, { useState } from 'react'
import { useField, useCountry } from './hooks'

const Country = ({ country }) => {
   if (!country) {
      return null
   }

   if (!country.found) {
      return <div>not found...</div>
   }

   const countryObj = country.data

   return (
      <div>
         <h3>{countryObj.name.common}</h3>
         <div>Capital: {countryObj.capital}</div>
         <div>Population: {countryObj.population}</div>
         <img src={countryObj.flags.svg} height='100' alt={`flag of ${countryObj.name}`} />
      </div>
   )


}

const App = () => {
   const nameInput = useField('text')
   const [name, setName] = useState('')
   const country = useCountry(name)

   const fetch = (e) => {
      e.preventDefault()
      setName(nameInput.value)
   }

   return (
      <div>
         <form onSubmit={fetch}>
            <input {...nameInput} />
            <button>find</button>
         </form>

         <Country country={country} />
      </div>
   )
}

export default App