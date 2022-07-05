import { useState } from 'react';
import { LoginForm } from '../LoginForm';
import { RegisterForm } from '../RegisterForm';
import { Button } from '../ui';

export const Header = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    return (
        <header className='container h-14 flex items-center justify-between border-gray100 border-b'>
            <div className='relative'>
                <img alt='logo' src='/assets/logo.svg' className='w-12 h-12' />
            </div>
            {/* NEED TO ADD SOME THING HERE */}
            <div className='flex space-x-3'>
                <Button
                    onClick={() => setIsRegisterOpen(true)}
                    outline
                    title='Register'
                />
                <Button
                    onClick={() => setIsLoginOpen(true)}
                    primary
                    title='Login'
                />
            </div>
            <RegisterForm
                isOpen={isRegisterOpen}
                onClose={() => setIsRegisterOpen(false)}
            />
            <LoginForm
                isOpen={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
            />
        </header>
    );
};
