/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { removeItem } from '../../features/cart/cartSlice';
import { RemoveIcon } from '../Icons';

export const CartItem = ({
  cornProduct,
  wheatProduct,
  quinoaProduct,
  autoFillProduct,
  weight,
  price,
  id,
}) => {

  const dispatch = useDispatch();

  return (
    <div className="cart__item">
      <div className="cart__item-img"></div>
      <div className="cart__item-info">
        <div className="cart__item-info-wrapper">
          <span className="cart__item-product">{cornProduct}%</span>
          <span className="cart__item-product">{wheatProduct}%</span>
          <span className="cart__item-product">{quinoaProduct}%</span>
          <span className="cart__item-product">{autoFillProduct}%</span>
        </div>
      </div>
      <div className="cart__item-weight">{weight} kg</div>
      <div className="cart__item-price">{price} €</div>
      <div
        className="cart__item-remove"
        onClick={() => dispatch(removeItem(id))}>
        <a className="cart__btn-remove">
          <RemoveIcon/>
        </a>
      </div>
    </div>
  );
};
