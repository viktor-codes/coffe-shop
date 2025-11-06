import { StaticImageData } from 'next/image'

export interface ReservationProps {
	title: string
	description: string
	backgroundImage: StaticImageData
	imageAlt: string
	ctaText?: string
	ctaHref?: string
	overlayOpacity?: number
	className?: string
}
