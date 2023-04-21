import React from 'react';

function Employee({ name, descr, dir }) {
    return (
        <div className="specialist-container">
            <div className={['specialist-image' + ' ' + (dir == "right" ? 'specialist-one' : 'specialist-two')].join(' ')}></div>
            <div className="specialist-description">
                <h3>{name}</h3>
                <br />
                <p>
                    {descr}
                </p>
            </div>
        </div>
    );
}

export default Employee;