import "../Footer/Footer.css"
function Plus() {
  return (
    <div style={{marginTop:"200px", display:"flex", alignItems:"center", gap:"300px"}} >

     <img data-aos="fade-right" src="../../../public/col-md-6.png" alt="" />

     <div data-aos="fade-left" > <p  className="salom" style={{width:"150px", height:"5px",backgroundColor:"red", display:"flex",flexDirection:"column" , alignItems:"center" }}></p>
        <h1 style={{fontSize:"40px", padding:"20px 0px 20px 0px"}}>Watch our Courses</h1>
        <p style={{padding:"0px 0px 20px 0px"}}>Problems trying to resolve the conflict between <br />
the two major realms of Classical physics:  <br />
Newtonian mechanics </p>
<h4><a style={{color:"blue"}} href="">Learn More</a></h4></div>
    </div>
  )
}

export default Plus
