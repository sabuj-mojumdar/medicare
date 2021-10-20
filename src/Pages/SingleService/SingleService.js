import React from 'react';
import "./SingleService.css";
import UseServices from '../../Components/Hooks/UseServices';
import { useParams } from 'react-router';
import SingleDetails from './SingleDetails';

const SingleService = () => {
    const services = UseServices();
    const { title } = useParams();

    return (
        <>

            {
                services.filter(service => service.title === title)
                    .map(data => (
                        <SingleDetails
                            key={data.id}
                            data={data}
                        />
                    ))
            }
        </>
    );
};

export default SingleService;