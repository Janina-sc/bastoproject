import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logobasto.png'


const Navigation = () => {
  return (
    <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'style={{height:"3rem"}}> 
    <div className="container-fluid" >
        
    
         <img src={logo} style={{width:"5rem" }} alt="logoBastó"></img>
         <Link className='navbar-brand' to="/" >Animales</Link>
         <Link className='navbar-brand' to="/" >Lista de animales</Link>
         <Link className='navbar-brand' to="/createCattle" >Agregar animales</Link>
      
       </div>

      
  </nav>

    </div>
  )
}

export default Navigation