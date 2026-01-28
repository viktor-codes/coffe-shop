import Section from '@/components/ui/section/'
import SectionHeader from '@/components/ui/section-header'
import MenuCarousel from './menu-carousel'
import { MenuProps } from './menu.types'

/**
 * Menu section displaying featured items in a carousel
 *
 * @example
 * <Menu items={menuItems} title="Our Menu" showPrices />
 */
const Menu = ({
	items,
	title = 'Taste the Best Menu',
	description = 'Explore our handcrafted selection of premium coffees, delightful pastries, and savory bites, all prepared with passion.',
	showPrices = false,
	className = '',
}: MenuProps) => {
	return (
		<Section
			variant='light'
			spacing='lg'
			className={className}
			aria-labelledby='menu-heading'
		>
			{/* Section Header */}
			<SectionHeader title={title} description={description} />

			{/* Menu Carousel */}
			<MenuCarousel items={items} showPrice={showPrices} />
		</Section>
	)
}

export default Menu
