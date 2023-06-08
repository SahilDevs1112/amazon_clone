import React from "react";
import Header from "./Header";
import ".//Home.css";
import Product from "./Product";
import {Helmet} from 'react-helmet';

function Home() {
    return (<>
        <Helmet>
        <title>Amazon Home</title>
        </Helmet>
        <Header></Header>
        <div className="home">
            <img className="home_image" src={require(".//imgs/homebannerimage.jpg")} alt="Banner" />

            <div className="home_row">
                <Product
                    id="1"
                    title="Headphone | Redgear Cloak Wired RGB Wired Over Ear Gaming Headphones with Mic for PC"
                    price={500}
                    rating={5}
                    image={require(".//imgs/product1.jpg")}
                />
                <Product
                    id="2"
                    title="Apple iPhone 14 Pro (128 GB) - Space Black"
                    price={119999}
                    rating={4}
                    image={require(".//imgs/product2.jpg")}
                />
            </div>

            <div className="home_row">
                <Product
                    id="3"
                    title="OnePlus 108 cm (43 inches) Y Series 4K Ultra HD Smart Android LED TV 43Y1S Pro (Black)"
                    price={26999}
                    rating={5}
                    image={require(".//imgs/product3.jpg")}
                />
                <Product
                    id="4"
                    title="boAt Xtend/Xtend RTL Smartwatch with Alexa Built-in, 1.69” HD Display, Multiple Watch Faces, Stress Monitor, Heart & SpO2 Monitoring, 14 Sports Modes, 5 ATM & 7 Days Battery(Sandy Cream)"
                    price={5999}
                    rating={4}
                    image={require(".//imgs/product4.jpg")}
                />
                <Product
                    id="5"
                    title="Under Armour Men's Project Rock 3 Training Shoe"
                    price={18999}
                    rating={5}
                    image={require(".//imgs/product5.jpg")}
                />
            </div>

            <div className="home_row">
                <Product
                    id="6"
                    title="PHILIPS Brilliance 499P9H1/75 49-inch Curved SuperWide Dual QHD LCD Display with Pop-Up Webcam with Windows Hello"
                    price={99091}
                    rating={4}
                    image={require(".//imgs/product6.jpg")}
                />
            </div>

        </div>
    </>);
}

export default Home;

