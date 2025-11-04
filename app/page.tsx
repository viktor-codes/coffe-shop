import Hero from '@/components/sections/hero/hero'
import Navbar from '@/components/layout/navbar/navbar'
import Footer from '@/components/layout/footer/footer'
import Features from '@/components/sections/features/features'
import Menu from '@/components/sections/menu/menu'
import About from '@/components/sections/about/about'
import Testimonials from '@/components/sections/testimonials/testimonials'
import Reservation from '@/components/sections/reservation/reservation'
import Articles from '@/components/sections/articles/articles'

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<Features />
			<Menu />
			<About />
			<Testimonials />
			<Reservation />
			<Articles />
			<Footer />
		</>
	)
}
