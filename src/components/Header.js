import React from 'react'

const Header = () => {
  return (
<<<<<<< Updated upstream
    <div>Header</div>
  )
=======

    <>
    <div className='headerStatic'>
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
    </div>
    </>
  );
>>>>>>> Stashed changes
}

export default Header