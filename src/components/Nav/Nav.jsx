import './Nav.scss';

export const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__content">
        <div className="container">
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#"
                className="nav__link is-active">
                Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#"
                className="nav__link">
                About us
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#"
                className="nav__link">
                Contact us
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#"
                className="nav__link">
                checkout
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#"
                className="nav__link">
                account
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
