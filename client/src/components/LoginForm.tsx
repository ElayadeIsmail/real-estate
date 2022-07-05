import type { ActionFunction } from '@remix-run/node';
import { Form } from '@remix-run/react';
import React from 'react';
import { Button, Input, Modal } from './ui';

interface LoginFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData();
    console.log('FORM DATA:', formData);
};

export const LoginForm: React.FC<LoginFormProps> = ({ isOpen, onClose }) => {
    return (
        <Modal title='Login' isOpen={isOpen} onClose={onClose}>
            <Form method='post' action='/'>
                <div className='flex flex-col space-y-4  w-full'>
                    <Input label='Email' placeholder='email' />
                    <Input label='Password' placeholder='password' />
                    <Button type='submit' title='Login' primary />
                </div>
            </Form>
        </Modal>
    );
};
