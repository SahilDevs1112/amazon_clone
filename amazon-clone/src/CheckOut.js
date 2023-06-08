import React from "react";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import './/CheckOut.css';
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import CurrencyFormat from "react-currency-format";
import { Helmet } from "react-helmet";
import ReactPlayer from "react-player";

function CheckOut() {
    const [{ basket }] = useStateValue();
    return (<>
        <Helmet>
            <title>Your basket</title>
        </Helmet>
        <Header></Header>
        <div className="checkout">
            <div className="checkout_left">
                <a href="www.sahildevs.com" target="_blank" ><img className="checkout_adImg" src={require(".//imgs/sahildevad.jpg")} alt="Ad Banner | www.sahildevs.com" /></a>
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping cart is empty</h2>
                        <p>
                            You have no items in your basket . To buy one or more items click "Add to basket" next to the item.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout_title">Your shopping cart</h2>

                        {/* list of products in the basket */}
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )
                }
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    </>);
}

export default CheckOut;