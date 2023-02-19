import { useState,  } from "react";
import { Button } from "react-bootstrap";
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
import Cookies from 'universal-cookie';


const cookies = new Cookies();

export default function NavbarAuth() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  // logout
  const logout = () => {
    // destroy the cookie
    cookies.remove("token", { path: "/" });
    // redirect user to the landing page
    window.location.href = "/";
  }

  return (
    <MDBNavbar fixed='top' expand='lg' dark style={{ backgroundColor: '#363636' }}>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/home'>App</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav>
            <MDBNavbarLink active aria-current='page' href='/dashboard'>
              Dashboard
            </MDBNavbarLink>
            <MDBNavbarLink href='/profile'>My Profile</MDBNavbarLink>
            <MDBNavbarLink href='/explore'>Explore</MDBNavbarLink>
          </MDBNavbarNav>
          <div style={{float:'right'}}>
          <Button onClick={() => logout()} style={{backgroundColor:'#232323'}} variant="secondary">Logout</Button>
          </div>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
