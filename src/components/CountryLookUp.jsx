'use client'
import React, { useEffect, useState } from 'react'

function CountryLookUp() {
    const [country,setCountry] = useState('United States')
    useEffect(()=>{
        const getCountry = async ()=> {
            const response = await fetch('https://extreme-ip-lookup.com/json')
            .then((response)=> response.json()).then((data) => data.country)
            if(!response) return;
            setCountry(response)
        }
        getCountry()
    },[])
  return (
    <div>{country}</div>
  )
}

export default CountryLookUp