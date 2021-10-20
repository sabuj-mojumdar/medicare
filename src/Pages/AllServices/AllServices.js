import React from 'react';
import { Container, Row } from 'react-bootstrap';
import UseServices from '../../Components/Hooks/UseServices';
import Service from '../../Pages/Home/Services/Service/Service';

const AllServices = () => {
    const services = UseServices();
    return (
        <Container>
            <h1 className="mt-3">Our Medical Services</h1>
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

export default AllServices;