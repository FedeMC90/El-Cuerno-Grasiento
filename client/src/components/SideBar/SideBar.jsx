import React from 'react'
import './SideBar.css'

function SideBar() {
  return (
    <div id='sidebar'>
      <div id='botonera'>
        <button className='boton'>Crear nuevo personaje</button>
        <button className='boton'>Ver mis personajes</button>
        <button className='boton'>Crear nueva mesa</button>
        <button className='boton'>Manuales</button>
      </div>
    </div>
  )
}

export default SideBar