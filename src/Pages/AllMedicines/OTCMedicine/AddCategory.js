import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddCategory = () => {
    const [success, setSuccess] = useState(false);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/categories', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('One Category added');
                    setSuccess(true);
                }
            })

    }
    return (
        <div className="my-5">
            {success && <h3>One Category added in the database.</h3>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Category Name" {...register('categoryName', { required: true })} />
                <input type="submit" value='submit' />
            </form>

        </div>
    );
};

export default AddCategory;