'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GiCoffeeMug } from 'react-icons/gi'
import { IoMenu, IoClose } from 'react-icons/io5'

import { NavbarProps } from './navbar.types'
import { mainNavigation, ctaConfig } from '@/config/navigation'

const Navbar = ({
	menuItems = mainNavigation,
	showReservation = true,
	reservationHref = ctaConfig.reservation.href,
	className = '',
}: NavbarProps) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const pathname = usePathname()

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(prev => !prev)
	}

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false)
	}

	const isActiveLink = (href: string) => {
		if (href === '/') {
			return pathname === '/'
		}
		return pathname.startsWith(href)
	}

	return (
		<header className={`relative z-50 ${className}`}>
			<nav
				className='container mx-auto px-4 pt-12'
				aria-label='Main navigation'
			>
				<div className='flex justify-between items-center'>
					{/* Logo */}
					<Link
						href='/'
						className='flex gap-1.5 items-center transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm'
						aria-label='Kopikap Home'
					>
						<GiCoffeeMug size={48} className='text-dark' aria-hidden='true' />
						<span className='text-2xl font-bold text-dark'>Kopikap</span>
					</Link>

					{/* Desktop Navigation */}
					<ul className='hidden lg:flex gap-12' role='list'>
						{menuItems.map(item => {
							const isActive = isActiveLink(item.href)
							return (
								<li key={item.name}>
									<Link
										href={item.href}
										className={`
                      font-normal text-base transition-all
                      hover:text-primary hover:font-bold
                      focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm
                      ${isActive ? 'text-primary font-bold' : 'text-dark'}
                    `}
										aria-current={isActive ? 'page' : undefined}
									>
										{item.name}
									</Link>
								</li>
							)
						})}
					</ul>

					{/* Desktop CTA Button */}
					{showReservation && (
						<div className='hidden lg:block'>
							<Link
								href={reservationHref}
								className='inline-block font-semibold bg-primary px-4 py-2 text-light shadow-xs 
                         transition-transform hover:scale-105 
                         focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
							>
								Reservation
							</Link>
						</div>
					)}

					{/* Mobile Menu Button */}
					<button
						onClick={toggleMobileMenu}
						className='lg:hidden p-2 text-dark transition-transform hover:scale-110 
                     focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm'
						aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
						aria-expanded={isMobileMenuOpen}
						aria-controls='mobile-menu'
					>
						{isMobileMenuOpen ? (
							<IoClose size={40} aria-hidden='true' />
						) : (
							<IoMenu size={40} aria-hidden='true' />
						)}
					</button>
				</div>

				{/* Mobile Menu */}
				{isMobileMenuOpen && (
					<div
						id='mobile-menu'
						className='lg:hidden absolute left-0 right-0 top-full mt-4 bg-white shadow-lg border-t border-gray-200'
					>
						<ul className='flex flex-col' role='list'>
							{menuItems.map(item => {
								const isActive = isActiveLink(item.href)
								return (
									<li
										key={item.name}
										className='border-b border-gray-100 last:border-b-0'
									>
										<Link
											href={item.href}
											onClick={closeMobileMenu}
											className={`
                        block px-4 py-4 text-base transition-colors
                        hover:bg-gray-50 hover:text-primary
                        focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary
                        ${
													isActive
														? 'text-primary font-bold bg-gray-50'
														: 'text-dark'
												}
                      `}
											aria-current={isActive ? 'page' : undefined}
										>
											{item.name}
										</Link>
									</li>
								)
							})}
							{showReservation && (
								<li className='p-4'>
									<Link
										href={reservationHref}
										onClick={closeMobileMenu}
										className='block w-full text-center font-semibold bg-primary px-4 py-3 text-light 
                             shadow-xs transition-transform
                             focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
									>
										Reservation
									</Link>
								</li>
							)}
						</ul>
					</div>
				)}
			</nav>
		</header>
	)
}

export default Navbar
