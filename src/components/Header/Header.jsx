/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { ArrowDown, ArrowUp } from '../Icons';

import './Header.scss';

export const Header = ({ toggleCart, showCart }) => {

  const { totalAmount, totalPrice } = useSelector(
    (state) => state.cart,
  );
  return (
    <header className="header">
      <div className="header__content">
        <div className="container">
          <div className="cart-bar">
            <a
              href="#"
              className="cart-bar__logo-link">
              <img
                className="cart-bar__logo"
                src="/src/assets/images/logo.png"
                alt="Cracker"
              />
            </a>

            <div className="cart-bar__details">
              <div className="cart-bar__cart-wrapper">
                <span className="cart-bar__icon-seed">
                  <span className="cart-bar__value">{totalAmount}</span>
                </span>
              </div>

              <div className="cart-bar__price">
                <span className="cart-bar__total">Total: </span>
                <span className="cart-bar__amount">{totalPrice} €</span>
              </div>

              <div
                className="cart-bar__details-cart"
                onClick={toggleCart}>
                <div className="cart-bar__text">Details</div>
                <div className="cart-bar__arrow">
                  {showCart ? <ArrowUp /> : <ArrowDown />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
