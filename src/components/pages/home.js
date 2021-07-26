import React from "react";
import me from "../../assets/images/me.jpg"


function Home() {
    return (
        <div className="background">
            <div>

                <img className="me" src={me}alt="me"></img>
                <h1 className="myname">Samuel Mcswain</h1>
                <br></br>
                <h2 className="fullstack">Junior Web Developer</h2>
                <br></br>
                <h3 className="charlote"> Charlotte, North Carolina</h3>
                <br></br>
                <br></br>
                <br></br>
                
            </div>
           
        </div>
    )

}

export default Home;