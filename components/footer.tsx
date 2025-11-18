"use client"
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
    return (
        <footer id="footer" className="pt-5 pb-4 bg-light text-dark border-top">
            <Container>
                <Row>
                    <Col md={3} className="mb-4">
                        <h4 className="fw-bold mb-3">Menu Kami</h4>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Makanan Utama</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Minuman Segar</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Dessert</a></li>
                        </ul>
                    </Col>
                    <Col md={3} className="mb-4">
                        <h4 className="fw-bold mb-3">Navigasi</h4>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Beranda</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Tentang Kami</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Reservasi</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Menu</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Galeri</a></li>
                        </ul>
                    </Col>
                    <Col md={3} className="mb-4">
                        <h4 className="fw-bold mb-3">Jam Buka</h4>
                        <ul className="list-unstyled text-muted">
                            <li className="mb-2"><strong>Senin - Jumat:</strong></li>
                            <li className="mb-2">10.00 - 22.00 WIB</li>
                            <li className="mb-2 mt-3"><strong>Sabtu - Minggu:</strong></li>
                            <li className="mb-2">09.00 - 23.00 WIB</li>
                        </ul>
                    </Col>
                    <Col md={3} className="mb-4">
                        <h4 className="fw-bold mb-3">Info Promo</h4>
                        <Form className="mb-3">
                            <InputGroup>
                                <Form.Control type="email" placeholder="Email Anda" aria-label="Email" />
                                <Button variant="danger">Daftar</Button>
                            </InputGroup>
                        </Form>
                        <h5 className="mt-4 mb-3">Ikuti Kami</h5>
                        <ul className="list-unstyled d-flex gap-3">
                            <li><a href="#" className="text-dark"><i className="bi bi-facebook fs-4"></i></a></li>
                            <li><a href="#" className="text-dark"><i className="bi bi-twitter-x fs-4"></i></a></li>
                            <li><a href="#" className="text-dark"><i className="bi bi-instagram fs-4"></i></a></li>
                            <li><a href="#" className="text-dark"><i className="bi bi-tiktok fs-4"></i></a></li>
                        </ul>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col md={12} className="text-center">
                        <hr className="mb-4"></hr>
                        <p className="mb-0 text-muted">&copy; 2025 Restoran Payama. All rights reserved by @Muhammad Yusuf Erki</p>
                    </Col>
                </Row>
            </Container>
        </footer>   
    )
}