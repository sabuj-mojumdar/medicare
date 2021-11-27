import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container, Row } from 'react-bootstrap';
import MedicineDetails from './MedicineDetails';

const CategoryDetails = () => {
    const { categoryName } = useParams();
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/medicine-category?category=${categoryName}`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [categoryName]);
    return (
        <Container>
            <h1 className="mt-3">Our Medical Services</h1>
            <Row xs={1} md={3} lg={4} className="g-3">
                {
                    categories.map(category =>
                        <MedicineDetails
                            key={category._id}
                            category={category}
                        />
                    )
                }
            </Row>
        </Container>
    );
};

export default CategoryDetails;