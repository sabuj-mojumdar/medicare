import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddDisease = () => {
    const [success, setSuccess] = useState(false);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/diseases', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('One Disease Category has been added');
                    setSuccess(true);
                }
            })
    }
    return (
        <div className="my-5">
            {success && <h3>One Disease Category has been added</h3>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Disease Name" type="text" {...register('diseaseName', { required: true })} />
                <input placeholder="Disease Image url" type="text" {...register('diseaseImg', { required: true })} />
                <input placeholder="Disease Description" type="text" {...register('description', { required: true })} />
                <input type="submit" value='submit' />
            </form>
        </div>
    );
};

export default AddDisease;