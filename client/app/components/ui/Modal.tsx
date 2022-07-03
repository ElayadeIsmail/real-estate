import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
}

export const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    title,
    children,
}) => {
    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black/30' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full w-full  p-4 items-center justify-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel className='w-full max-w-[568px]  transform overflow-hidden rounded-2xl bg-white shadow-xl transition-all'>
                                <Dialog.Title as={Fragment}>
                                    <header className='relative px-6 w-full h-16 flex items-center justify-center border-b border-[rgb(235, 235, 235)]'>
                                        <button
                                            onClick={onClose}
                                            className='absolute top-5 left-6'
                                        >
                                            X
                                        </button>
                                        <h1 className='font-semibold text-base'>
                                            {title}
                                        </h1>
                                    </header>
                                </Dialog.Title>
                                <div className='p-6'>{children}</div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};
