import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import OCTMedicines from './OCTMedicines';

const OCTMedicineSection = () => {

    const [octMedicine, setOctMedicine] = useState([]);

    useEffect(() => {
        fetch("./otc.json")
            .then(res => res.json())
            .then(data => setOctMedicine(data));
    }, []);
    return (
        <Container>
            <h1 className="my-3">Some diseases</h1>
            <div className="sectionLine mb-4"></div>
            <Row sm={2} lg={4} md={3} className="g-3">
                {
                    octMedicine.map(medicine =>
                        <OCTMedicines
                            key={medicine.catiId}
                            medicine={medicine}
                        />)
                }
            </Row>

        </Container>
    );
};

export default OCTMedicineSection;