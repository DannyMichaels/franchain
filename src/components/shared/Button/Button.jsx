import './Button.css';

export const Button = ({
  label = 'label',
  onClick = () => {
    console.log('Button clicked');
  },
  disabled = false,
  ...rest
}) => {
  return (
    <button onClick={onClick} className="Button" disabled={disabled} {...rest}>
      {label}
    </button>
  );
};
