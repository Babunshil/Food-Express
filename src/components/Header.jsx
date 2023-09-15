
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
  return (
    <div className="header">
      <Title />
      <div className="navItem">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Card</li>
        </ul>
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