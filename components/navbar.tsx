'use client'
// components/navbar.tsx
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function navbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary sticky-top shadow-sm">
            <Container>
                <Navbar.Brand href="/" className="fw-bold text-danger">Restoran Payama</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Beranda</Nav.Link>
                        <Nav.Link href="/menu">Menu</Nav.Link>
                        <Nav.Link href="/#contact">Kontak</Nav.Link>
                        <Nav.Link href="/reservasi">Reservasi</Nav.Link>
                        
                    </Nav>
                    <Form className="d-flex">
                        <Button variant="danger" href="https://gojek.com/en-id">Pesan Online</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default navbar;