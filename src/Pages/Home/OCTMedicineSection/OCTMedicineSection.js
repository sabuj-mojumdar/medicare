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
            <Row lg={4} className="g-3">
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