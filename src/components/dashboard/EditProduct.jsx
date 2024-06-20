import React, { useState } from 'react';


function EditProduct({ productData,setShowPopup,setRender}) {
  const [productDetails, setProductDetails] = useState(productData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({
      ...productDetails,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductDetails({
          ...productDetails,
          product_image: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let products = JSON.parse(localStorage.getItem('products')) || [];
    const updatedProducts = products.map(product =>
      product.id === productDetails.id ? productDetails : product
    );
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    setRender(true)
    setShowPopup(false);
  };

  return (
    <div className='editpopup'>
      <button className='cancel-update' onClick={() => {setShowPopup(false)}}>x</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name='product_name'
          value={productDetails.product_name}
          placeholder='Product Name'
          className='input'
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name='product_description'
          value={productDetails.product_description}
          placeholder='Product Description'
          className='input'
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name='product_image'
          className='input'
          onChange={handleImageChange}
          required
        />
        <input
          type="number"
          name='price'
          value={productDetails.price}
          placeholder='Price'
          className='input'
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name='quantity'
          value={productDetails.quantity}
          placeholder='Quantity'
          className='input'
          onChange={handleChange}
          required
        />
        <input type="submit" value='Update Product' className='input' style={{ height: '40px', backgroundColor: 'black', color: 'white' }} />
      </form>
    </div>
  );
}

export default EditProduct;
