"use client";
import React from "react";
import Image from "next/image";

import Navbar from "../components/navbar";
import HeroSection from "../components/herosection";
import WorkSection from "../components/worksection";
import ServiceSection from "../components/servicesection";
import ContactSection from "../components/contactsection";
import Footer from "../components/footer";

import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection></HeroSection>
        <Container className="my-5">
          <Row className="my-4">
            <Col md={6} className="align-self-center mb-3">
              <h2>Tentang Restoran Kami</h2>
              <h6>Cita Rasa Otentik Sejak 1998</h6>
              <p>
                Kami berkomitmen untuk menyajikan hidangan terbaik dengan bahan-bahan segar pilihan dari petani lokal. Setiap resep diracik dengan penuh semangat oleh koki berpengalaman kami untuk memberikan pengalaman kuliner yang tak terlupakan bagi Anda dan keluarga.
              </p>
              <Button variant="info" href="/menu">Lihat Menu Lengkap</Button>
            </Col>
            <Col md={6}>
              <p>
                <Image src="/images/Resto.jpg" alt="Tentang Restoran" width={500}
                height={500}></Image>
              </p>
            </Col>
          </Row>
        </Container>
        <section className="bg-dark text-white">
          <WorkSection></WorkSection>
        </section>
        <ServiceSection></ServiceSection>
        <section id="contact">
          <ContactSection></ContactSection>
        </section>
        <Footer></Footer>
      </main>
    </div>
  );
}