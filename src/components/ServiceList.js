import React from 'react';
import ServiceItem from './ServiceItem';
import { useState } from 'react';

function ServiceList(props) {
    const [state, setstate] = useState([
        {name: "Usługa 1", newness: true},
        {name: "Usługa 2"},
        {name: "Usługa 3"},
        {name: "Usługa 4"},
        {name: "Usługa 5"},
        {name: "Usługa 6"},
    ]);
    return (
        <div className="services-list">
            {state.map((i, index) => i.newness == true ? <ServiceItem key={index} name={i.name} newness={true} /> : <ServiceItem key={index} name={i.name} /> )}
        </div>
    );
}

export default ServiceList;