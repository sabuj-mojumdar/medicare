import { useEffect, useState } from 'react';

const UseServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://sabuj-mojumdar.github.io/fakeapidata/services.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return services;
};

export default UseServices;