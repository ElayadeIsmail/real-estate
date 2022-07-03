import React from 'react';
import { Button, Input, Modal } from './ui';

interface LoginFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ isOpen, onClose }) => {
    return (
        <Modal title='Login' isOpen={isOpen} onClose={onClose}>
            <form>
                <div className='flex flex-col space-y-2  w-full'>
                    <Input label='Email' placeholder='email' />
                    <Input label='Password' placeholder='password' />
                    <Button title='Login' secondary />
                </div>
            </form>
        </Modal>
    );
};
