import "./Navbar.css";




function Navbar() {
  return (
    <div className="navbar">
      <h1>BrandName</h1>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a> 
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="yon">
        <button className="but1">Log in</button>
        <button className="but2">Join Us</button>
      </div>
    </div>
  );
}

export default Navbar;
