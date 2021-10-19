import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetails = (props) => {
    const { title } = props.service;
    return (
        <li>
            <Link to="/allservices" className="d-flex justify-content-between">
                <p className="fw-bold m-0">{title}</p>
                <i className="fas fa-chevron-right my-auto"></i>
            </Link>
        </li>
    );
};

export default ServiceDetails;