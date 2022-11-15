import { Button, Container, Navbar, Modal } from 'react-bootstrap';


function NavbarComponent() {
    
    return (
        
        // where navbar collapses for like mobile screens or small screen it looks good on this website
        <Navbar expand="sm">
            {/* home link and Brand name or website name */}
            <Navbar.Brand href='/'> Sasta Bazaar </Navbar.Brand>
           
            {/* This is for mobile screen  */}
            <Navbar.Toggle/>
            <Navbar.Collapse className='justify-content-end'>
                <Button> Cart 0 Items </Button>
            </Navbar.Collapse>

        </Navbar>
    )
}

export default NavbarComponent;