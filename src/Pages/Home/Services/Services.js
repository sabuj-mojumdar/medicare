import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://sabuj-mojumdar.github.io/fakeapidata/services.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <Container>
            <h1 className="mt-3">Our Medical Services</h1>
            <div className="sectionLine mb-4"></div>
            <Row sm={2} md={3} lg={5} >
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