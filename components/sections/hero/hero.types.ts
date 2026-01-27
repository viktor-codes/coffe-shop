import { StaticImageData } from 'next/image'

export interface HeroProps {
	title?: string
	description?: string
	ctaText?: string
	ctaHref?: string
	image?: StaticImageData | string
	imageAlt?: string
	className?: string
}
