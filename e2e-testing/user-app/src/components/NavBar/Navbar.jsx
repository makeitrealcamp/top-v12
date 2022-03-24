import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../store/AuthContext';
import {
  HeaderContainer,
  LinkProducts,
  ImageLogo,
  ContainerItems,
  ButtonLogout,
} from './NavbarStyles';

export function Navbar() {
  const history = useHistory();

  const { auth, isAuth } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem('token');
    isAuth(null);
    history.push('/');
  };

  return (
    <HeaderContainer className="Header__container">
      <div className="Header__logo-container">
        <LinkProducts className="Header__logo-path">
          <ImageLogo
            className="Header__logo-image"
            alt="Logo"
            src="https://firebasestorage.googleapis.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-LAPclUsEGF8MxYGQwcr%2Favatar.png?generation=1524086548057075&alt=media"
          />
          <Link to="/products" className="Header__link-products">
            Products
          </Link>
        </LinkProducts>
      </div>
      <div className="Header__nav">
        {auth ? (
          <ContainerItems className="Header__nav-items">
            <li className="Header__nav-item">
              <Link to="/profile" className="Header__nav-profile">
                Profile
              </Link>
            </li>
            <li className="Header__nav-item">
              <ButtonLogout
                onClick={handleLogout}
                className="Header__nav-logout"
              >
                Logout
              </ButtonLogout>
            </li>
          </ContainerItems>
        ) : (
          <ContainerItems className="Header__nav-items">
            <li className="Header__nav-item">
              <Link to="/" className="Header__nav-signin">
                Sign In
              </Link>
            </li>
          </ContainerItems>
        )}
      </div>
    </HeaderContainer>
  );
}
