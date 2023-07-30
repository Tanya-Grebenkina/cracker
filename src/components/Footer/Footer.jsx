import {
  FaceBook,
  Pinterest,
  Instagram,
  Phone,
  Address,
  SocialMedia,
  // Address,
} from '../Icons';

import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer-page footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__phone">
            {/* <div className="footer__call-icon"></div> */}
            <a
              href="#"
              className="footer__call-icon">
              <Phone />
            </a>

            <div className="footer__phone-boxing">
              <span className="footer__phone-title footer__style-heading">
                phone
              </span>
              <span className="footer__phone-digits">+48 (987) 345 - 6789</span>
            </div>
          </div>

          <div className="footer__address">
            <a
              href="#"
              className="footer__address-icon">
              <Address />
            </a>

            <div className="footer__address-boxing">
              <span className="footer__address-title footer__style-heading">
                address
              </span>
              <span className="footer__current-address">
                Cracker Inc
                <br />
                10 Cloverfield Lane
                <br />
                Berlin IL 10928, Germany
              </span>
            </div>
          </div>

          <div className="footer__social-media">
            <a
              href="#"
              className="footer__icon">
              <SocialMedia />
            </a>

            <div className="footer__media-wrapper">
              <span className="footer__share-title footer__style-heading">
                share
              </span>
              <ul className="footer__lists">
                <li className="footer__item">
                <div className="footer__wrapper-icon">
                  <a
                    href="#"
                    className="footer__link"
                    target="_blank">
                    <Pinterest />
                  </a>
                  </div>
                  <span className="footer__official-site">pinterest.com</span>
                </li>

                <li className="footer__item">
                  <div className="footer__wrapper-icon">
                    <a
                      href="#"
                      className="footer__link"
                      target="_blank">
                      <FaceBook />
                    </a>
                  </div>
                  <span className="footer__official-site">facebook.com</span>
                </li>

                <li className="footer__item">
                  <div className="footer__wrapper-icon">
                    <a
                      href="#"
                      className="footer__link"
                      target="_blank">
                      <Instagram />
                    </a>
                  </div>
                  <span className="footer__official-site">instagram.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
