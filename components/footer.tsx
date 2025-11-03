import { GiCoffeeMug } from 'react-icons/gi'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FOOTER_LINKS = [
	{
		title: 'Site Links',
		links: [
			'About Hilink',
			'Press Releases',
			'Environment',
			'Jobs',
			'Privacy Policy',
			'Contact Us',
		],
	},
]

const OPENING_HOURS = [
	{
		day: 'Monday',
		open: '7:00 am',
		close: '5:00 pm',
	},
	{
		day: 'Tuesday',
		open: '7:00 am',
		close: '5:00 pm',
	},
	{
		day: 'Wednesday',
		open: '7:00 am',
		close: '5:00 pm',
	},
	{
		day: 'Thursday',
		open: '7:00 am',
		close: '5:00 pm',
	},
	{
		day: 'Friday',
		open: '7:00 am',
		close: '5:00 pm',
	},
	{
		day: 'Saturday',
		open: '8:00 am',
		close: '2:00 pm',
	},
	{
		day: 'Sunday',
		open: null,
		close: null,
		closed: true,
	},
]

const FOOTER_CONTACT_INFO = {
	title: 'Contact Us',
	links: [
		{ label: 'Address', value: '18 West Buffalo St Dublin, Ireland N39 R585' },
		{ label: 'Email', value: 'hilink@akinthil.com' },
		{ label: 'Phone', value: '123-456-7890' },
	],
}

const MUST_READ_ARTICLES = {
	title: 'Must Read Articles',
	articles: [
		{
			title: 'How to Brew the Perfect Cup of Coffee at Home',
			date: 'October 10, 2024',
		},
		{
			title: '5 Secrets Behind Great Latte Art',
			date: 'September 22, 2024',
		},
		{
			title: 'Why Freshly Roasted Beans Make All the Difference',
			date: 'August 18, 2024',
		},
		{
			title: 'The Journey of a Coffee Bean — From Farm to Cup',
			date: 'July 30, 2024',
		},
	],
}

const Footer = () => {
	return (
		<footer className='bg-dark py-20'>
			<div className='2xl:max-w-7xl container mx-auto flex flex-col w-full gap-14'>
				<div className='flex flex-wrap justify-between gap-10 px-4'>
					<div className='flex flex-col gap-5 max-w-3xl order-last md:order-first'>
						<FooterColumn title={FOOTER_CONTACT_INFO.title} className=''>
							{FOOTER_CONTACT_INFO.links.map(link => (
								<Link
									href='/'
									key={link.label}
									className='flex gap-4 md:flex-col lg:flex-row'
								>
									<p className='whitespace-nowrap'>{link.label}:</p>
									<p className='text-base text-light/70 whitespace-nowrap'>
										{link.value}
									</p>
								</Link>
							))}
						</FooterColumn>

						<div className='border-b border-light/30' />
						<Link
							href='/'
							className='flex gap-1.5 justify-center items-center cursor-pointer text-light'
						>
							<GiCoffeeMug size={48} />
							<p className='text-2xl font-bold '>Kopikap</p>
						</Link>
					</div>

					{/* Opening Hours */}
					<FooterColumn title='Opening Hours' className=''>
						<ul className='flex flex-col gap-2 text-sm text-light/70'>
							{OPENING_HOURS.map(({ day, open, close, closed }) => (
								<li key={day} className='flex justify-between w-56 pb-1'>
									<span className='uppercase font-semibold'>{day}</span>
									<span>{closed ? 'Closed' : `${open} – ${close}`}</span>
								</li>
							))}
						</ul>
					</FooterColumn>

					{/* Must Read Articles */}
					<FooterColumn title={MUST_READ_ARTICLES.title}>
						<ul className='flex flex-col gap-3 text-light/70'>
							{MUST_READ_ARTICLES.articles.map(article => (
								<li
									key={article.title}
									className='border-b border-light/10 pb-1'
								>
									<Link
										href='/'
										className='hover:text-primary transition-colors font-medium block'
									>
										{article.title}
									</Link>
									<p className='text-xs italic text-primary'>{article.date}</p>
								</li>
							))}
						</ul>
					</FooterColumn>

					{FOOTER_LINKS.map(columns => (
						<FooterColumn title={columns.title} key={columns.title}>
							<ul className='regular-14 flex flex-col gap-4 text-gray-30'>
								{columns.links.map(link => (
									<Link href='/' key={link}>
										{link}
									</Link>
								))}
							</ul>
						</FooterColumn>
					))}
				</div>
				<div className='border bg-gray-20' />
				<p className='regular-14 w-full text-center text-light/70'>
					2025 Kopikap | All rights reserved
				</p>
			</div>
		</footer>
	)
}

type FooterColumnProps = {
	title: string
	className?: string
	children: React.ReactNode
}

const FooterColumn = ({ title, className, children }: FooterColumnProps) => {
	return (
		<div className={`flex flex-col gap-5 ${className}`}>
			<h4 className='font-bold uppercase whitespace-nowrap'>{title}</h4>
			{children}
		</div>
	)
}

export default Footer
