import React from "react";
const styles = {
    box: {
        margin: 30,
        background: "black"
    },
    title :{
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
            <br/>
            <p style={styles.title}>Home</p>
    
            <div style={styles.box}>
                <p style={styles.text}>
                        Yulia was born in Kiev, Ukraine. A year later her family moved to Bogota, Colombia where they lived for 5
                    years, ultimately moving back to Kiev Ukraine in 1995. In 2000 Yulia with her family immigrated to USA and
                    settled in Phoenix, AZ.Yulia was born in Kiev, Ukraine. A year later her family moved to Bogota, Colombia where they lived for 5
                    years, ultimately moving back to Kiev Ukraine in 1995. In 2000 Yulia with her family immigrated to USA and
                    settled in Phoenix, AZ.
            </p>
            <p style={styles.text}>
                        Yulia was born in Kiev, Ukraine. A year later her family moved to Bogota, Colombia where they lived for 5
                    years, ultimately moving back to Kiev Ukraine in 1995. In 2000 Yulia with her family immigrated to USA and
                    settled in Phoenix, AZ.Yulia was born in Kiev, Ukraine. A year later her family moved to Bogota, Colombia where they lived for 5
                    years, ultimately moving back to Kiev Ukraine in 1995. In 2000 Yulia with her family immigrated to USA and
                    settled in Phoenix, AZ.
            </p>
            </div>
        </div>
    )
}

export default Home;