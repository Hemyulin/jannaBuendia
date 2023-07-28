import React from 'react';

const ProductCard = (props) => {
    return (
        <div className="product-card">
            <img src={props.img} alt="Product" />
            <h3>{props.title}</h3>
            <p>{props.size}</p>
        </div>
    );
};

export default ProductCard;