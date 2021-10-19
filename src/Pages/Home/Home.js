import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import service1 from "../../img/service/service1.png"
import service2 from "../../img/service/service2.png"
import service3 from "../../img/service/service3.png"
import BlogSection from "./BlogSection/BlogSection";
import HeroSection from "./HeroSection/HeroSection";
import OCTMedicineSection from "./OCTMedicineSection/OCTMedicineSection";
import Services from "./Services/Services";
import Speciality from "./Speciality/Speciality";


const Home = () => {
    return (
        <>
            <HeroSection />
            <Services />
            <Container>
                <h1>Our Services</h1>
                <Row xs={1} md={3} className="my-3 g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={service1} />
                            <Card.Body>
                                <Card.Title>Upload Your Prescription</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={service2} />
                            <Card.Body>
                                <Card.Title>Online Doctor</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={service3} />
                            <Card.Body>
                                <Card.Title>24/7 Help Line</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <OCTMedicineSection />
            <Speciality />
            <BlogSection />
        </>
    );
}
export default Home;