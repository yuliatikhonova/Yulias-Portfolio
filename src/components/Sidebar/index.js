import React from "react";
import Image from "../../images/20200701_214128.jpg";
import "./style.css";

function Sidebar() {
    return (
        <section className="sidebar">
                <div className="container">
                    <br/>
                    <img src={Image} alt="Yulia" />
                    <br /><br />
                    <h2> Portfolio</h2>
                    <h6>by Yulia Tikhonova</h6>
                </div>
                <hr/>
                <br />
                <div className="bar block">
                    <ul>
                        <li>
                            <a href="https://github.com/yuliatikhonova" target="_blank">GitHub</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/yulia-tikhonova-ab7b7552" target="_blank">LinkedIn</a>
                        </li>
                    </ul>
                </div>
        </section>
    );
}

export default Sidebar;

