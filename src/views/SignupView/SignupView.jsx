import './SignupView.css';
import { SignupForm } from '@/components/forms';

export const SignupView = () => {
  return (
    <div className="SignupView__container">
      <div className="SignupView__title__container">
        <h1 className="SignupView__title">Get started with Franchain</h1>
        <h2 className="SignupView__subtitle">
          Create an account in 5 minutes.
        </h2>
      </div>

      <section className="SignupView__form">
        <SignupForm />
      </section>
    </div>
  );
};
