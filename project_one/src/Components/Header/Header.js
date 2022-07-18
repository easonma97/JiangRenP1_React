import './Header.css';
import Nav from './Nav';

const Header = () => {
    return (
      <div className="header">
        <h2 className="left-heading">Introducing iWatch</h2>
        <ul className="right-heading">
          <Nav href={"#product"}>
            Product
          </Nav>
          <Nav href={"#feature"}>
            Feature
          </Nav>
          <Nav href={"#review"}>
            Review
          </Nav>
          <Nav href={"#contact"}>
            Contact  
          </Nav>
        </ul>
      </div>
    );
};

export default Header;


/*<li className="right-nav">
            <a href="#product">Product</a>
          </li>
          <li className="right-nav">
            <a href="#feature">Feature</a>
          </li>
          <li className="right-nav">
            <a href="#review">Review</a>
          </li>
          <li className="right-nav">
            <a href="#contact">Contact</a>
          </li> */