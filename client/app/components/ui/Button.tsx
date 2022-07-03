import clsx from 'clsx';
import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    primary?: boolean;
    outline?: boolean;
    secondary?: boolean;
    title: string;
};

export const Button = ({
    primary = false,
    secondary = false,
    outline = false,
    title,
    className = '',
    ...rest
}: ButtonProps) => {
    return (
        <button
            className={clsx(`${className} rounded py-2 px-4`, {
                'bg-primary text-white': primary,
                'border-light border bg-white text-dark': outline,
                'bg-secondary text-dark': secondary,
            })}
            {...rest}
        >
            {title}
        </button>
    );
};
