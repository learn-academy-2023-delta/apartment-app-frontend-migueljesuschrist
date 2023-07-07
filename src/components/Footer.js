import React from 'react'
// import styles from '../styles/Footer.css'

import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import { FooterLayout } from "./FooterLayout.js";
import { NavLink } from 'react-router-dom';


const Header = () => {

  const [variant, setVariant] = React.useState("static");

  const variants = ["static", "floating", "sticky"];
  return (
    // <div>Header</div>
    <>
    <FooterLayout>
      <Navbar isBordered variant={variant}>
        {/* <Navbar.Brand> */}
          {/* <AcmeLogo /> */}
          {/* <Text b color="inherit" hideIn="xs">
            ACME
          </Text> */}
        {/* </Navbar.Brand> */}
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="/">Veteran Home Finder</Navbar.Link>
          {/* <Navbar.Link isActive href="#">Customers</Navbar.Link> */}
          {/* <Navbar.Link href="/apartmentindex/">Listings</Navbar.Link> */}
          <Navbar.Link href="#">Miguel | Jesus | Chris</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          {/* <Navbar.Link color="inherit" href="#">
            Sign In
          </Navbar.Link> */}
          {/* <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item> */}
        </Navbar.Content>
      </Navbar>
      
    </FooterLayout>
    </>
  );
}



export default Header

    