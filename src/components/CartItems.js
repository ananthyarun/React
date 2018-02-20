import React from "react";


function Product({ cart, RemoveItems }) {
  return (
    <div className="col-md-3">
      <div className="each-product">
        
        <h4 className="product-name">{cart.name}</h4>
        <p className="product-price">{cart.price}</p>
        <div className="number-input">
          <a href="#" className="decrement">
            –
          </a>
          <input type="number" className="value-result" defaultValue={1} />
          <a href="#" className="increment">
            +
          </a>
        </div>
        <div className="product-button">
          <button
            type="button"
            className="cart-add-button"
          
            onClick={function() {
                RemoveItems(cart);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
