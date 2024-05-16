import './AuthLayout.css';
import SignUpImage from '@/assets/images/sign-up-screen.svg';
import Logo from '@/assets/images/logo.svg';
import { NavLink, MotionViewport } from '@/components/shared';
import { motion } from 'framer-motion';
import { varFade } from '@/animate/fade';

export const AuthLayout = ({
  children,
  page = 'signup',
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
  <MotionViewport>
    <div className="gradient-background"></div>
    <div className="AuthLayout__container">
      <div className="inner-column">
        <div className="AuthLayout__content">
          <div className="AuthLayout__header">
            <div className="AuthLayout__header__content">
              <div className="AuthLayout__header__left">
                <motion.img
                  animate={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  src={Logo}
                  alt="Logo"
                  className="AuthLayout__header__logo"
                />
              </div>

              <motion.div
                className="AuthLayout__header__right"
                variants={
                  varFade({
                    durationIn: 1.2,
                  }).inRight
                }>
                <NavLink
                  title={page === 'signup' ? 'Log in' : 'Sign up'}
                  to={page === 'signup' ? '/auth/login' : '/auth/signup'}
                />
              </motion.div>
            </div>
          </div>
          <div className="AuthLayout__left">
            <div className="AuthLayout__header-spacer"></div>
            <motion.img
              variants={
                varFade({
                  durationIn: 1.2,
                }).inLeft
              }
              src={image}
              alt="Auth image"
              className="AuthLayout__left__image"
            />
            <motion.div
              variants={
                varFade({
                  durationIn: 1.2,
                }).inUp
              }>
              <h1 className="AuthLayout__left__title">{title}</h1>
              <h2 className="AuthLayout__left__subtitle">{subtitle}</h2>
            </motion.div>
          </div>
          <div className="AuthLayout__right">
            <div className="AuthLayout__header-spacer"></div>

            <motion.div
              className="AuthLayout__children"
              variants={
                varFade({
                  // 1 second
                  durationIn: 1.2,
                }).inRight
              }>
              {children}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </MotionViewport>
);
