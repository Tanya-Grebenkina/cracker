import { ArrowDown, ArrowUp } from '../Icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './Header.scss';
import { useEffect, useRef } from 'react';
import { Cart } from '../Cart';

type HeaderProps = {
  toggleCart: () => void;
  showCart: boolean;
  setShowCart: (showCart: boolean) => void;
};

export const Header: React.FC<HeaderProps> = ({ toggleCart, showCart, setShowCart }) => {

  const { totalAmount, totalPrice } = useSelector(
    (state: RootState) => state.cart,
  );

  const cartRef = useRef<HTMLDivElement>(null);

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
    <header className="header">
      <div className="header__content">
        <div className="container">
          <div className="cart-bar">
            <a
              href="#"
              className="cart-bar__logo-link">
              <img
                className="cart-bar__logo"
                src="/images/logo.png"
                alt="Cracker"
              />
            </a>

            <div className="cart-bar__details">
              <div className="cart-bar__cart-wrapper">
                <span className="cart-bar__icon cart-bar__icon-seed">
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

                {showCart && (
                  <div
                    ref={cartRef}
                    className="cart-bar__cart cart">
                    <Cart />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
