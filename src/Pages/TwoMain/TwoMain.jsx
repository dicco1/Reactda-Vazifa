import "./TwoMian.css"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function TwoMain() {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
      }, []);
  return (
    <div style={{padding:"50px", marginTop:"130px"}}>
      <p style={{color:"#23A6F0", fontWeight:"500", textAlign:"center",padding:"20px"}}>
        Welcome
      </p>
      <h1 data-aos="fade-right" style={{color:"white" , fontSize:"50px" , textAlign:"center",lineHeight:"70px" , fontWeight:"700"}}>
      Selling on the <br />
       internet like a pro
      </h1>
      <h4 style={{color:"white" , fontSize:"20px" , textAlign:"center" , fontWeight:"300", padding:"40px"}}>
      We know how large objects will act, but things on a  <br />
      small scale just do not act that way.
      </h4>
      <div className="buttons">
        <button className="butt1">Get Started</button>
        <button className="but2">Learn More</button>
      </div>
    </div>
  )
}

export default TwoMain
