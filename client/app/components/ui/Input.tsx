import type { InputHTMLAttributes } from 'react';
import React from 'react';
import { Label } from './Label';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
};

export const Input: React.FC<InputProps> = ({ label, ...rest }) => {
    return (
        <div className='flex flex-col'>
            <Label title={label} />
            <input
                className='h-11 px-3 w-full rounded-lg border border-gray50 bg-white focus:border-dark focus:outline-none'
                {...rest}
            />
        </div>
    );
};
