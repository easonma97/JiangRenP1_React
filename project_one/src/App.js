import "./App.css";
import Header from "./Components/Header";
import Introduction from "./Components/Page/Introduction";
import Product from "./Components/Page/Product";

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
