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
                    <div className='flex space-x-3'>
                        <Input
                            className='flex-1'
                            label='FirstName'
                            placeholder='firstname'
                        />
                        <Input
                            className='flex-1'
                            label='LastName'
                            placeholder='lastname'
                        />
                    </div>
                    <Input label='Email' placeholder='email' />
                    <Input label='Phone' placeholder='phone' />
                    <Input label='Password' placeholder='password' />
                    <Input
                        label='Confirmed Password'
                        placeholder='confirmed password'
                    />
                    <Button title='Register' primary />
                </div>
            </form>
        </Modal>
    );
};
