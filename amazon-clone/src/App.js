import './App.css';
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import CheckOut from './CheckOut';
import Login from './Login';
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";

function App() {

  const [{user},dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        //User is logged in

        dispatch({
          type:"SET_USER",
          user:authUser
        })
      }else{
        //User is logged out

        dispatch({
          type:"SET_USER",
          user:null,
        })
      };
    });

    return () => {
      //for clean up
      unsubscribe();
    };

  }, []);

  console.log('user from APP :', user);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/checkout" element={<CheckOut/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
