import React from "react";
import Image from "../../images/20200701_214128.jpg";
import "./style.css";

function Sidebar() {
    return (
        <section className="sidebar">
            <div className="container">
                <img src={Image} alt="Yulia" />
                <br /><br />
                <h2> My Portfolio</h2>
                <h6>by Yulia Tikhonova</h6>
            </div>
            <hr />
            <br />
            <div >
                <h4>Located In</h4>
                <div className="col-12" id="city">
                    <p><i className="fa fa-map-marker" aria-hidden="true" /></p>
                    <p>Phoenix, AZ</p>
                </div>
                <h4>Check Me out</h4>
                <a href="https://github.com/yuliatikhonova" target="_blank">GitHub</a>
                <br/>
                <a href="https://www.linkedin.com/in/yulia-tikhonova-ab7b7552" target="_blank">LinkedIn</a>
            <h4> Contact Me</h4>
            <div className="col-12">
                <p><i className="fas fa-envelope-open-text"></i></p>
                <p>yuliatikhonova@outlook.com</p>
            </div>
            <div className="col-12">
                <p><i className="fa fa-mobile" aria-hidden="true" /></p>
                <p>623-628-8050</p>
            </div>

            </div>
        </section >
    );
}

export default Sidebar;

