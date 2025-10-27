import Hero from '@/sections/hero'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Features from '@/sections/features'
import Menu from '@/sections/menu'

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<Features />
			<Menu />
		</>
	)
}
