import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddMedicine = () => {
    const [success, setSuccess] = useState(false);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        fetch('http://localhost:5000/medicines', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('one medicine added.');
                    setSuccess(true);
                    e.preventDefault();
                }
            })

    }
    return (
        <div className="my-5">
            {success && <h3>One product added in the database.</h3>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Drug Name" {...register('drugName', { required: true })} />
                <select {...register('type', { required: true })}>
                    <option value="Tablet">Tablet</option>
                    <option value="Syrup">Syrup</option>
                    <option value="Capsule">Capsule</option>
                    <option value="Cream">Cream</option>
                    <option value="Lotion">Lotion</option>
                    <option value="Oeintment">Oeintment</option>
                    <option value="Device">Device</option>
                </select>
                <input placeholder="Drug Disease" {...register('disease', { required: false })} />
                <input placeholder="Drug category" {...register('category', { required: false })} />
                <input placeholder="Drug Indications" {...register('indications', { required: false })} />
                <input placeholder="Drug Pharmacology" {...register('pharmacology', { required: false })} />
                <input placeholder="Drug Generic" {...register('generic', { required: false })} />
                <input placeholder="Introduction" {...register('introduction', { required: false })} />
                <input placeholder="Drug Company" {...register('company', { required: false })} />
                <input placeholder="Drug Price" {...register('price', { required: false })} />
                <input placeholder="Drug PrePrice" {...register('prevPrice', { required: false })} />
                <input placeholder="imgUrl" {...register('img', { required: false })} />
                <input type="submit" value='submit' />
            </form>

        </div>
    );
};

export default AddMedicine;