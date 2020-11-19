import React from "react";
import Image from "../../images/20200701_214128.jpg";
import "./style.css";

function Sidebar() {
    return (
        <section className="sidebar">
            <div className="container">
                <h2> My Portfolio</h2>
                <br/>
                <img src={Image} alt="Yulia" />
                <br/><br/>
                <h6>by Yulia Tikhonova</h6>
                
                <div  id="city">
                    <p><i className="fa fa-map-marker" aria-hidden="true" /></p>
                    <p>Phoenix, AZ</p>
                </div>
            </div>
            <hr />
            <div >
                <h5>Check Me out</h5>
                <a href="https://github.com/yuliatikhonova" target="_blank">GitHub</a>
                <br />
                <a href="https://www.linkedin.com/in/yulia-tikhonova-ab7b7552" target="_blank">LinkedIn</a>
                <br/><br/>
                <h5> Contact Me</h5>
                <div >
                    <p><i className="fas fa-envelope-open-text"></i></p>
                    <p>yuliatikhonova@outlook.com</p>
                </div>
                <div>
                    <p><i className="fa fa-mobile" aria-hidden="true" /></p>
                    <p>623-628-8050</p>
                </div>

            </div>
        </section >
    );
}

export default Sidebar;

