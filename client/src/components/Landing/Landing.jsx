import React from 'react'
import { Link } from 'react-router-dom';
import './Landing.css';

function Landing() {
  return (
    <div id='landing'>
      <h1 id='elcuernolanding'>El Cuerno Grasiento</h1>
      <Link to='/home'><button id='ingresar'>¡Sírvete un trago!</button></Link>
    </div>
  )
}

export default Landing