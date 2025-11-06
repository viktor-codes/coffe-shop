export interface NavItem {
	name: string
	href: string
	external?: boolean
}

export interface NavbarProps {
	menuItems?: NavItem[]
	showReservation?: boolean
	reservationHref?: string
	className?: string
}
