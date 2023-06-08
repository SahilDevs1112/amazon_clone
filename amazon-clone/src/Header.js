import React from "react";
import ".//Header.css"
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {

    const [{user}] = useStateValue();
    const [{basket}] = useStateValue();

    const login = () => {
        if (user) {
            auth.signOut();
        }
        
    };

    console.log("User is " , user);

    return (
        <nav className="header">
            <Link to="/">
                <img className="header_logo" src={require(".//imgs/amazonlogo.jpg")} alt="Amazon logo" />
            </Link>
            {/* search box */}
            <div class="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon" />
            </div>

            <div className="header_nav">
                <Link to={!user && "/Login"} className="header_link">
                    <div onClick={login} className="header_option">
                        <span className="header_optionLineOne">Hello {user ? user.email : 'User'}</span>
                        <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">Returns</span>
                        <span className="header_optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">Your</span>
                        <span className="header_optionLineTwo">Prime</span>
                    </div>
                </Link>

                {/* Basket icon */}
                <Link to="/CheckOut" class="header_link">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon className="header_shoppingBasketIcon" />
                        <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    );
}

export default Header;