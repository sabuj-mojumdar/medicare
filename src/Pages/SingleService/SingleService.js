import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./SingleService.css";
import blogimg from "../../img/hero/slider1.jpg";
import ServiceDetails from './ServiceDetails';

const SingleService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://sabuj-mojumdar.github.io/fakeapidata/services.json")
            .then(res => res.json())
            .then(data => setServices(data));
    })

    return (
        <Container fluid className="text-start">
            <Row>
                <div className="blog-title mb-3">
                    <h1>Eye Care</h1>
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
                    <div className="blog-details">
                        <img src={blogimg} width="100%" alt="" />
                        <h1 className="text-center">Eye Care</h1>
                        <div className="sectionLine mb-4"></div>
                        <p className="justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus alias quisquam accusamus sequi facilis reiciendis qui ab tempore voluptates, explicabo iusto minima recusandae eligendi reprehenderit eos architecto quam iste omnis ut ea odio veniam pariatur. Cupiditate, voluptatibus minus impedit voluptatem eligendi qui repellendus recusandae nesciunt. Corrupti doloremque odit provident odio voluptatibus molestias eaque natus dolorem laborum adipisci magni eveniet recusandae voluptatum quam quas illum amet doloribus esse neque totam, ab nihil. Obcaecati numquam dignissimos beatae aliquam quaerat eligendi, fugiat doloribus odit nobis maiores, perspiciatis possimus voluptates tempora, consequuntur temporibus voluptas incidunt fugit. Fugiat accusamus labore nam molestias facilis quam veniam.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SingleService;