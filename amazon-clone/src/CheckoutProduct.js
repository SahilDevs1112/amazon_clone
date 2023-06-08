import React from "react";
import ".//CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct(props){

    const[{basket},dispatch] = useStateValue();
    const removeBtnClick = () =>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id: props.id,
        });
    };
    return(<>
    <div className="checkoutproduct">
        <img class="checkoutproduct_image" src={props.image} alt="Check out item image" />
        <div className="checkoutproduct_info">
            <p className="checkoutproduct_title">{props.title}</p>

            <p className="checkoutproduct_price">
                <small>$</small>
                <strong>{props.price}</strong>
            </p>

            <div className="checkoutproduct_rating"> 
                {
                    Array(props.rating).fill().map((_) => (
                        <p>⭐</p>
                    ))
                }
            </div>
                <button onClick={removeBtnClick} className="removefrombasketbtn">Remove from basket</button>
        </div>
    </div>
    </>);
}

export default CheckoutProduct;