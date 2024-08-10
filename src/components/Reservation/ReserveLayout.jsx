import React from 'react';
import "./Reserve.css";
import { Outlet } from 'react-router-dom'

export default function ReserveLayout() {
  return (
    <>
      <div className="page-head">
        <h1>Reservations</h1>
      </div>

      <Outlet/>
    </>
  )
}
