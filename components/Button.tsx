import React from 'react';
import Image from 'next/image';

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
};

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center px-4 py-2 rounded-full font-semibold text-sm gap-2 
      ${variant} ${full ? 'w-full' : 'w-auto'} transition duration-200`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={20} height={20} />}
      {title}
    </button>
  );
};

export default Button;
