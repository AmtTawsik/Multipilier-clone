import { Button, Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import logo from '../../Media/logo.svg'

const Header = () => {
  return (
    <Navbar
  fluid={true}
  rounded={false}
  color='#00103b'
  className="bg-dipBlue text-white"

>
  <Navbar.Brand href="https://flowbite.com/">
    <img
      src={logo}
      className="ml-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
  </Navbar.Brand>
  <div className="flex md:order-2">
    <Button className="hidden md:block">
      Book a Demo
    </Button>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
      active={true}
      
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/navbars" className='text-white'>
      About
    </Navbar.Link>
    <Navbar.Link href="/navbars" className='text-white'>
      Services
    </Navbar.Link>
    <Navbar.Link href="/navbars" className='text-white'>
      Pricing
    </Navbar.Link>
    <Navbar.Link href="/navbars" className='text-white'>
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
  );
};

export default Header;
