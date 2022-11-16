import { Button, Container, Navbar, Modal } from 'react-bootstrap';
import { useState } from 'react';

function NavbarComponent() {
    const [ show, setShow ] = useState( false );
    const handleClose = () => setShow( false );
    const handleShow = () => setShow( true );
    return (
        <>
         {/* where navbar collapses for like mobile screens or small screen it looks good on this website */}
            <Navbar expand="sm">
                {/* home link and Brand name or website name */}
                <Navbar.Brand href='/'> Sasta Bazaar </Navbar.Brand>
            
                {/* This is for mobile screen  */}
                <Navbar.Toggle/>
                <Navbar.Collapse className='justify-content-end'>
                    {/* Clck the button open modal window  */}
                    <Button onClick={ handleShow }> Cart 0 Items </Button> 
                </Navbar.Collapse>

            </Navbar>
         {/* Modal cart create */}
         <Modal show={ show } onHide={ handleClose }>
            <Modal.Header closeButton>
                {/* Shopping Cart name */}
                <Modal.Title>
                    Shopping Cart
                </Modal.Title>
            </Modal.Header>
            {/* Showing cart item , their prices and quantaity */}
             <Modal.Body>
                <h1> This is the modal body </h1>
            </Modal.Body>
         </Modal>
        </>
    )
}

export default NavbarComponent;