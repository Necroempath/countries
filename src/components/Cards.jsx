import React from 'react'
import Card from './Card'

const Cards = ({countries}) => {
  return (
    <div className='cards'>
        {
            countries.map((country, index) => 
               <Card key={index} country={country}/>
            )
        }
    </div>
  )
}

export default Cards