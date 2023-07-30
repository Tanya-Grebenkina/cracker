/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef } from 'react';
import { Cart } from './components/Cart';
import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Cracker } from './components/Cracker';

import { RootState } from './store';

import { updateTotals } from './features/cart/cartSlice';
import './assets/styles/App.scss';

export const App = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);

  const [showCart, setShowCart] = useState(false);

  const cartRef = useRef<HTMLDivElement>(null);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTotals());
  }, [cartItems]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setShowCart(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <Header
        toggleCart={toggleCart}
        showCart={showCart}
      />
      {showCart && (
        <div ref={cartRef}>
          <Cart />
        </div>
      )}
      <Nav />
      <main>
        <Hero />
        <Cracker />
      </main>

      <Footer />
    </>
  );
};
