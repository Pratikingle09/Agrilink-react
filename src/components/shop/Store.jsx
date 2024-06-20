import React, { useState, useEffect } from "react";
import sampleProducts from "../../utils/store/Store";
import Product from "./Product";
import AddProduct from "./AddProduct";

function Store() {
  const [showPop, setShowPop] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cancelBtn, setCancelBtn] = useState(false)



  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const allProducts = [...storedProducts, ...sampleProducts];
    setProducts(allProducts);
  }, [products]);

  const cancelSearch=()=>{
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const allProducts = [...storedProducts, ...sampleProducts];
    setProducts(allProducts);
  }

  const searchProducts = (e) => {
    e.preventDefault();
    const filteredProducts = products.filter(product => 
      product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(filteredProducts);
    setCancelBtn(true)
  };

  return (
    <div className="body" style={{ top: 0, position: "absolute" }}>
      <div className="store">
        <button onClick={() => setShowPop(true)} className="add-product link btn">
          Add product
        </button>
        {showPop && <AddProduct setShowPop={setShowPop} />}
        <form onSubmit={searchProducts}>
          <div className="search">
            <div>
              <input
                type="text"
                placeholder="Search"
                className="input input-search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              /> 
            </div>
            <div>
              <button type="submit" className="search-btn">
                Search
              </button>
            </div>
          </div>
        </form>
             { cancelBtn && <button onClick={cancelSearch} className="cancel">cancel</button>}

        <div id="products">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Store;
