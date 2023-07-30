import { CartItem } from '../CartItem';
import { useSelector } from 'react-redux';

import './Cart.scss';

export const Cart = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);

  return (
    <div className="cart">
      <div className="cart__wrapper">
        <div className="cart__boxing">
          <div className="cart__top">
            <div className="cart__icon cart__icon--feature1"></div>
            <div className="cart__icon cart__icon--feature2"></div>
            <div className="cart__icon cart__icon--feature3"></div>
            <div className="cart__icon cart__icon--feature4"></div>
          </div>

          <div className="cart__items">
            {cartItems.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  {...item}
                />
              );
            })}
          </div>

          <div className="cart__bottom">
            {cartItems.length > 0 ? (
              <div className="cart__bottom-wrapper">
                <div className="cart__price cart__price--cart">
                  <span className="cart__total">Total: </span>
                  <span className="cart__amount">{totalPrice} €</span>
                </div>

                <div className="cart__btn">
                  <a
                    href="#"
                    className="btn btn--checkout">
                    checkout
                  </a>
                </div>
              </div>
            ) : (
              <div className="cart__empty">
                <p className="cart__empty-text">Your cart is empty</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
