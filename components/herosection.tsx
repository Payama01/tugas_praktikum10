"use client"
import Carousel from 'react-bootstrap/Carousel';

interface Slide {
    title: string;
    subtitle: string;
    imageUrl: string;
}

const HeroSection = () => {
    const slides: Slide[] = [
        {
            title: "Nikmati Kelezatan Sejati",
            subtitle: "Hidangan spesial yang dibuat dengan bumbu rahasia keluarga.",
            imageUrl: "/images/coto_makassar.jpg",
        },
        {
            title: "Suasana Nyaman & Hangat",
            subtitle: "Tempat sempurna untuk berkumpul bersama orang tercinta.",
            imageUrl: "/images/suasana_makan.jpg",
        },
        {
            title: "Bahan Segar Berkualitas",
            subtitle: "Kami menjamin kesegaran di setiap gigitan.",
            imageUrl: "/images/bahan_coto.jpg",
        },
    ]

    return (
        <Carousel fade interval={4000} data-bs-theme="dark">
            {slides.map((slide, index) => (
                <Carousel.Item key={index}>
                    <div 
                        style={{
                            backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.imageUrl})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "60vh",
                        }}>
                    </div>
                    <Carousel.Caption>
                        <h1 className="display-4 fw-bold text-white">{slide.title}</h1>
                        <p className="lead text-white">{slide.subtitle}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
            )}
        </Carousel>
    )
}

export default HeroSection;