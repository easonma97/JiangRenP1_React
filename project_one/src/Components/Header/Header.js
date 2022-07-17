import './Header.css';

const Header = () => {
    return (
      <div className="header">
        <h2 className="left-heading">Introducing iWatch</h2>
        <ul className="right-heading">
          <li className="right-nav">
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
          </li>
        </ul>
      </div>
    );
};

export default Header;