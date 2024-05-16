import './SignupForm.css';
import { useState } from 'react';
import { Input, Button } from '@/components/shared';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';

export const SignupForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [touchedFields, setTouchedFields] = useState({});

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    businessName: Yup.string().required('Business name is required'),
    businessLocation: Yup.string()
      .required('Business location is required')
      .default('US'),
    workEmail: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    password: Yup.string()
      .min(12, 'Password must be at least 12 characters')
      .required('Password is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitted(true);
    setTimeout(() => {
      alert(
        JSON.stringify(
          {
            ...values,
            password: values.password.replace(/./g, '*'),
          },
          null,
          2
        )
      );
      setSubmitting(false);
    }, 400);
  };

  const handleFieldBlur = (fieldName) => {
    setTouchedFields({ ...touchedFields, [fieldName]: true });
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        businessName: '',
        businessLocation: 'US',
        workEmail: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {({ isSubmitting, errors }) => {
        return (
          <Form className="SignupForm__container">
            <div className="SignupForm__row">
              <Input
                label="First name"
                name="firstName"
                error={touchedFields.firstName && errors.firstName}
                onBlur={() => handleFieldBlur('firstName')}
              />

              <Input
                label="Last name"
                name="lastName"
                error={touchedFields.lastName && errors.lastName}
                onBlur={() => handleFieldBlur('lastName')}
              />
            </div>

            <Input
              label="Business name and HQ location"
              name="businessName"
              onBlur={() => handleFieldBlur('businessName')}
              error={touchedFields.businessName && errors.businessName}
            />

            <Input
              label="Work email"
              name="workEmail"
              error={touchedFields.workEmail && errors.workEmail}
              onBlur={() => handleFieldBlur('workEmail')}
            />

            <Input
              label="Password"
              type="password"
              name="password"
              error={touchedFields.password && errors.password}
              onFocus={() => handleFieldBlur('password')}
              onBlur={() => handleFieldBlur('password')}
            />

            <div className="SignupForm__submit">
              <Button
                type="submit"
                disabled={
                  Object.keys(touchedFields).length < 1 ||
                  Object.keys(errors).length > 0
                }
                label={isSubmitting ? 'Submitting...' : 'Sign up'}
              />
            </div>

            <div className="SignupForm__terms">
              By clicking “Start Application“, I agree to Mercury’s&nbsp;
              <a href="#">Terms of Use</a>, <a href="#">Privacy Policy</a> and
              to receive electronic communication about my accounts and services
              per&nbsp;
              <a href="#">Mercury’s Electronic Communications Agreement</a>, and
              acknowledge receipt of&nbsp;
              <a href="#">Mercury’s USA PATRIOT Act disclosure</a>.
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
