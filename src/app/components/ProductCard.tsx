import React from "react";

// @DanielBNEON
// in typescript, variables can not have no type, so we need to create an interface
// to define the type of the props
// this interface is used in the function parameters

interface ProductCardProps {
    img: string;
    title: string;
    size: string;
}

const ProductCard = (props: ProductCardProps) => {
    return (
        <div className="product-card">
            <img src={props.img} alt="Product" />
            <h3>{props.title}</h3>
            <p>{props.size}</p>
        </div>
    );
};

export default ProductCard;
