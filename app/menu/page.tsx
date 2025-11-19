"use client";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Badge, Tab, Tabs } from "react-bootstrap";
import { useSearchParams } from 'next/navigation';
import Navbar from "../../components/navbar"; 
import Footer from "../../components/footer";

const menuItems = {
  makanan: [
    {
      id: 1,
      name: "Coto Makassar Original",
      description: "Daging sapi pilihan dengan kuah rempah rahasia warisan leluhur.",
      price: "Rp 35.000",
      image: "/images/coto_makassar.jpg",
      tag: "Best Seller"
    },
    {
      id: 2,
      name: "Nasi Goreng Spesial",
      description: "Nasi goreng kampung dengan sate ayam, telur mata sapi, dan kerupuk.",
      price: "Rp 28.000",
      image: "/images/nasi-goreng-spesial.jpg",
      tag: "Favorit"
    },
    {
      id: 3,
      name: "Steak Tenderloin",
      description: "Daging sapi impor panggang dengan saus lada hitam.",
      price: "Rp 85.000",
      image: "/images/tenderloin-steak-recipe.jpg",
      tag: "Premium"
    },
    {
      id: 4,
      name: "Spaghetti Carbonara",
      description: "Pasta creamy dengan daging asap dan keju parmesan.",
      price: "Rp 45.000",
      image: "/images/spaghetti_carbonara.jpg",
      tag: ""
    },
  ],
  minuman: [
    {
      id: 5,
      name: "Jus Jeruk Murni",
      description: "Perasan jeruk asli tanpa pemanis buatan.",
      price: "Rp 15.000",
      image: "/images/es-jeruk.jpg",
      tag: ""
    },
    {
      id: 6,
      name: "Es Teh Manis",
      description: "Teh melati harum disajikan dingin dengan gula asli.",
      price: "Rp 8.000",
      image: "/images/es-teh.jpg",
      tag: "Favorit"
    },
    {
      id: 7,
      name: "Kopi Tubruk",
      description: "Biji kopi pilihan diseduh air panas untuk rasa yang kuat.",
      price: "Rp 12.000",
      image: "/images/coffee-tubruk.jpg",
      tag: ""
    }
  ],
  penutup: [
    {
      id: 8,
      name: "Es Pisang Ijo",
      description: "Pisang berbalut adonan hijau dengan bubur sumsum dan sirup merah.",
      price: "Rp 20.000",
      image: "/images/es_pisang_ijo.jpg",
      tag: ""
    },
    {
      id: 9,
      name: "Pisang Epe",
      description: "Pisang kepok bakar disiram saus gula merah cair khas Makassar.",
      price: "Rp 25.000",
      image: "/images/Pisang-epe.jpeg",
      tag: ""
    },
    {
      id: 10,
      name: "Barongko",
      description: "Olahan pisang dan telur yang lembut, dikukus dalam daun pisang.",
      price: "Rp 10.000",
      image: "/images/Barongko.jpg",
      tag: ""
    }
  ]
};

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("makanan");
  const searchParams = useSearchParams();

  useEffect(() => {
    const category = searchParams.get('category');
    if (category && ['makanan', 'minuman', 'penutup'].includes(category)) {
      setActiveTab(category);
    }
  }, [searchParams]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      
      <div className="bg-dark text-white py-5 text-center" 
           style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/images/suasana_makan.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <Container>
          <h1 className="display-4 fw-bold">Daftar Menu Kami</h1>
          <p className="lead">Jelajahi berbagai hidangan lezat yang kami sajikan khusus untuk Anda.</p>
        </Container>
      </div>

      <main className="flex-grow-1 my-5">
        <Container>
          <Tabs
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k || "makanan")}
            id="menu-tabs"
            className="mb-4 justify-content-center"
            fill
          >
            <Tab eventKey="makanan" title="Makanan Utama">
              <Row>
                {menuItems.makanan.map((item) => (
                  <Col md={6} lg={4} className="mb-4" key={item.id}>
                    <Card className="h-100 shadow-sm border-0">
                      <div style={{ height: "200px", overflow: "hidden" }}>
                        <Card.Img 
                          variant="top" 
                          src={item.image} 
                          alt={item.name}
                          style={{ objectFit: "cover", height: "100%", width: "100%" }}
                        />
                      </div>
                      <Card.Body className="d-flex flex-column">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <Card.Title className="fw-bold mb-0">{item.name}</Card.Title>
                          <h5 className="text-danger fw-bold mb-0">{item.price}</h5>
                        </div>
                        {item.tag && (
                          <Badge bg="warning" text="dark" className="align-self-start mb-2">
                            {item.tag}
                          </Badge>
                        )}
                        <Card.Text className="text-muted flex-grow-1">
                          {item.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab>
            
            <Tab eventKey="minuman" title="Minuman">
              <Row>
                {menuItems.minuman.map((item) => (
                  <Col md={6} lg={4} className="mb-4" key={item.id}>
                     <Card className="h-100 shadow-sm border-0">
                      <div style={{ height: "200px", overflow: "hidden", backgroundColor: "#f8f9fa" }}>
                        <Card.Img 
                          variant="top" 
                          src={item.image} 
                          alt={item.name}
                          style={{ objectFit: "cover", height: "100%", width: "100%" }}
                        />
                      </div>
                      <Card.Body className="d-flex flex-column">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <Card.Title className="fw-bold mb-0">{item.name}</Card.Title>
                          <h5 className="text-danger fw-bold mb-0">{item.price}</h5>
                        </div>
                        {item.tag && (
                          <Badge bg="info" text="dark" className="align-self-start mb-2">
                            {item.tag}
                          </Badge>
                        )}
                        <Card.Text className="text-muted flex-grow-1">
                          {item.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab>

            <Tab eventKey="penutup" title="Penutup (Dessert)">
              <Row>
                {menuItems.penutup.map((item) => (
                  <Col md={6} lg={4} className="mb-4" key={item.id}>
                     <Card className="h-100 shadow-sm border-0">
                      <div style={{ height: "200px", overflow: "hidden", backgroundColor: "#f8f9fa" }}>
                        <Card.Img 
                          variant="top" 
                          src={item.image} 
                          alt={item.name}
                          style={{ objectFit: "cover", height: "100%", width: "100%" }}
                        />
                      </div>
                      <Card.Body className="d-flex flex-column">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <Card.Title className="fw-bold mb-0">{item.name}</Card.Title>
                          <h5 className="text-danger fw-bold mb-0">{item.price}</h5>
                        </div>
                        {item.tag && (
                          <Badge bg="success" className="align-self-start mb-2">
                            {item.tag}
                          </Badge>
                        )}
                        <Card.Text className="text-muted flex-grow-1">
                          {item.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab>

          </Tabs>
        </Container>
      </main>

      <Footer />
    </div>
  );
}