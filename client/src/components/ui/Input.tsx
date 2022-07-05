import type { InputHTMLAttributes } from 'react';
import React from 'react';
import { Label } from './Label';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    className?: string;
};

export const Input: React.FC<InputProps> = ({
    label,
    className = '',
    ...rest
}) => {
    return (
        <div className={`flex flex-col ${className}`}>
            <Label title={label} />
            <input
                className='h-11 px-3 w-full rounded-lg border border-gray150 bg-white text-sm placeholder:text-gray800 focus:border-2 focus:border-primary shadow-sm focus:outline-none'
                {...rest}
            />
        </div>
    );
};
