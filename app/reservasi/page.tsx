"use client";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card,} from "react-bootstrap";
import Navbar from "../../components/navbar"; 
import Footer from "../../components/footer"; 

export default function ReservasiPage() {
  const [formData, setFormData] = useState({
    nama: "",
    whatsapp: "",
    tanggal: "",
    jam: "",
    jumlahOrang: "",
    catatan: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const text = `Halo Restoran Payama, saya ingin reservasi meja:%0A%0A` +
                 `Nama: ${formData.nama}%0A` +
                 `No WA: ${formData.whatsapp}%0A` +
                 `Tanggal: ${formData.tanggal}%0A` +
                 `Jam: ${formData.jam}%0A` +
                 `Jumlah Orang: ${formData.jumlahOrang}%0A` +
                 `Catatan: ${formData.catatan}`;
    
    //ini asal aja
    window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      {/* Header Reservasi */}
      <div className="bg-dark text-white py-5 text-center" 
           style={{
             backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/images/suasana_makan.jpg)', 
             backgroundSize: 'cover', 
             backgroundPosition: 'center'
           }}>
        <Container>
          <h1 className="display-4 fw-bold">Reservasi Meja</h1>
          <p className="lead">Pastikan momen spesial Anda berjalan lancar dengan memesan tempat terlebih dahulu.</p>
        </Container>
      </div>

      <main className="flex-grow-1 my-5">
        <Container>
          <Row className="justify-content-center">
            
            <Col lg={7} className="mb-4">
              <Card className="shadow-sm border-0 p-4">
                <h3 className="mb-4 fw-bold text-danger">Formulir Reservasi</h3>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formNama">
                        <Form.Label>Nama Pemesan</Form.Label>
                        <Form.Control 
                          type="text" 
                          placeholder="Masukkan nama lengkap" 
                          name="nama"
                          value={formData.nama}
                          onChange={handleChange}
                          required 
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formWA">
                        <Form.Label>Nomor WhatsApp</Form.Label>
                        <Form.Control 
                          type="number" 
                          placeholder="08xxxxxxxxxx" 
                          name="whatsapp"
                          value={formData.whatsapp}
                          onChange={handleChange}
                          required 
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formTanggal">
                        <Form.Label>Tanggal</Form.Label>
                        <Form.Control 
                          type="date" 
                          name="tanggal"
                          value={formData.tanggal}
                          onChange={handleChange}
                          required 
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formJam">
                        <Form.Label>Jam Kedatangan</Form.Label>
                        <Form.Control 
                          type="time" 
                          name="jam"
                          value={formData.jam}
                          onChange={handleChange}
                          required 
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3" controlId="formJumlah">
                    <Form.Label>Jumlah Orang</Form.Label>
                    <Form.Control 
                      type="number" 
                      placeholder="Contoh: 4" 
                      name="jumlahOrang"
                      value={formData.jumlahOrang}
                      onChange={handleChange}
                      min="1"
                      required 
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formCatatan">
                    <Form.Label>Catatan Tambahan (Opsional)</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={3} 
                      placeholder="Misal: Butuh kursi bayi, area non-smoking, dekorasi ulang tahun, dll."
                      name="catatan"
                      value={formData.catatan}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <div className="d-grid gap-2 mt-4">
                    <Button variant="danger" size="lg" type="submit">
                      <i className="bi bi-whatsapp me-2"></i> Kirim Reservasi via WhatsApp
                    </Button>
                  </div>
                </Form>
              </Card>
            </Col>

            <Col lg={5}>
              <Card className="shadow-sm border-0 p-4 bg-light mb-4">
                <h4 className="fw-bold mb-3">Ketentuan Reservasi</h4>
                <ul className="text-muted ps-3" style={{fontSize: '0.95rem'}}>
                  <li className="mb-2">Reservasi sebaiknya dilakukan minimal <strong>3 jam sebelum</strong> jam kedatangan.</li>
                  <li className="mb-2">Toleransi keterlambatan adalah <strong>15 menit</strong>. Jika lewat dari waktu tersebut, meja akan kami berikan ke pelanggan lain.</li>
                  <li className="mb-2">Untuk rombongan di atas 10 orang, mohon konfirmasi ketersediaan area terlebih dahulu.</li>
                  <li className="mb-2">Pelanggan dilarang membawa makanan dan minuman dari luar (kecuali kue ulang tahun).</li>
                </ul>
              </Card>

              <Card className="shadow-sm border-0 p-4 text-white bg-secondary" 
                    style={{backgroundImage: 'url(/images/map.jpg)', backgroundSize: 'cover', backgroundBlendMode: 'multiply'}}>
                <h4 className="fw-bold">Butuh Bantuan Cepat?</h4>
                <p>Hubungi tim layanan pelanggan kami langsung.</p>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-telephone-fill fs-4 me-3"></i>
                  <span>(021) 1234-5678</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-envelope-fill fs-4 me-3"></i>
                  <span>reservasi@payama.com</span>
                </div>
              </Card>
            </Col>

          </Row>
        </Container>
      </main>

      <Footer />
    </div>
  );
}