import clsx from 'clsx';
import React from 'react';
import { Close, Error, Info, Success, Warning } from '../../icons';

interface AlertProps {
    type: 'Error' | 'Success' | 'Warning' | 'Info';
    message: string;
    onClose?: () => void;
}

const getIcon = (type: AlertProps['type']) => {
    switch (type) {
        case 'Error':
            return <Error />;
        case 'Success':
            return <Success />;
        case 'Warning':
            return <Warning />;
        case 'Info':
            return <Info />;
    }
};

export const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
    return (
        <div
            className={clsx(
                'rounded-md font-semibold w-full flex items-center justify-between p-3',
                {
                    'text-red-700 bg-red-100': type === 'Error',
                    'text-green-700 bg-green-100': type === 'Success',
                    'text-yellow-700 bg-yellow-100': type === 'Warning',
                    'text-blue-700 bg-blue-100': type === 'Info',
                },
            )}
            role='alert'
        >
            <div className='flex items-center'>
                {getIcon(type)} <span className='ml-4'>{message}</span>
            </div>
            {onClose && (
                <button
                    className='border-none outline-none focus:outline-none focus:border-none p-1'
                    onClick={onClose}
                >
                    <Close />{' '}
                </button>
            )}
        </div>
    );
};
