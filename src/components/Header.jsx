import { useState } from "react";
import { Link } from 'react-router-dom';

const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://dcassetcdn.com/design_img/1889677/444768/444768_10393234_1889677_85203911_image.png" alt="logo"
    />
  </a>
)


//REACT COMPONENT =>>
// Functional component => New way of writting code => Its nothing but a function
// Class based component => Old way of writting code 
const Header = () => {

  const [logStatus, setLogStatus] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="navItem">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Card</li>
        </ul>
        {
          logStatus ? <button onClick={() => { setLogStatus(false) }} >Logout</button> : <button onClick={() => { setLogStatus(true) }} >Login</button>
        }
      </div>
    </div>
  );
}
{/** 
    =>> ITS THE SAME AS ABOVE HEADING 
    const Heading = () => (
      <div>
        <h1> Namaste React Functional component </h1>
        <h2> This is an h2 tag </h2>
      </div>
    );
*/}

export default Header;