import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	// 스타일 종류
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  // 크기
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  icon?: string;
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  icon,
  className = '',
	// html 스타일 전송
  ...props 
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900',
    outline: 'border border-gray-300 hover:border-gray-400 text-gray-700 bg-white hover:bg-gray-50',
    ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon && <i className={`${icon} mr-2`}></i>}
      {children}
    </button>
  );
}