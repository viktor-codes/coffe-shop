import Hero from '@/sections/hero'
import Navbar from '@/components/navbar'
import Features from '@/sections/features'
import Menu from '@/sections/menu'
import About from '@/sections/about'
import Testimonials from '@/sections/testimonials'

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<Features />
			<Menu />
			<About />
			<Testimonials />
		</>
	)
}
