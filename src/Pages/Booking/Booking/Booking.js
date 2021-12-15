import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})
useEffect(()=>{
    fetch(`http://localhost:5000/Services/${serviceId}`)
    .then(res => res.json())
    .then(data => setService(data));
}, [])

    return (
        <div>
             <h2>Details Of : {service.name}</h2>
            <h2>this is booking: {serviceId}</h2>
        </div>
    );
};

export default Booking;