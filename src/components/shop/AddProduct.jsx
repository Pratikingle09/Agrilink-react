import React, { useState } from 'react';
import './addProduct.css';

function AddProduct({setShowPop}) {
  const user = JSON.parse(localStorage.getItem('profile'))
  const [productDetails, setProductDetails] = useState({
    id: Date.now(),
    product_name: '',
    product_description: '',
    product_image: '',
    quantity:'',
    price: '',
    user:user
  });

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
    const updatedProduct = [...products,productDetails]
    localStorage.setItem('products', JSON.stringify(updatedProduct));

    setProductDetails({
      id: Date.now(),
      product_name: '',
      product_description: '',
      product_image: '',
      quantity:'',
      price: ''
    });
    setShowPop(false)
  };

  return (
    <div className='addpopup'>
        <button className='cancel-update' onClick={()=>setShowPop(false)}>x</button>
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
          placeholder='quantity' 
          className='input' 
          onChange={handleChange} 
          required
        />
        <input type="submit" value='Add Product' className='input' style={{height:'40px',backgroundColor:'black',color:'white'}}/>
      </form>
    </div>
  );
}

export default AddProduct;
