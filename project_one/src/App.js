import "./App.css";

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

const Introduction = () => {
  return (
    <div className="introduction">
      <h1>THE FUTURE IS HERE</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <br></br>
      <a href="https://www.youtube.com/" className="demo-button">See a Demo</a>
      <br></br>
      <img src="apple-watch.png" alt="apple-watch"></img>
    </div>
  )
}

const Product = () => {
  function showAndHide(e){
    console.log(e.target.className);
    if(e.target.className === "clock-animation-button-one"){
      var x = document.getElementById("context-one");
      if(x.style.display === 'none'){
        x.style.display = 'block';
      }else{
        x.style.display = 'none';
      }
    }else{
      var y = document.getElementById("context-two");
      if(y.style.display === 'none'){
        y.style.display = 'block';
      }else{
        y.style.display = 'none';
      }
    }
  }
  return (
    <div className="product" id="product">
      <h2>The product</h2>
      <p>Introduce the product here. A small description about what it is and how it helps the user. You can also add some photos below.</p>
      <div className="clock-animation-block">
        <div className="clock-animation-button">
          <button className="clock-animation-button-one" onClick={showAndHide}>+</button>
          <p id="context-one" className="clock-animation-button-one-context">Diamond Screen</p>
        </div>
        <div className="clock-animation">
          <img src="apple-watch-2.png" alt="apple-watch-2" class="apple-watch-2"></img>
        </div>
        <div className="clock-animation-button">
          <button className="clock-animation-button-two" onClick={showAndHide}>+</button>
          <p id="context-two" className="clock-animation-button-two-context">Metalic Strap</p>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Product />
    </div>
  );
}

export default App;
