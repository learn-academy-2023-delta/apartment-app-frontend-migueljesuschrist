import React from 'react'
import styles from '../styles/Footer.css'
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import { FooterLayout } from "./FooterLayout.js";
import { NavLink } from 'react-router-dom';

const Footer = () => {


  const [variant, setVariant] = React.useState("static");

  const variants = ["static", "floating", "sticky"];

  return (
    <>
    <div className='footerStatic'>
    <FooterLayout>
      <Navbar isBordered variant={variant}>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="/">Veteran Home Finder</Navbar.Link>
          <Navbar.Link href="#">Miguel | Jesus | Chris</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
        </Navbar.Content>
      </Navbar>
    </FooterLayout>
    </div>
    </>
  );
}
export default Header