"use client"
import { Container, Row, Col } from "react-bootstrap"; // Hapus Form, Button, InputGroup jika tidak dipakai lagi
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link'; 

export default function Footer() {
    return (
        <footer id="footer" className="pt-5 pb-4 bg-light text-dark border-top">
            <Container>
                <Row>
                    <Col md={3} className="mb-4">
                        <h4 className="fw-bold mb-3">Menu Kami</h4>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link href="/menu?category=makanan" className="text-decoration-none text-muted">
                                    Makanan Utama
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/menu?category=minuman" className="text-decoration-none text-muted">
                                    Minuman Segar
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/menu?category=penutup" className="text-decoration-none text-muted">
                                    Dessert
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    
                    <Col md={3} className="mb-4">
                        <h4 className="fw-bold mb-3">Navigasi</h4>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link href="/" className="text-decoration-none text-muted">Beranda</Link></li>
                            <li className="mb-2"><Link href="/#about" className="text-decoration-none text-muted">Tentang Kami</Link></li>
                            <li className="mb-2"><Link href="/#contact" className="text-decoration-none text-muted">Kontak</Link></li>
                            <li className="mb-2"><Link href="/menu" className="text-decoration-none text-muted">Menu</Link></li>
                            <li className="mb-2"><Link href="/reservasi" className="text-decoration-none text-muted">Reservasi</Link></li>
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
                        <h4 className="fw-bold mb-3">Hubungi Kami</h4>

                        <div className="d-flex align-items-center mb-2 text-muted">
                            <i className="bi bi-telephone-fill me-2 text-danger"></i>
                            <span>(021) 1234-5678</span>
                        </div>
                        
                        <div className="d-flex align-items-center mb-4 text-muted">
                            <i className="bi bi-envelope-fill me-2 text-danger"></i>
                            <span>reservasi@payama.com</span>
                        </div>

                        <h5 className="mb-3">Ikuti Kami</h5>
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