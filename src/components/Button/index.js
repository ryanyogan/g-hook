import React from 'react';

import './style.css';

const Button = ({
  children,
  className,
  color = 'black',
  type = 'button',
  ...props
}) => (
  <button
    className={`${className} Button Button_${color}`}
    type={type}
    {...props}
  >
    {children}
  </button>
);

const ButtonUnobtrusive = ({
  children,
  className,
  type = 'button',
  ...props
}) => (
  <Button className={`${className} Button_unobtrusive`} type={type} {...props}>
    {children}
  </Button>
);

export { ButtonUnobtrusive };

export default Button;
