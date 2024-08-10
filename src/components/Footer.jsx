import React from 'react';
import logoFooter from "../assets/small_logo.png"

export default function Footer() {
  return (
    <div className='footer'>
      <div className="logo-footer">
        <img src={logoFooter} alt="" />
      </div>
      <div className='pages-footer'>
        <ul className="page-footer">
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Menu</a></li>
          <li><a href="">Reservations</a></li>
          <li><a href="">Order Online</a></li>
          <li><a href="">Login</a></li>
        </ul>
        <ul className="page-footer">
          <li>Address: <br/>
          214 Magazine St, <br /> New Orleans, Louisiana
          </li>
          <li>Phone: <br />
            (504) 561-8590
          </li>
          <li>Email: <br />
            little-lemon@meta.com
          </li>
        </ul>
        <ul className="page-footer">
          <li><a href="">Facebook</a></li>
          <li><a href="">Instagram</a></li>
          <li><a href="">Youtube</a></li>
        </ul>
      </div>
    </div>
  )
}
