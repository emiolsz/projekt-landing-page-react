import React from 'react';

function ServiceItem({ name, newness = false }) {
    return (
        <>
            {newness == true ?
                <div className="services-list-item">
                    <div className="services-text-wrapper">
                        <div className="service-title">{name}</div>
                        <div className="service-sub-title">(nowość)</div>
                    </div>
                </div> :
                <div className="services-list-item">
                    <div className="service-title">{name}</div>
                </div>
            }
        </>
    );
}

export default ServiceItem;