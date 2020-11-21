import React from "react";
import "./style.css";

function Sidebar() {
    return (
        <section className="sidebar">
            <div className="container">
                <h1> Portfolio</h1>
                <br />
                <h6>by Yulia Tikhonova</h6>
                <br />
                <div id="city">
                    <p><i className="fa fa-map-marker links" aria-hidden="true" /></p>
                    <p>Phoenix, AZ</p>
                </div>
            </div>
            <hr />
            <div >
                <br />
                <h4>Find me on</h4>
                <div className="links">
                    <a href="https://github.com/yuliatikhonova" target="_blank" className="text-white mr-3">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/yulia-tikhonova-ab7b7552" target="_blank" className="text-white">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
                <br /><br />
                <hr />
                <br />
                <h4> Contact Me</h4>
                <div >
                    <p><i className="fas fa-envelope-open-text links"></i></p>
                    <p>yuliatikhonova@outlook.com</p>
                </div>

            </div>
        </section >
    );
}

export default Sidebar;

