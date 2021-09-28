import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import Wave from '../../Assests/Images/Wave.png'
import Rectangle from '../../Assests/Images/Rectangle.png'
import Social from '../Social/Social.js'
import 'bootstrap/dist/css/bootstrap.min.css'

function Home() {
  return (
    <div className='App'>
      <Navbar name='About Us' link='/about' />
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
        <figure className='position-relative'>
          <img src={Wave} alt='wave' className='img-fluid' />
          <figcaption>
            <h2 className='theme'>Theme:</h2>
            <h1 className='next-wave'>THE NEXT WAVE</h1>
            <img src={Rectangle} alt='Rectangle' className='rectangle' />
            <Social className='social-container'></Social>
          </figcaption>
        </figure>
      </Container>
    </div>
  )
}

export default Home
