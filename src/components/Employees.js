import React from 'react';
import Employee from './Employee';
import { useState } from 'react';

function Employees(props) {
    const [state, setstate] = useState([
        {
            name: "Marek Filiński [dział prawny]",
            descr: `Marek Filiński [ dział prawny ] Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Morbi vel massa et lacus egestas
            cursus a non magna. Fusce scelerisque blandit nunc, id malesuada
            ex lobortis a. Integer felis nisi, tempor elementum lorem in,
            varius pellentesque ligula. Duis efficitur lacinia enim, non
            tincidunt libero ultrices in.`
        },
        {
            name: "Edyta Malutka [ dział handlowy]",
            descr: `Edyta Malutka [ dział Handlowy ] Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Morbi vel massa et lacus egestas
            cursus a non magna. Fusce scelerisque blandit nunc, id malesuada
            ex lobortis a. Integer felis nisi, tempor elementum lorem in,
            varius pellentesque ligula. Duis efficitur lacinia enim, non
            tincidunt libero ultrices in.`
        }
    ]);
    return (
        <section id="specialists">
            <div className="container">
                <div className="title-section">Nasi specjaliści</div>
                {state.map((i, index) => {
                    let indx = index + 1;
                    return <Employee key={index/100} name={i.name} descr={i.descr} dir={indx % 2 ? "right" : "left"} />
                    
                })}
            </div>
        </section>
    );
}

export default Employees;