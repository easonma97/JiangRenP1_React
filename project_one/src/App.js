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

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
