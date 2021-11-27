import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Medicine from './Medicine';

const OTCMedicines = () => {
    const [medicines, setMedicines] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/categories")
            .then(res => res.json())
            .then(data => setMedicines(data));
    }, []);
    return (
        <Container>
            <Row>
                {
                    medicines.map(medicine =>
                        <Medicine
                            key={medicine.id}
                            medicine={medicine}
                        />)
                }
            </Row>
        </Container>
    );
};

export default OTCMedicines;