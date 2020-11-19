import React from "react";
const styles = {
    box: {
        margin: 30,
        background: "black"
    },
    title: {
        textAlign: "center",
        fontSize: 100,
        color: "#c9c9c9"
    },
    text: {
        fontSize: 25
    }
};

function About() {
    return (
        <div>
            <br />
            <p style={styles.title}>About Me</p>

            <div style={styles.box}>
                <div className="row">
                    <section className="col-md">
                        <article className="block">

                            <p style={styles.text}>
                                Yulia was born in Kiev, Ukraine. A year later her family moved to Bogota, Colombia where they lived for 5
                                years, ultimately moving back to Kiev Ukraine in 1995. In 2000 Yulia with her family immigrated to USA and
                                settled in Phoenix, AZ.
                            </p>
                            <p style={styles.text}>Yulia earned her high school diploma from Arizona School for the Arts in 2008. Same year she was accepted
                            to Arizona State University as a freshman. Five years later she graduated with a Bachelor of Science in
                            Manufacturing Engineering and Technology. Since graduation, Yulia joined Shutterfly printing company as
                            Digital Equipment Technician. Yulia always knew that she would continue her education.
                            </p>
                        </article>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default About;