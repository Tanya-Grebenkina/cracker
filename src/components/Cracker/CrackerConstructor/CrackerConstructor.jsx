import { Slider } from 'antd';
import cn from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ArrowRedDown, ArrowRedUp, AddButton } from '../../Icons';
import {
  updateCorn,
  updateWheat,
  updateQuinoa,
  updateAutoFill,
  updateProductPrice,
  updateProductWeight,
  addToCart,
  resetValues,
} from '../../../features/cart/cartSlice';

import './CrackerConstructor.scss';

export const CrackerConstructor = () => {
  const {
    cornProduct,
    wheatProduct,
    quinoaProduct,
    autoFillProduct,
    productPrice,
    productWeight,
  } = useSelector((state) => state.cart);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('choose your pack');

  const dispatch = useDispatch();

  const totalLimit = 100;

  const calculatePrice = () => {
    return cornProduct * 1 + wheatProduct * 2 + quinoaProduct * 3;
  };

  useEffect(() => {
    const availableRemain =
      totalLimit - (cornProduct + wheatProduct + quinoaProduct);

    if (availableRemain === totalLimit) {
      dispatch(updateAutoFill(0));
      dispatch(updateProductPrice(0));
    } else {
      dispatch(updateAutoFill(availableRemain));
      dispatch(updateProductPrice(calculatePrice()));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cornProduct, wheatProduct, quinoaProduct]);

  const handleChange = (value, setFunction, productFirst, productSecond) => {
    const newValue = parseFloat(value);
    const maxValue = totalLimit - (productFirst + productSecond);

    if (newValue <= maxValue) {
      dispatch(setFunction(newValue));
    } else {
      dispatch(setFunction(maxValue));
    }
  };

  const handleAddToCart = () => {
    const productData = {
      id: uuidv4(),
      cornProduct,
      wheatProduct,
      quinoaProduct,
      autoFillProduct,
      weight: productWeight,
      price: productPrice,
    };

    dispatch(addToCart(productData));
    dispatch(resetValues());
    console.log(productData);
  };

  const SMALL_PACK = 'SMALL PACK';
  const MEDIUM_PACK = 'MEDIUM PACK';
  const LARGE_PACK = 'LARGE PACK';

  const handlePackageOption = (packSize) => {
    setSelectedOption(packSize);
    switch (packSize.toUpperCase()) {
      case SMALL_PACK:
        dispatch(updateProductWeight(1));
        break;
      case MEDIUM_PACK:
        dispatch(updateProductWeight(2));
        break;
      case LARGE_PACK:
        dispatch(updateProductWeight(3));
        break;
    }

    setIsMenuOpen(false);
  };

  const customHandleStyle = {
    backgroundColor: '#00ff00',
    borderColor: '#00ff00',
  };

  const options = ['small pack', 'medium pack', 'large pack'];

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
                  {productPrice} €
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
                  max={totalLimit}
                  value={cornProduct}
                  step={1}
                  trackStyle={{ backgroundColor: '#00A651' }}
                  railStyle={{ backgroundColor: '#00A651' }}
                  onChange={(value) =>
                    handleChange(value, updateCorn, wheatProduct, quinoaProduct)
                  }
                />
                <span className="cracker-constructor__percentages">
                  {cornProduct}%
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
                  max={totalLimit}
                  value={wheatProduct}
                  trackStyle={{ backgroundColor: '#49743F' }}
                  railStyle={{ backgroundColor: '#49743F' }}
                  handleStyle={customHandleStyle}
                  onChange={(event) =>
                    handleChange(event, updateWheat, cornProduct, quinoaProduct)
                  }
                />
                <span className="cracker-constructor__percentages">
                  {wheatProduct} %
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
                  max={totalLimit}
                  value={quinoaProduct}
                  trackStyle={{ backgroundColor: '#ABA000' }}
                  railStyle={{ backgroundColor: '#ABA000' }}
                  step={1}
                  onChange={(event) =>
                    handleChange(event, updateQuinoa, cornProduct, wheatProduct)
                  }
                />
                <span className="cracker-constructor__percentages">
                  {quinoaProduct} %
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
                  max={totalLimit}
                  value={autoFillProduct}
                  readOnly
                  step={1}
                  trackClassName="custom-track"
                />
                <span className="cracker-constructor__percentages">
                  {autoFillProduct} %
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
                    {options.map((option) => (
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

                <button className="package-options__button btn btn--add" onClick={handleAddToCart}>
                </button>


                <span className="package-options__button-add-to-cart btn" onClick={handleAddToCart}>
                  add to cart
                  <div className="package-options__krestik-wrapper">
                  <span className="package-options__krestik"><AddButton/></span>
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
