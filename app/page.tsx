import Hero from '@/components/sections/hero/hero'
import Navbar from '@/components/layout/navbar/navbar'
import Footer from '@/components/layout/footer/footer'
import Features from '@/components/sections/features/features'
import Menu from '@/components/sections/menu/menu'
import About from '@/components/sections/about/about'
import Testimonials from '@/components/sections/testimonials/testimonials'
import Reservation from '@/components/sections/reservation/reservation'
import Articles from '@/components/sections/articles/articles'

import aboutImage from '@/assets/about.webp'

import { features } from '@/config/features'
import { menuItems } from '@/config/menu'

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			{/* Features Section */}
			<Features features={features} />
			<Menu items={menuItems} />
			<About
				title='Our Story'
				description='...'
				image={aboutImage}
				imageAlt='Coffee machine'
				founded={2010}
			/>
			<Testimonials />
			<Reservation />
			<Articles />
			<Footer />
		</>
	)
}
