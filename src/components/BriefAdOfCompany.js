import React from 'react';

function BriefAdOfCompany(props) {
    return (
        <div className="wrapper">
            <div className="container">
                <h1>Nasza firma oferuje najwyższej<br />jakości produkty</h1>
                <h3>Nie wierz nam na słowo - sprawdź</h3>
                <a href="#services">oferta</a>
            </div>
            <img src="/foto.jpg" alt="Tree by the sea" />
            <div className="shadow"></div>
        </div>
    );
}

export default BriefAdOfCompany;