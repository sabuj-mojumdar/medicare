import React from 'react';
import { Button, Carousel, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import slider1 from "../../../img/hero/slider1.jpg";
import slider2 from "../../../img/hero/slider2.jpg";
import slider3 from "../../../img/hero/slider3.jpg";

const HeroSection = () => {
    return (
        <Container fluid>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-start text-dark bg-primary text-white w-25 hero-caption p-2">
                        <h2>We Take Care Of Your
                            Healthy Health</h2>
                        <p>Mimply dummy text of the printing type setting area lead
                            spsum dolor onsecte dipiscing. Mimply dummy text printing
                            apsum dolor onsecte dipiscing.</p>
                        <Link to="/allservices">
                            <Button className="btn-light">See all Services</Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="text-start text-dark bg-primary text-white w-25 hero-caption p-2">
                        <h2>We Take Care Of Your
                            Healthy Health</h2>
                        <p>Mimply dummy text of the printing type setting area lead
                            spsum dolor onsecte dipiscing. Mimply dummy text printing
                            apsum dolor onsecte dipiscing.</p>
                        <Link to="/allservices">
                            <Button className="btn-light">See all Services</Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="text-start text-dark bg-primary text-white w-25 hero-caption p-2">
                        <h2>We Take Care Of Your
                            Healthy Health</h2>
                        <p>Mimply dummy text of the printing type setting area lead
                            spsum dolor onsecte dipiscing. Mimply dummy text printing
                            apsum dolor onsecte dipiscing.</p>
                        <Link to="/allservices">
                            <Button className="btn-light">See all Services</Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default HeroSection;