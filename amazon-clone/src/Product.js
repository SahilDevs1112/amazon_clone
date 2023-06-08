import ".//Product.css";
import React from "react";
import { useStateValue } from "./StateProvider";


function Product(props) {

    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: props.id,
                title: props.title,
                image: props.image,
                price: props.price,
                rating: props.rating
            }
        })
    };

    return (<>
        <div className="product">
            <div className="product_info">
                <h3>{props.title}</h3>
                <p className="product_price">
                    <small>₹</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(props.rating)
                            .fill()
                            .map((_) => {
                                return <p>⭐</p>;
                            })
                    }
                </div>
            </div>
            <div className="product_imgBtn">
                <img className="product_image" src={props.image} alt="" />
                <button onClick={addToBasket} className="product_button">Add to Cart</button>
            </div>
        </div>
    </>);
}

export default Product;