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

function Home() {
    return (
        <div>
            <br />
            <p style={styles.title}>Home</p>

            <div style={styles.box}>
                <p style={styles.text}>
                    Welcome to my portfolio. In this web site I showcase my work that had been done in my software development bootcamp and future projects.
                </p>
                <br />
                <p style={styles.text}>
                    In the About Me tab is a short description of my life’s journey to this point. It includes my journey moving country to country, and my academic and job path.
                </p>
                <br />
                <p style={styles.text}>
                    In the Portfolio page is a list of homework and projects that were completed during the bootcamp. I had a total of three projects that I had to collaborate with a team to get the work done. Most of the items in my portfolio I was able to deploy. If the item does not have a deployed link, it's because it was done only in node.
                </p>
                <br />
                <p style={styles.text}>
                    I hope you enjoy my work. Thank you.
                </p>
            </div>
        </div>
    )
}

export default Home;