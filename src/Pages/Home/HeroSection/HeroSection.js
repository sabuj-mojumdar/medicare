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
                        <p>Living a healthier life might seem like a tall order — the nutrition, the exercise, the inner happiness! But having some friendly advice at your disposal. It easier and more fun.</p>
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
                        <h2>Full Body Health checkup</h2>
                        <p>A full body checkup is necessary as it helps you to take necessary steps in prevention  of any potential illness. These comprehensive health checkup packages have proved to be the smartest way</p>
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
                            child Health Carefully</h2>
                        <p>If you have responsibility for a child, you are responsible for that child’s care and upbringing. You are nearly always liable for the child’s maintenance (financial support). </p>
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