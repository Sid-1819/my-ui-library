// src/components/Button.tsx

import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  const buttonClass = classNames('btn', 'bg-blue-500', 'text-white', 'p-2', 'rounded', 'cursor-pointer');

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
