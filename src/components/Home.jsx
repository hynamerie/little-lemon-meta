import React from 'react';
import "./Home.css";
import heroimg from "../assets/restauranfood.jpg";
import imgSalad from "../assets/salad.png";
import imgBrushetta from "../assets/brucheta.jpg";
import imgLemon from "../assets/lemon.jpeg";
import aboutImg1 from "../assets/about1.jpg";
import aboutImg2 from "../assets/about2.jpg";
import rvImg1 from "../assets/u1.jpg"
import rvImg2 from "../assets/u2.jpg"
import rvImg3 from "../assets/u3.jpg"
import rvImg4 from "../assets/u4.jpg"
import { Link } from 'react-router-dom';

export default function Home() {
  const specials = [
    {name: 'Greek Salad', price: '$ 12.99', description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
      image: imgSalad
    },
    {name: 'Brushetta', price: '$ 7.99', description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
      image: imgBrushetta
    },
    {name: 'Lemon Dessert', price: '$ 5.99', description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      image: imgLemon
    },
    {name: 'Brushetta', price: '$ 7.99', description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
      image: imgBrushetta
    },
  ]
  const testimonials = [
    {name: "Lisa Gleichner", review: "The food was amazing, the staff were so polite and helpful.", img: rvImg1},
    {name: "Alvah Feil MD", review: "Delicious dishes, it’s a great experience.", img: rvImg2},
    {name: "Myra Schuppe", review: "Wow, amazing menu with great food and service. ", img: rvImg3},
    {name: "Mark Hartmann", review: "Everything about this place is perfect.", img: rvImg4},
  ]
  return (
    <>
      <div className=''>
        <div className='hero'>
          <div className='hero-info'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Link to="/reservations">
              <button className='btn-yes'>Reserve Table</button>
            </Link>
          </div>
          <div className="hero-img">
            <img src={heroimg} alt='Logo of Little Lemon'/>
          </div>
        </div>
        <span className="hero-devider"></span>
        <div className="body specials">
          <div className="special-head">
            <h2>Specials Today!</h2>
            <Link to="/menu">  <button className="btn-yes">Online Menu</button></Link>
          </div>
          <div className='special-dish'>
            {specials.map(dish => (
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
            ))}
          </div>
        </div>
        <div className="body testimonials">
          <h2>Testimonials</h2>
          <div className='testi-layout'>
            {testimonials.map(review => (
            <div className="testi-card" key={review.name}>
              <div className="testi-name">
                <img src={review.img} className='testi-img'/>
                <div>
                  <div className="testi-star">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>            
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>            
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>            
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>            
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>            
                  </div>
                  <div>{review.name}</div>
                </div>
              </div>
              <div className='testi-content'>{review.review}</div>
            </div>
            ))}
          </div>
        </div>
        <div className='body about'>
          <div className='about-info'>
            <h2>Our Story</h2>
            <br />
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="about-img-contain">
            <div className="about-img" id='img1'>
              <img src={aboutImg1} />
            </div>
            <div className="about-img" id='img2'>
              <img src={aboutImg2} />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
