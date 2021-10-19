import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("./services.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <Container>
            <h1>Our Medical Services</h1>
            <Row lg={5}>
                {
                    services.map(service =>
                        <Service
                            key={service.id}
                            service={service}
                        />
                    )
                }
            </Row>
        </Container>
    );
};

export default Services;