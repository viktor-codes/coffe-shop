// components/layout/Footer/Footer.tsx
import Link from 'next/link'
import { GiCoffeeMug } from 'react-icons/gi'
import Container from '@/components/ui/container'
import FooterColumn from './footer-column'
import { FooterProps } from './footer.types'

/**
 * Professional footer with contact info, hours, and links
 *
 * @example
 * <Footer
 *   contactInfo={contactInfo}
 *   openingHours={openingHours}
 *   featuredArticles={articles}
 *   siteLinks={links}
 * />
 */
const Footer = ({
	contactInfo,
	openingHours,
	featuredArticles,
	siteLinks,
	className = '',
}: FooterProps) => {
	const currentYear = new Date().getFullYear()

	return (
		<footer className={`bg-dark py-16 lg:py-20 ${className}`}>
			<Container maxWidth='7xl'>
				<div className='flex flex-col gap-14'>
					{/* Main Footer Content */}
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12'>
						{/* Contact Information + Logo */}
						<div className='flex flex-col gap-8 lg:col-span-1'>
							{/* Contact Info */}
							<FooterColumn title='Contact Us'>
								<address className='not-italic flex flex-col gap-3'>
									{contactInfo.map(info => (
										<div
											key={info.label}
											className='flex flex-col sm:flex-row gap-2'
										>
											<span className='text-light font-semibold whitespace-nowrap'>
												{info.label}:
											</span>
											{info.href ? (
												<Link
													href={info.href}
													className='text-light/70 hover:text-primary transition-colors'
												>
													{info.value}
												</Link>
											) : (
												<span className='text-light/70'>{info.value}</span>
											)}
										</div>
									))}
								</address>
							</FooterColumn>

							{/* Divider */}
							<div className='border-b border-light/20' />

							{/* Logo */}
							<Link
								href='/'
								className='flex gap-2 items-center text-light hover:text-primary transition-colors group'
								aria-label='Kopikap Home'
							>
								<GiCoffeeMug
									size={48}
									className='group-hover:scale-110 transition-transform'
								/>
								<span className='text-2xl font-bold'>Kopikap</span>
							</Link>
						</div>

						{/* Opening Hours */}
						<FooterColumn title='Opening Hours'>
							<ul className='flex flex-col gap-2 text-sm'>
								{openingHours.map(({ day, open, close, closed }) => (
									<li
										key={day}
										className='flex justify-between pb-2 border-b border-light/10 last:border-b-0'
									>
										<span className='uppercase font-semibold text-light'>
											{day}
										</span>
										<span className='text-light/70'>
											{closed ? 'Closed' : `${open} – ${close}`}
										</span>
									</li>
								))}
							</ul>
						</FooterColumn>

						{/* Featured Articles */}
						<FooterColumn title='Must Read Articles'>
							<ul className='flex flex-col gap-4'>
								{featuredArticles.map(article => (
									<li
										key={article.slug}
										className='pb-3 border-b border-light/10 last:border-b-0'
									>
										<Link
											href={`/articles/${article.slug}`}
											className='hover:text-primary transition-colors font-medium block text-light/90'
										>
											{article.title}
										</Link>
										<time
											dateTime={article.date}
											className='text-xs italic text-primary mt-1 block'
										>
											{new Date(article.date).toLocaleDateString('en-US', {
												year: 'numeric',
												month: 'long',
												day: 'numeric',
											})}
										</time>
									</li>
								))}
							</ul>
						</FooterColumn>

						{/* Site Links */}
						<FooterColumn title='Quick Links'>
							<nav aria-label='Footer navigation'>
								<ul className='flex flex-col gap-3'>
									{siteLinks.map(link => (
										<li key={link.name}>
											<Link
												href={link.href}
												className='text-light/70 hover:text-primary transition-colors inline-block'
											>
												{link.name}
											</Link>
										</li>
									))}
								</ul>
							</nav>
						</FooterColumn>
					</div>

					{/* Divider */}
					<div className='border-t border-light/20' />

					{/* Copyright */}
					<p className='text-center text-light/60 text-sm'>
						© {currentYear} Kopikap. All rights reserved.
					</p>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
