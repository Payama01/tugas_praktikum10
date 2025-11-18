'use client'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

function WorkSection() {
    return (
        <Container className="py-5">
            <Row className='mb-3'>
                <Col md={12} className="text-center text-white">
                    <h2>Menu Andalan Kami</h2>
                    <p>Cobalah hidangan-hidangan favorit yang paling dicari pelanggan kami.</p>
                </Col>
            </Row>
            <Row>
                <Col md={4} className="mb-3">
                    <Card>
                        <Card.Img variant="top" src="/images/nasi-goreng-spesial.jpg"></Card.Img>
                        <Card.Body className="text-dark">
                            <Card.Title>
                                Nasi Goreng Spesial
                            </Card.Title>
                            <Card.Text>
                                Nasi goreng kampung dengan sate ayam, telur mata sapi, dan kerupuk udang yang renyah.
                            </Card.Text>
                            <Button variant="primary">Pesan Sekarang</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-3">
                    <Card>
                        <Card.Img variant="top" src="/images/tenderloin-steak-recipe.jpg"></Card.Img>
                        <Card.Body className="text-dark">
                            <Card.Title>
                                Steak Tenderloin Premium
                            </Card.Title>
                            <Card.Text>
                                Daging sapi impor pilihan dipanggang sempurna dengan saus lada hitam khas chef kami.
                            </Card.Text>
                            <Button variant="primary">Pesan Sekarang</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-3">
                    <Card>
                        <Card.Img variant="top" src="/images/spaghetti_carbonara.jpg"></Card.Img>
                        <Card.Body className="text-dark">
                            <Card.Title>
                                Spaghetti Carbonara
                            </Card.Title>
                            <Card.Text>
                                Pasta creamy dengan potongan daging asap dan taburan keju parmesan asli Italia.
                            </Card.Text>
                            <Button variant="primary">Pesan Sekarang</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default WorkSection;