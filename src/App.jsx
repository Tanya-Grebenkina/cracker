/* eslint-disable react-hooks/exhaustive-deps */
import { Cart } from './components/Cart';
import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals } from './features/cart/cartSlice';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Cracker } from './components/Cracker';
import './assets/styles/App.scss';

export const App = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <>
      <Header
        toggleCart={toggleCart}
        showCart={showCart}
      />
      {showCart && <Cart />}
      <Nav />
      <main>
        <Hero />
        <Cracker/>
      </main>

      <Footer />
    </>
  );
};
