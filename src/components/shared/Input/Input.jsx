import { Field } from 'formik';
import './Input.css';

export const Input = ({
  type = 'text',
  label = 'Label',
  error,
  name,
  ...rest
}) => {
  return (
    <div className="Input__container">
      <label htmlFor={name} className="Input__label">
        {label}
      </label>
      <Field type={type} name={name} className="Input__field" {...rest} />

      <div
        className={`Input__error ${
          error ? ' Input__error--visible' : 'Input__error--hidden'
        }`}>
        {error}
      </div>
    </div>
  );
};
