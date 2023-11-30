import React from 'react'
import bootstrap from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function home() {
  return (
    <div>

        <header>

        <ul type="none">
        <li><a href="home"> HOME </a> </li>
              <li><a href="image1"> RED </a> </li>
              <li><a href="image2"> PURPLE </a> </li>
              <li><a href="image3"> BLUE </a> </li>
              

        </ul>
        </header>
        <main>
          <h1>WELCOME HOME</h1>

        </main>
        


        <footer> <p>Routing by Yousr</p> </footer>
        </div>
  )
}
