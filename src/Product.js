import React, { useState, useEffect } from 'react';

const Product = () => {
  const [productData, setProductData] = useState([]);

  const getData = async () => {
    const result = await fetch('https://dummyjson.com/products');
    const data = await result.json();
    console.log(data.products);
    setProductData(data.products);
  };

  useEffect(() => {
    getData();
  }, []);

  const colorPicker = (ratingValue) => {
    if (ratingValue >= 4.75) {
      return '#E8F5E9';
    } else if (ratingValue >= 4.25 && ratingValue < 4.75) {
      return '#FFEBEE';
    } else return '#FFF8E1';
  };

  /**
   * ratingValue >= 4
      ? ratingValue >= 3 && ratingValue < 4
        ? '#FFF8E1'
        : '#FFEBEE'
      : '#E8F5E9';
   */

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {productData &&
        productData.map((item, index) => {
          return (
            <div
              className="product"
              key={item.id}
              style={{
                borderRadius: '12px',
                border: '1px solid #CCCCCC80',
                margin: '20px',
                maxWidth: '300px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                }}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  height="240"
                  style={{
                    borderRadius: '12px',
                    width: '100%',
                  }}
                />
                <span
                  style={{
                    backgroundColor: colorPicker(`${item.rating}`),
                    padding: '8px',
                    borderRadius: '4px',
                    position: 'absolute',
                    right: '-4px',
                    top: '-8px',
                  }}
                >
                  {item.rating}/5
                </span>
              </div>

              <div style={{ padding: '20px' }}>
                <h1 style={{ margin: 0 }}>{item.title}</h1>
                <h2>${item.price}</h2>
                <p style={{ fontWeight: 200 }}>{item.description}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Product;

/**
 * 
brand: "Apple"
category: "smartphones"
description: "An apple mobile which is nothing like apple"
discountPercentage: 12.96
id: 1
images: Array[5]
price: 549
rating: 4.69
stock: 94
thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
title: "iPhone 9"
 * 
 */
