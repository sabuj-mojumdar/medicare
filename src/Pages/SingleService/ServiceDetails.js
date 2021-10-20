import React from 'react';
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router';

const ServiceDetails = (props) => {
    return (
        <li>
            <Link to={`/service/${props.service.title}`} className="d-flex justify-content-between">
                <p className="fw-bold m-0">{props.service.title}</p>
                <i className="fas fa-chevron-right my-auto"></i>
            </Link>
        </li>
    );
};

export default ServiceDetails;