import { useState } from 'react';
import { Input } from '@/components/shared';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const SignupForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    businessName: Yup.string().required('Business name is required'),
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
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        businessName: '',
        workEmail: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {({ isSubmitting, touched, errors }) => (
        <Form>
          <Input
            label="First name"
            name="firstName"
            error={touched && errors.firstName}
          />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
