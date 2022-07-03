import React from 'react';
import { Button, Input, Modal } from './ui';

interface RegisterFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
    isOpen,
    onClose,
}) => {
    return (
        <Modal title='Register' isOpen={isOpen} onClose={onClose}>
            <form>
                <div className='flex flex-col space-y-2  w-full'>
                    <Input label='FirstName' placeholder='firstname' />
                    <Input label='LastName' placeholder='lastname' />
                    <Input label='Email' placeholder='email' />
                    <Input label='Phone' placeholder='phone' />
                    <Input label='Password' placeholder='password' />
                    <Input
                        label='Confirmed Password'
                        placeholder='confirmed password'
                    />
                    <Button title='Register' secondary />
                </div>
            </form>
        </Modal>
    );
};
