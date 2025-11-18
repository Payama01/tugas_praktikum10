"use client";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

function ServiceSection() {
    return (
        <Container className='my-5'>
            <Row>
                <Col md={4} className="mb-3 text-center mb-3 py-3">
                    <div className="mb-3">
                        <i className="bi bi-shop text-danger" style={{ fontSize: '4rem' }}></i>
                    </div>
                    <h3>Dine In</h3>
                    <p>Nikmati suasana restoran yang nyaman, estetik, dan pelayanan ramah untuk makan siang atau malam.</p>
                </Col>

                <Col md={4} className="mb-3 text-center mb-3 py-3">
                    <div className="mb-3">
                        <i className="bi bi-bicycle text-danger" style={{ fontSize: '4rem' }}></i>
                    </div>
                    <h3>Pesan Antar</h3>
                    <p>Lapar tapi malas keluar? Pesan makanan favorit Anda, kami antar hangat sampai depan pintu.</p>
                </Col>

                <Col md={4} className="mb-3 text-center mb-3 py-3">
                    <div className="mb-3">
                        <i className="bi bi-calendar2-event text-danger" style={{ fontSize: '4rem' }}></i>
                    </div>
                    <h3>Acara Spesial</h3>
                    <p>Rayakan ulang tahun, reuni, atau rapat kantor di sini. Cukup reservasi meja untuk grup Anda.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default ServiceSection;