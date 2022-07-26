import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Payment from "./Payment";
import { useStateValue } from "./Stateprovider";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from "./Orders";
const promise = loadStripe(
  'pk_test_51LHWaBEaXVYJsoKp46iGKadpiIPQjbF0TXcZuWwEzjIn6xtYjzLCv3Dd4NYKeliBkVcgecpFqVoTjdlEQL8mqRh600Ueu8mAAX'
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route path='/login'
        element={<Login />}>
        </Route>
        <Route path='/orders'
        element={
        <>
        <Header/>
        <Orders />
        </>
      }>
        </Route>
        <Route path='/payment' 
        element={<Elements stripe={promise}>
        <Payment />
      </Elements>}>
        </Route>
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
      </Routes>
    </div>
  </BrowserRouter>
  );
}
export default App;
