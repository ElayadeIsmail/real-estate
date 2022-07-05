import { Button, Input } from '~/components/ui';

const Login = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center bg-gray50'>
            <div className='w-full max-w-[568px]  transform overflow-hidden rounded-2xl bg-white shadow-card'>
                <header className='relative px-6 w-full h-16 flex items-center justify-center border-b border-[rgb(235, 235, 235)]'>
                    <h3 className='font-semibold text-3xl text-primaryDark'>
                        Login
                    </h3>
                </header>
                <div className='flex items-center justify-center mt-4'>
                    <img
                        src='/assets/logo.png'
                        alt='logo'
                        className='w-24 object-contain'
                    />
                </div>
                <div className='p-6'>
                    <form method='post' action='/'>
                        <div className='flex flex-col space-y-2  w-full'>
                            <Input label='Email' placeholder='email' />
                            <Input label='Password' placeholder='password' />
                            <Button type='submit' title='Login' primary />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
