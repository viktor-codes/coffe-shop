import type { Metadata } from 'next'
import Navbar from '@/components/layout/navbar/navbar'
import Footer from '@/components/layout/footer/footer'
import About from '@/components/sections/about/about'
import { siteConfig } from '@/config/site'
import aboutImage from '@/assets/about.webp'
import { getFooterData } from '@/lib/footer-data'

export const metadata: Metadata = {
	title: 'About Us',
	description:
		'Learn about Kopikap\'s story, our passion for coffee, and our commitment to creating the perfect cozy atmosphere for every guest.',
	openGraph: {
		title: 'About Kopikap - Our Story',
		description:
			'Learn about Kopikap\'s story, our passion for coffee, and our commitment to creating the perfect cozy atmosphere.',
	},
}

export default function AboutPage() {
	const footerData = getFooterData()

	return (
		<>
			<Navbar />
			<main>
				<About
					title='Our Story'
					description={`Welcome to Kopikap, where coffee meets community. Founded in ${siteConfig.founded}, we've been serving exceptional coffee and creating memorable experiences for over a decade.

Our journey began with a simple belief: that great coffee should be accessible, and every cup should tell a story. We source our beans from sustainable farms around the world, ensuring not just quality, but also supporting communities that grow our favorite beverage.

At Kopikap, we're more than just a coffee shop – we're a gathering place. Whether you're starting your day with a perfect espresso, catching up with friends over lattes, or finding your focus in our cozy corners, we're here to make every moment special.

Our team of skilled baristas brings passion and expertise to every cup, while our kitchen crafts fresh pastries and light meals daily. We believe in the power of good food, great coffee, and genuine hospitality.

Join us and become part of the Kopikap family.`}
					image={aboutImage}
					imageAlt='Kopikap coffee shop interior with cozy atmosphere'
					founded={siteConfig.founded}
					ctaText='Visit Us'
					ctaHref='/contact'
				/>
			</main>
			<Footer {...footerData} />
		</>
	)
}
