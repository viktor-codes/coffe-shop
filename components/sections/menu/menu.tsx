import Section from '@/components/ui/section/'
import SectionHeader from '@/components/ui/section-header'
import MenuItemCard from './menu-item'
import { MenuProps } from './menu.types'

/**
 * Menu section displaying featured items
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

			{/* Menu Grid */}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
				{items.map(item => (
					<MenuItemCard key={item.id} item={item} showPrice={showPrices} />
				))}
			</div>
		</Section>
	)
}

export default Menu
