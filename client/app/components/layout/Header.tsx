import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Link } from '@remix-run/react';
export const Header = () => {
	return (
		<header className='border-b p-4'>
			<div className='container flex items-center justify-between'>
				{/* log0 */}
				<Link to={"/"}>
					<figure className='h-8 w-8 bg-secondary-500'>
						{/* <img src="" alt="" className="" /> */}
					</figure>
				</Link>
				{/* search box*/}
				<div className='flex gap-2 divide-x border px-4 py-2 rounded-full shadow-md hover:shadow-lg duration-200'>
					<button className='text-sm font-medium'>Anywhere</button>
					<button className='text-sm font-medium pl-2'>Any week</button>
					<button className='text-sm font-medium text-black/50 pl-2'>
						Add guests
					</button>
					<button className='w-8 h-8 flex justify-center items-center rounded-full bg-gradient-to-t from-primary-500 to-secondary-500 hover:to-secondary-400 text-white'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
							className='w-5 h-5'>
							<path
								fillRule='evenodd'
								d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
								clipRule='evenodd'
							/>
						</svg>
					</button>
				</div>
				{/* profile | login*/}
				<div className=''>
					<DropdownMenu.Root>
						<DropdownMenu.Trigger className='outline-none'>
							<button className='flex items-center gap-2 py-2 px-4 border rounded-full text-black/75 hover:shadow-md duration-200'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
									/>
								</svg>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='currentColor'
									className='w-7 h-7'>
									<path
										fillRule='evenodd'
										d='M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
										clipRule='evenodd'
									/>
								</svg>
							</button>
						</DropdownMenu.Trigger>

						<DropdownMenu.Portal>
							<DropdownMenu.Content className='w-44 bg-white py-4 shadow-md text-sm rounded-lg'>
								<DropdownMenu.Item className='outline-none hover:bg-black/5 px-4 py-2.5 cursor-pointer '>
									<Link to={'/sign-up'}>Sign up</Link>
								</DropdownMenu.Item>
								<DropdownMenu.Item className='outline-none hover:bg-black/5 px-4 py-2.5 cursor-pointer '>
									<Link to={'/login'}>Log in</Link>
								</DropdownMenu.Item>

								<DropdownMenu.Separator className='h-[1px] bg-slate-100' />
								<DropdownMenu.Item className='outline-none hover:bg-black/5 px-4 py-2.5 cursor-pointer '>
									Host your home
								</DropdownMenu.Item>
								<DropdownMenu.Item className='outline-none hover:bg-black/5 px-4 py-2.5 cursor-pointer '>
									Host an experience
								</DropdownMenu.Item>
								<DropdownMenu.Item className='outline-none hover:bg-black/5 px-4 py-2.5 cursor-pointer '>
									Help
								</DropdownMenu.Item>
							</DropdownMenu.Content>
						</DropdownMenu.Portal>
					</DropdownMenu.Root>
				</div>
			</div>
		</header>
	);
};
