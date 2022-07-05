import { Layout } from '~/components/layout';

export default function Index() {
    return (
        <>
            <Layout />
            <div className='container'>
                <div className='m-10'>
                    {/* CARD COMPONENT */}
                    {/* <div className='grid grid-cols-4 gap-4'>
                        <div className='w-full h-full bg-red-700'>
                            <Link to='/'>
                                <div>
                                    <h1>Card 1</h1>
                                </div>
                            </Link>
                        </div>
                        <div className='w-full h-full'>HELLO WORLD</div>
                        <div className='w-full h-full'>HELLO WORLD</div>
                        <div className='w-full h-full'>HELLO WORLD</div>
                        <div className='w-full h-full'>HELLO WORLD</div>
                        <div className='w-full h-full'>HELLO WORLD</div>
                        <div className='w-full h-full'>HELLO WORLD</div>
                    </div> */}
                    {/* END CARD */}
                </div>
            </div>
        </>
    );
}
