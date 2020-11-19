import React from "react";
import "./style.css";

function Contact() {
    return ( 
        <div className="container">
            <h2>Contact me</h2>
            <div className="row">
                <div className="col-4">
                    <p><i className="fas fa-envelope-open-text"></i></p>
                    <p>yuliatikhonova@outlook.com</p>
                </div>
            
                <div className="col-4" id="city">
                    <p><i className="fa fa-map-marker" aria-hidden="true" /></p>
                    <p>Phoenix, AZ</p>
                </div>

                <div className="col-4">
                <p><i className="fa fa-mobile" aria-hidden="true" /></p>
                <p>623-628-8050</p>
                </div>
            </div>
        </div>
    )
};

export default Contact;
