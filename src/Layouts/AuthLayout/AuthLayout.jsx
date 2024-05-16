import './AuthLayout.css';
import SignUpImage from '@/assets/images/sign-up-screen.svg';
import Logo from '@/assets/images/logo.svg';

export const AuthLayout = ({
  children,
  image = SignUpImage,
  title = (
    <>
      Royalty collections,
      <br />
      simplified. It’s next level!
    </>
  ),
  subtitle = 'Revenue based invoice collection to make royalty collection as easy as...',
}) => (
  <div className="AuthLayout__container">
    <div className="inner-column">
      <div className="AuthLayout__content">
        <div className="AuthLayout__header">
          <div className="AuthLayout__header__content">
            <img src={Logo} alt="Logo" className="AuthLayout__header__logo" />
          </div>
        </div>
        <div className="AuthLayout__left">
          <div className="AuthLayout__header-spacer"></div>
          <img
            src={image}
            alt="Auth image"
            className="AuthLayout__left__image"
          />
          <h1 className="AuthLayout__left__title">{title}</h1>
          <h2 className="AuthLayout__left__subtitle">{subtitle}</h2>
        </div>
        <div className="AuthLayout__right">
          <div className="AuthLayout__header-spacer"></div>

          <div className="AuthLayout__children">{children}</div>
        </div>
      </div>
    </div>
  </div>
);
