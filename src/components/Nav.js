import React from 'react';
import Link from './Link';

function Nav(props) {
    return (
        <nav>
            <div className="container">
                <a href="">Moja firma</a>
                <ul>
                    <Link url="#specialists" name="O nas"/>
                    <Link url="#services" name="Oferta"/>
                    <Link url="#" name="Kontakt"/>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;