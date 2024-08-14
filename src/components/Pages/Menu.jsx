import React, { useEffect, useState } from 'react'
import "./pages.css"

const Menu = () => {
  const [dishes, setDishes] = useState([]);
  useEffect(() => {
    fetch("/api/dishes")
    .then(res => res.json())
    .then((data => setDishes(data.dishes)))
  }, [])

  const specialDishes = dishes.map(dish => (
    <div key={dish.name} className="dish-card">
      <div className="card-img">
        <img src={dish.image} alt="special-dish" />
      </div>
      <div className="card-info">
        <div className="card-name">
          <h3>{dish.name}</h3>
          <div className='price'>{dish.price}</div>
        </div>
        <div className='card-description'>
          <p>{dish.description}</p>
        </div>
        <button>Order Now</button>
      </div>
    </div>
  ))

  return (
    <>
    <div className="page-head">
      <h1>Our Menu</h1>
    </div>
    <div className="body menu">
      <div className="special-head">
        <h2>Specials Today!</h2>
      </div>
      <div className='dish-layout'>
        {specialDishes}
      </div>
    </div>
    <div className="body menu">
      <div className="special-head">
        <h2>All</h2>
      </div>
      <div className='dish-layout'>
        {}
      </div>
    </div>


    </>
  )
}

export default Menu