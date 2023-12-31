import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../features/cart/cartSlice';
import { RemoveIcon } from '../Icons';
import { CartItem } from '../../global/types';
import './CartItemComponent.scss';

type CartItemProps = {
  item: CartItem;
};

export const CartItemComponent: React.FC<CartItemProps> = ({ item }) => {

  const dispatch = useDispatch();

  const handleRemoveItemClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(removeItem(item.id));
  };

  return (
    <div className="cart__item">
      <div className="cart__item-img"></div>
      <div className="cart__item-info">
        <div className="cart__item-info-wrapper">
          <span className="cart__item-product">{item.corn}%</span>
          <span className="cart__item-product">{item.wheat}%</span>
          <span className="cart__item-product">{item.quinoa}%</span>
          <span className="cart__item-product">{item.autoFillValue}%</span>
        </div>
      </div>
      <div className="cart__item-weight">{item.weight} kg</div>
      <div className="cart__item-price">{item.price} €</div>
      <div
        className="cart__item-remove"
        onClick={handleRemoveItemClick}>
        <a className="cart__btn-remove">
          <RemoveIcon/>
        </a>
      </div>
    </div>
  );
};
