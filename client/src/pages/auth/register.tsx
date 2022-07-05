import { Button, Input } from '~/components/ui';

const Register = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center bg-gray50'>
            <div className='w-full max-w-[568px]  transform overflow-hidden rounded-2xl bg-white shadow-card'>
                <header className='relative px-6 w-full h-16 flex items-center justify-center border-b border-[rgb(235, 235, 235)]'>
                    <h3 className='font-semibold text-3xl text-primaryDark'>
                        Register
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
                </div>
            </div>
        </div>
    );
};

export default Register;
