"use client"
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function ContactSection() {
    return (
        <Container className='my-5 py-5'>
            <Row className='justify-content-center my-3 py-5'>
                <Col md={8} lg={6} className="mb-3 mx-auto">
                    <Card className="text-center p-4 shadow-sm">
                        <h2>Hubungi Kami</h2>
                        <p>Punya pertanyaan? Kirimkan pesan kepada kami.</p>
                        <Form className="mt-3 p-2 text-start">
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Nama Lengkap</Form.Label>
                                <Form.Control type="text" placeholder="Masukkan nama Anda" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Alamat Email</Form.Label>
                                <Form.Control type="email" placeholder="nama@contoh.com" required />
                            </Form.Group>    
                            <Form.Group className="mb-3" controlId="formMessage">
                                <Form.Label>Pesan</Form.Label>
                                <Form.Control as="textarea" rows={5} placeholder="Tulis pesan Anda di sini..." required />
                            </Form.Group>
                            <div className="d-grid gap-2">
                                <Button variant="danger" type="submit">
                                    Kirim Pesan
                                </Button>
                            </div>
                        </Form> 
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactSection;