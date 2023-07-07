import React from 'react'
import styles from '../styles/Header.css'
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   NavbarText,
// } from 'reactstrap';
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import { HeaderLayout } from "./HeaderLayout.js";
import { NavLink } from 'react-router-dom';


const Header = () => {

  const [variant, setVariant] = React.useState("static");

  const variants = ["static", "floating", "sticky"];
  return (
    // <div>Header</div>
    <>
    <div>
      {/* <Navbar className='nav-bar'>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar> */}
    </div>
    <HeaderLayout>
      <Navbar isBordered variant={variant}>
        {/* <Navbar.Brand> */}
          {/* <AcmeLogo /> */}
          {/* <Text b color="inherit" hideIn="xs">
            ACME
          </Text> */}
        {/* </Navbar.Brand> */}
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="/">Home</Navbar.Link>
          {/* <Navbar.Link isActive href="#">Customers</Navbar.Link> */}
          <Navbar.Link href="/apartmentindex/">Listings</Navbar.Link>
          {/* <Navbar.Link href="#">Company</Navbar.Link> */}
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Sign In
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      
    </HeaderLayout>
    </>
  );
}



export default Header

    