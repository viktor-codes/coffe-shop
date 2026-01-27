import type { Metadata } from 'next'
import Navbar from '@/components/layout/navbar/navbar'
import Footer from '@/components/layout/footer/footer'
import Section from '@/components/ui/section'
import SectionHeader from '@/components/ui/section-header'
import MenuItemCard from '@/components/sections/menu/menu-item'
import { MenuTabs } from '@/components/sections/menu/menu-tabs'
import { menuItems } from '@/config/menu'
import { getFooterData } from '@/lib/footer-data'
import { MenuPageClient } from './menu-client'

export const metadata: Metadata = {
	title: 'Menu',
	description:
		'Explore our handcrafted selection of premium coffees, delightful breakfast options, and sweet desserts. All prepared with passion and the finest ingredients.',
	openGraph: {
		title: 'Kopikap Menu - Premium Coffee & Delicious Food',
		description:
			'Explore our handcrafted selection of premium coffees, breakfast options, and desserts.',
	},
}

export default function MenuPage() {
	const footerData = getFooterData()

	return (
		<>
			<Navbar />
			<main>
				<Section variant='light' spacing='lg' aria-labelledby='menu-heading'>
					{/* Section Header */}
					<SectionHeader
						title='Our Menu'
						description='Explore our handcrafted selection of premium coffees, delightful breakfast options, and sweet desserts, all prepared with passion.'
					/>

					{/* Client Component for Tabs and Filtering */}
					<MenuPageClient items={menuItems} />
				</Section>
			</main>
			<Footer {...footerData} />
		</>
	)
}
