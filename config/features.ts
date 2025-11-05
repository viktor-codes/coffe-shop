import { IconType } from 'react-icons'
import { GiCoffeeMug, GiCoffeeBeans } from 'react-icons/gi'
import { PiGuitarBold } from 'react-icons/pi'
import { MdOutlinePets } from 'react-icons/md'

export interface Feature {
	id: string
	icon: IconType
	title: string
	description: string
}

export const features: Feature[] = [
	{
		id: 'best-taste',
		icon: GiCoffeeMug,
		title: 'Best Taste',
		description:
			'We meticulously roast and brew the finest selection of beans to deliver an unparalleled flavor in every cup.',
	},
	{
		id: 'ethical-sourcing',
		icon: GiCoffeeBeans,
		title: 'Ethical Sourcing',
		description:
			'Our commitment to quality starts at the farm, ensuring sustainable and fair trade practices for every bean we purchase.',
	},
	{
		id: 'relaxing-vibes',
		icon: PiGuitarBold,
		title: 'Relaxing Vibes',
		description:
			'Enjoy calming acoustic music and comfortable seating, creating the perfect atmosphere for relaxation and focus.',
	},
	{
		id: 'pet-friendly',
		icon: MdOutlinePets,
		title: 'Pet-Friendly',
		description:
			'Bring your furry friends along! Our outdoor and designated indoor areas welcome all members of your family.',
	},
]
