import "./App.css";

const Header = () => {
  return (
    <div className="header">
      <h2 className="left-heading">Introducing iWatch</h2>
      <ul className="right-heading">
        <li className="right-nav">
          <a href="#product"></a>Product
        </li>
        <li className="right-nav">
          <a href="#feature"></a>Feature
        </li>
        <li className="right-nav">
          <a href="#review"></a>Review
        </li>
        <li className="right-nav">
          <a href="#contact"></a>Contact
        </li>
      </ul>
    </div>
  );
};

const Page = () => {
  return (
    <div className="page">
    <h1>THE FUTURE IS HERE</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Page />
    </div>
  );
}

export default App;
