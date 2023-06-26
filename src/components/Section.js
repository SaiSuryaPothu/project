import React from 'react'
import Card from './Card'
import "./Section.css"

const data = [
    {   id : 1,
        image:"https://res.fkhealthplus.com/incom/images/product/Clinic-Plus-Strong--Long-Health-Shampoo-1561551851-10039330-2.jpg",
        name:"Clinic-Plus",
        max_amount:130,
        piece_price:10,

    },
    {   id : 2,
        image:"https://m.media-amazon.com/images/I/31Ya+GwkF4L.jpg",
        name:"KS-Spray",
        max_amount:1000,
        piece_price:100,

    }
]
const Section = () => {
    
  return (
    <div className='flex'>
    {data.map((i)=>(
        <Card key={i.id} img={i.image} name={i.name} box_amount={i.max_amount} piece_amount={i.piece_price} />
    ))}

    </div>
  )
}

export default Section