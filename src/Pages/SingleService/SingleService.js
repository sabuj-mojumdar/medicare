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
                        <p className="justify">To increase efforts to improve eye health globally, the Sixty-sixth World Health Assembly
                            endorsed the Universal eye health: a global action plan 2014–2019 by adopting resolution
                            WHA66.4.1
                            The action plan reflects five principles: universal access and equity, human
                            rights, evidence-based practice, a life-course approach and empowerment of people with
                            visual impairment. The action plan is based on the health system approach, in which eye
                            care programmes are integrated into the wider health care system at primary, secondary
                            and tertiary levels.
                            The plan presents Member States with a set of actions from which they can choose those
                            most appropriate to their setting and needs. In order to do so and to make progress towards
                            universal access to high-quality, comprehensive, integrated eye care, the interventions
                            must be based on evidence about the extent and causes of visual impairment in the
                            population and the gaps in current provision of eye care. The “eye care service assessment
                            tool” (ECSAT) allows users to collect data and information on the provision of eye care
                            at country or district level and to determine whether it meets the objectives of the global
                            eye health action plan.
                            ECSAT has three main sections, which follow the structure of the global eye health action
                            plan. Section 1 covers the availability of data on the prevalence and causes of visual
                            impairment, gaps in eye care services and use of evidence for securing support for eye
                            health. Section 2 provides guidance for assessing the status and functionality of a country’s
                            eye care service on the basis of the six areas of the WHO framework for strengthening
                            health systems. Section 3 gives guidance for determining the extent to which eye health
                            is covered in multisectoral agendas and for engaging in national and international eye
                            health partnerships.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SingleService;