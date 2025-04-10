import { useState, useEffect } from 'react'

function Usecurrency() {
    const [data , setData] = useState({})
    useEffect (()=>{
        if (!currencyCode) return;
        fetch (`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res )=> setData(res[currencyCode]))
    },[currencyCode])
    console.log(data);
    return data
}

export default Usecurrency

