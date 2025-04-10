import React, { useId } from 'react'
import currency from '../hooks/currency'

function Input( {
label,  
  amountChange,
  amount,
  currencyChange,
  currencyOption = [],
  selectCurrency= 'inr',
  amountDisable = false,
  currencyDesiable = false
}) {
  const amountInputId = useId()
  return (
    <div>
      <div className='w-full h-40 bg-violet-50 rounded-xl p-5 flex '> 
      <div className='w-1/2' >
      <label htmlFor={amountInputId } className='text-3xl font-medium  ' >{label}From</label>
      <br />
      <input 
      id={amountInputId}
        type='number'
        placeholder= 'Amount' 
        value={amount}
        onChange={(e)=>amountChange && amountChange(Number(e.target.value))}
        disabled={amountDisable}
        className=' p-2 rounded mt-5 w-1/2  '/>
      
      </div>
      
      <div className='w-1/2 ml-40' >
      <h2 className='text-3xl font-medium  '>Currency type</h2>
      <br />
          <select name="" id=""
          value={selectCurrency}
          onChange={(e)=> currencyChange && (currencyChange(e.target.value)) }
          disabled = {currencyDesiable}
          className='p-1 rounded mt-5 w-1/2 ml-24 mb-10 '
          >
            {currencyOption.map((currency)=>(
            <option key={currency} value={currency}>{currency}</option>
          ))}
          </select>
          
        
      </div>
      </div>
      <div className='w-full h-40 bg-violet-50 rounded-xl mt-12 p-5 flex' >
      <div className='w-1/2 ' >
      <label htmlFor={amountInputId } className='text-3xl font-medium  ' >{label}TO</label>
      <br />
      <input 
      id={amountInputId}
        type='number'
        placeholder= 'Amount' 
        value={amount}
        onChange={(e)=>amountChange && amountChange(Number(e.target.value))}
        disabled={amountDisable}
        className=' p-2 rounded mt-5 w-1/2  '/>
      
      </div>
      
      <div className='w-1/2 ml-40 ' >
      <h2 className='text-3xl font-medium  '>Currency type</h2>
      <br />
          <select name="" id=""
          value={selectCurrency}
          onChange={(e)=> currencyChange && (currencyChange(e.target.value)) }
          disabled = {currencyDesiable}
          className='p-1 rounded mt-5 w-1/2 ml-24 mb-10  '
          >
            {currencyOption.map((currency)=>(
            <option key={currency} value={currency}>{currency}</option>
          ))}
          </select>
          
        
      </div>
       
      </div>
    </div>
  )
}

export default Input
