import React from "react";
const styles = {
    box: {
      margin: 30,
      background: "#e8eaf6"
    }
  };

function About() {
    return (
        <div style={styles.box}>
            <div className="row">
                <section className="col-md">
                    <article className="block">
                        <h1>About me</h1>
                        <hr />
                        <p>
                            Yulia was born in Kiev, Ukraine. A year later her family moved to Bogota, Colombia where they lived for 5
                            years, ultimately moving back to Kiev Ukraine in 1995. In 2000 Yulia with her family immigrated to USA and
                            settled in Phoenix, AZ.
                        </p>
                        <p>Yulia earned her high school diploma from Arizona School for the Arts in 2008. Same year she was accepted
                        to Arizona State University as a freshman. Five years later she graduated with a Bachelor of Science in
                        Manufacturing Engineering and Technology. Since graduation, Yulia joined Shutterfly printing company as
                        Digital Equipment Technician. Yulia always knew that she would continue her education.
                        </p>
                    </article>
                </section>
            </div>
        </div>
    )
}

export default About;