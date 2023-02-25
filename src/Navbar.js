import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';

export default function Navbar() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <MDBNavbar fixed='top' expand='lg' dark style={{ backgroundColor: '#363636' }}>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/' color='#76A8D7'>App</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond} id='navbarColor02'>
          <MDBNavbarNav>
            <MDBNavbarLink aria-current='page' href='/'>
              Home
            </MDBNavbarLink>
            <MDBNavbarLink href='/courses'>Courses</MDBNavbarLink>
            <MDBNavbarLink href='/login'>Login</MDBNavbarLink>
            <MDBNavbarLink href='/signup'>Sign Up</MDBNavbarLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
