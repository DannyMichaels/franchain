import { useRef, useState } from 'react';
import { Field } from 'formik';
import './Input.css';

export const Input = ({
  type = 'text',
  label = 'Label',
  error,
  name,
  selectProps = null,
  ...rest
}) => {
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);
  const hasSelectComponent = !!selectProps;

  return (
    <div className="Input__wrapper">
      <label htmlFor={name} className="Input__label">
        {label}
      </label>
      <div
        className={`Input__container ${
          hasSelectComponent ? 'Input__container--with-select' : ''
        }
          ${focused ? 'Input__container--focused' : ''}
        `}
        onBlur={() => setFocused(false)}>
        <div
          style={{ zIndex: 1, height: '100%' }}
          onClick={() => {
            inputRef.current.focus();
            setFocused(true);
          }}>
          <Field
            innerRef={inputRef}
            type={type}
            name={name}
            onBlur={() => setFocused(false)}
            className={
              'Input__field' +
              (hasSelectComponent ? ' Input__field--with-select' : '')
            }
            {...rest}
          />
        </div>

        {hasSelectComponent && (
          <div className="Input__select__container">
            <Field
              as="select"
              className="Input__select"
              name={selectProps.name}>
              {selectProps?.options?.map?.((option, index) => {
                return (
                  <option key={index} value={option.value}>
                    {option.IconComponent
                      ? { ...option.IconComponent() }
                      : null}
                    {option.IconComponent ? ' ' : ''}
                    {option.label}
                  </option>
                );
              })}
            </Field>
          </div>
        )}
      </div>

      <div
        className={`Input__error ${
          error ? ' Input__error--visible' : 'Input__error--hidden'
        }`}>
        {error}
      </div>
    </div>
  );
};
