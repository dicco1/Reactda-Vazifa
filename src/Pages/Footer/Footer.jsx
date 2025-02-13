import "./Footer.css";

function Footer() {
  return (
    <div style={{marginTop:"200px"}}>
      <div style={{display:"flex" , alignItems:"center", gap:"300px"}} >
        <div data-aos="fade-right" > <p  className="salom" style={{width:"150px", height:"5px",backgroundColor:"red", display:"flex",flexDirection:"column" , alignItems:"center" }}></p>
        <h1 style={{fontSize:"40px", padding:"20px 0px 20px 0px"}}>Watch our Courses</h1>
        <p style={{padding:"0px 0px 20px 0px"}}>Problems trying to resolve the conflict between <br />
the two major realms of Classical physics:  <br />
Newtonian mechanics </p>
<h4><a style={{color:"blue"}} href="">Learn More</a></h4></div>
        <div className="bigA">
          <div className="bigB">
            <div className="arrrr" data-aos="fade-down">
              <article className="arrrr" style={{height:"76px" , width:"70px", backgroundColor:"#23A6F0", borderRadius:"10px", display:"flex", justifyContent:"center", alignItems:"center"}}> 
<h2>B</h2>
              </article>
              <h3 style={{padding:"10px 0px 10px 0px"}}>
              training Courses
              </h3>
              <p className="salom"  style={{width:"50px", height:"5px",backgroundColor:"red", display:"flex",flexDirection:"column" , alignItems:"center", }}></p>
              <p style={{padding:"20px 0px 0px 0px"}}>
              The gradual <br />
accumulation of <br />
information about 
              </p>
            </div>
            {/*  */}
            <div className="arrrr" data-aos="fade-up" style={{marginTop:"50px"}}>
              <article className="arrrr" style={{height:"76px" , width:"70px", backgroundColor:"#B9EAA8", borderRadius:"10px", display:"flex", justifyContent:"center", alignItems:"center"}}> 
<h2>C</h2>
              </article>
              <h3 style={{padding:"10px 0px 10px 0px"}}>
              training Courses
              </h3>
              <p className="salom"  style={{width:"50px", height:"5px",backgroundColor:"red", display:"flex",flexDirection:"column" , alignItems:"center", }}></p>
              <p style={{padding:"20px 0px 0px 0px"}}>
              The gradual <br />
accumulation of <br />
information about 
              </p>
            </div>
            {/*  */}
          </div>
          <div>
          <div className="arrrr" data-aos="fade-left" style={{marginTop:"150px" , marginLeft:"50px"}}>
              <article className="arrrr" style={{height:"76px" , width:"70px", backgroundColor:"#B9EAA8", borderRadius:"10px", display:"flex", justifyContent:"center", alignItems:"center"}}> 
<h2>D</h2>
              </article>
              <h3 style={{padding:"10px 0px 10px 0px"}}>
              training Courses
              </h3>
              <p className="salom"  style={{width:"50px", height:"5px",backgroundColor:"red", display:"flex",flexDirection:"column" , alignItems:"center", }}></p>
              <p style={{padding:"20px 0px 0px 0px"}}>
              The gradual <br />
accumulation of <br />
information about 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
