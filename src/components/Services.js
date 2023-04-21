import React from 'react';
import ServiceList from './ServiceList';

function Services(props) {
    return (
        <section id="services">
            <div className="container">
                <div className="title-section">Czym zajmuje się nasza firma?</div>
                <ServiceList />
            </div>
        </section>
    );
}

export default Services;