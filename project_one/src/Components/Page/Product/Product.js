import "./Product.css";

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
};

export default Product;
  