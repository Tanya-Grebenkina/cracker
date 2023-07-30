import { Slider } from 'antd';
import cn from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ArrowRedDown, ArrowRedUp, AddButton } from '../../Icons';
import { addToCart } from '../../../features/cart/cartSlice';

import './CrackerConstructor.scss';
import {
  TOTAL_LIMIT,
  OPTIONS,
  SMALL_PACK,
  MEDIUM_PACK,
  LARGE_PACK,
  TITLE__PACK,
} from './crackerConsts';

import { calculatePrice, calculateRemaining } from './crackerUtils';

export const CrackerConstructor = () => {
  const [pendingProduct, setPendingProduct] = useState({
    corn: 0,
    wheat: 0,
    quinoa: 0,
    autoFillValue: 0,

    price: 0,
    weight: 0,
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(TITLE__PACK);

  const dispatch = useDispatch();

  useEffect(() => {
    const availableRemain = calculateRemaining(
      TOTAL_LIMIT,
      pendingProduct.corn,
      pendingProduct.wheat,
      pendingProduct.quinoa,
    );

    if (availableRemain === TOTAL_LIMIT) {
      setPendingProduct((prevProd) => ({
        ...prevProd,
        autoFillValue: 0,
        price: 0,
      }));
    } else {
      let calculatedPrice = calculatePrice(
        pendingProduct.corn,
        pendingProduct.wheat,
        pendingProduct.quinoa,
      );

      setPendingProduct((prevProd) => ({
        ...prevProd,
        autoFillValue: availableRemain,
        price: calculatedPrice,
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pendingProduct]);

  const handleProductChange = (productType, newValue) => {
    const updatedProduct = { ...pendingProduct, [productType]: newValue };
    const totalRemaining =
      TOTAL_LIMIT +
      newValue -
      (updatedProduct.corn + updatedProduct.wheat + updatedProduct.quinoa);
    const maxAllowed = Math.min(newValue, totalRemaining);

    setPendingProduct((prevProduct) => ({
      ...prevProduct,
      [productType]: maxAllowed,
    }));
  };

  const resetValues = () => {
    pendingProduct.corn = 0;
    pendingProduct.wheat = 0;
    pendingProduct.quinoa = 0;
    pendingProduct.autoFillValue = 0;
    pendingProduct.weight = 0;
    pendingProduct.price = 0;
  };

  const handleAddToCart = () => {
    const productData = {
      id: uuidv4(),
      cornProduct: pendingProduct.corn,
      wheatProduct: pendingProduct.wheat,
      quinoaProduct: pendingProduct.quinoa,
      autoFillProduct: pendingProduct.autoFillValue,
      weight: pendingProduct.weight,
      price: pendingProduct.price,
    };

    dispatch(addToCart(productData));
    resetValues();
    setSelectedOption(TITLE__PACK);
  };

  const handlePackageOption = (packSize) => {
    setSelectedOption(packSize);
    switch (packSize.toUpperCase()) {
      case SMALL_PACK:
        setPendingProduct({ ...pendingProduct, weight: 1 });
        break;
      case MEDIUM_PACK:
        setPendingProduct({ ...pendingProduct, weight: 2 });
        break;
      case LARGE_PACK:
        setPendingProduct({ ...pendingProduct, weight: 3 });
        break;
    }

    setIsMenuOpen(false);
  };

  return (
    <section className="constructor cracker-constructor">
      <div className="container">
        <div className="cracker-constructor__content">
          <div className="cracker-constructor__heading-box">
            <div className="cracker-constructor__heading">
              <h2 className="cracker-constructor__title">
                cracker constructor
              </h2>
            </div>

            <div className="cracker-constructor__total-cost">
              <div className="cracker-constructor__cost-box">
                <span className="cracker-constructor__current-value">
                  Current Value:
                </span>
                <span className="cracker-constructor__amount">
                  {pendingProduct.price} €
                </span>
              </div>
            </div>
          </div>

          <div className="cracker-constructor__measures">
            <div className="cracker-constructor__features">
              <div className="cracker-constructor__feature">
                <div className="cracker-constructor__icon cracker-constructor__icon-nuts"></div>

                <Slider
                  className="cracker-constructor__range"
                  tooltip={{
                    formatter: null,
                  }}
                  min={0}
                  max={TOTAL_LIMIT}
                  value={pendingProduct.corn}
                  step={1}
                  trackStyle={{ backgroundColor: '#00A651' }}
                  railStyle={{ backgroundColor: '#00A651' }}
                  onChange={(value) => handleProductChange('corn', value)}
                />
                <span className="cracker-constructor__percentages">
                  {pendingProduct.corn}%
                </span>
              </div>

              <div className="cracker-constructor__feature">
                <div className="cracker-constructor__icon cracker-constructor__icon-wheat"></div>

                <Slider
                  className="cracker-constructor__range"
                  tooltip={{
                    formatter: null,
                  }}
                  min={0}
                  max={TOTAL_LIMIT}
                  value={pendingProduct.wheat}
                  trackStyle={{ backgroundColor: '#49743F' }}
                  railStyle={{ backgroundColor: '#49743F' }}
                  onChange={(value) => handleProductChange('wheat', value)}
                />
                <span className="cracker-constructor__percentages">
                  {pendingProduct.wheat} %
                </span>
              </div>

              <div className="cracker-constructor__feature">
                <div className="cracker-constructor__icon cracker-constructor__icon-grains"></div>

                <Slider
                  className="cracker-constructor__range"
                  tooltip={{
                    formatter: null,
                  }}
                  min={0}
                  max={TOTAL_LIMIT}
                  value={pendingProduct.quinoa}
                  trackStyle={{ backgroundColor: '#ABA000' }}
                  railStyle={{ backgroundColor: '#ABA000' }}
                  step={1}
                  onChange={(value) => handleProductChange('quinoa', value)}
                />
                <span className="cracker-constructor__percentages">
                  {pendingProduct.quinoa} %
                </span>
              </div>

              <div className="cracker-constructor__feature">
                <div className="cracker-constructor__icon cracker-constructor__icon-cereals"></div>

                <Slider
                  className="cracker-constructor__range"
                  tooltip={{
                    formatter: null,
                  }}
                  min={0}
                  max={TOTAL_LIMIT}
                  value={pendingProduct.autoFillValue}
                  readOnly
                  step={1}
                  trackClassName="custom-track"
                />
                <span className="cracker-constructor__percentages">
                  {pendingProduct.autoFillValue} %
                </span>
              </div>
            </div>

            <div className="package-options">
              <div className="package-options__wrapper">
                <div className="package-options__packs">
                  <div className="package-options__boxing">
                    <div className="package-options__icon package-options__icon-package"></div>

                    <div
                      className="package-options__label"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}>
                      <span className="package-options__choose">
                        {selectedOption}
                      </span>
                      <div
                        className={cn('package-options__arrow', {
                          active: isMenuOpen,
                        })}>
                        {isMenuOpen ? <ArrowRedUp /> : <ArrowRedDown />}
                      </div>
                    </div>
                  </div>

                  <div
                    className={cn('package-options__dropdown', {
                      open: isMenuOpen,
                    })}>
                    <ul className="package-options__select-options">
                      {OPTIONS.map((option) => (
                        <li
                          key={option}
                          className={cn('package-options__option', {
                            selected: selectedOption === option,
                          })}
                          onClick={() => handlePackageOption(option)}>
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="package-options__button-container">
                  <button
                    className="package-options__button btn btn--add"
                    onClick={handleAddToCart}></button>

                  <span
                    className="package-options__button-add-to-cart btn"
                    onClick={handleAddToCart}>
                    add to cart
                    <div className="package-options__krestik-wrapper">
                      <span className="package-options__krestik">
                        <AddButton />
                      </span>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
