import React from "react";
import Image1 from "../images/Code Quiz.png";
import Image2 from "../images/Work Day Scheduler.png";
import Image3 from "../images/Lyrics to Go.png";
import Image4 from "../images/Screen Shot 2020-07-02 at 12.50.47 AM.png";
import Image5 from "../images/Screen Shot 2020-07-25 at 8.07.05 PM.png";
import Image6 from "../images/TukTuk.png";

const styles = {
    box: {
      margin: 30,
      background: "black"
    },
    projects: {
        margin: 30
    },
    img: {
        width: 600
    },
    title: {
        textAlign: "center",
        fontSize: 100,
        color: "#c9c9c9"
    }

  };

function Portfolio() {
    return (
        <div>
            <br />
            <p style={styles.title}>Portfolio</p>

        <div  style={styles.box}>
            <div className="row">
                <div className="col-md">
                    <article className="block">
                        <div className="row">
                            <div className="col-sm col-md col-lg" style={styles.box}>
                                <h4 className='imgTittle'>Coding Quiz</h4>
                                <img src={Image1} style={styles.img} className="img-fluid port-image" alt="Code Quiz"></img>
                                <a href="https://yuliatikhonova.github.io/HW-4-Code-Quiz/" target="_blank">Link to Deployed Site</a>
                                <br></br>
                                <a href="https://github.com/yuliatikhonova/HW-4-Code-Quiz" target="_blank">Link to GitHub Repo</a>
                            </div>

                            <div className="col-sm col-md col-lg" style={styles.box}>
                                <h4 className='imgTittle'>Work Day Scheduler</h4>
                                <img src={Image2} style={styles.img}  className="img-fluid port-image" alt="Work Day Scheduler"></img>
                                <a href="https://yuliatikhonova.github.io/HW-5-Work-Day-Scheduler/" target="_blank">Link to Deployed Site</a>
                                <br></br>
                                <a href="https://github.com/yuliatikhonova/HW-5-Work-Day-Scheduler" target="_blank">Link to GitHub Repo</a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm col-md col-lg" style={styles.box}>
                                <h4 className='imgTittle'>Lyrics to Go</h4>
                                <img src={Image3} style={styles.img} className="img-fluid port-image" alt="Lyrics to Go"></img>
                                <a href="https://yuliatikhonova.github.io/Lyrics-To-Go/" target="_blank">Link to Deployed Site</a>
                                <br></br>
                                <a href="https://github.com/yuliatikhonova/Lyrics-To-Go" target="_blank">Link to GitHub Repo</a>
                            </div>
                            
                            <div className="col-sm col-md col-lg" style={styles.box}>
                                <h4 className='imgTittle'>Eat Da Burger!</h4>
                                <img src={Image4} style={styles.img}  className="img-fluid port-image" alt="Eat Da Burger!"></img>
                                <a href="https://friendly-moose-12121.herokuapp.com/" target="_blank">Link to Deployed Site</a>
                                <br></br>
                                <a href="https://github.com/yuliatikhonova/HW-13-Burger-Logger" target="_blank">Link to GitHub Repo</a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm col-md col-lg" style={styles.box}>
                                <h4 className='imgTittle'>Employee Summary using Node</h4>
                                <img src={Image5} style={styles.img} className="img-fluid port-image" alt="Employee Summery"></img>
                                <a href="https://github.com/yuliatikhonova/HW-10-Template-Engine" target="_blank">Link to GitHub Repo</a>
                            </div>
                            
                            <div className="col-sm col-md col-lg" style={styles.box}>
                                <h4 className='imgTittle'>TukTuk</h4>
                                <img src={Image6} style={styles.img}  className="img-fluid port-image" alt="TukTuk"></img>
                                <a href="https://murmuring-sierra-02687.herokuapp.com/" target="_blank">Link to Deployed Site</a>
                                <br></br>
                                <a href="https://github.com/yuliatikhonova/TukTuk" target="_blank">Link to GitHub Repo</a>
                            </div>
                        </div>
                        
                    </article>
                </div>
                </div>
            </div>
            </div>
    )
}

export default Portfolio;