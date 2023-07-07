import React from 'react'
import styles from '../styles/Header.css'
import { Navbar, Button, Link} from "@nextui-org/react";
import { HeaderLayout } from "./HeaderLayout.js";
import { NavLink } from 'react-router-dom';


const Header = () => {

  const [variant, setVariant] = React.useState("static");

  const variants = ["static", "floating", "sticky"];

  return (
    <>
    <HeaderLayout>
      <Navbar isBordered variant={variant}>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/apartmentindex/">Listings</Navbar.Link>
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

    