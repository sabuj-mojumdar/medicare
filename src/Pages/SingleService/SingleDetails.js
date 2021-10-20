import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import UseServices from '../../Components/Hooks/UseServices';
import ServiceDetails from './ServiceDetails';

const SingleDetails = (props) => {
    const services = UseServices();
    const { title, description, titleimg } = props.data;
    return (
        <Container fluid className="text-start">
            <Row>
                <div className="blog-title mb-3">
                    <h1>{title}</h1>
                </div>
            </Row>
            <Row className="g-3">
                <Col sm={3} className="blog-title-area">
                    <ul className="mt-3">
                        {
                            services.map(service => <ServiceDetails
                                key={service.id}
                                service={service}
                            />)
                        }
                    </ul>
                </Col>
                <Col sm={9} className="blog-details-area">
                    {
                        services.filter(service => service.title === title)
                            .map(data => (
                                <div className="blog-details">
                                    <img src={titleimg} className="titleImg" alt="" />
                                    <h1 className="text-center">{title}</h1>
                                    <div className="sectionLine mb-4"></div>
                                    <p className="justify">{description}</p>
                                </div>
                            ))
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default SingleDetails;