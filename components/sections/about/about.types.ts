import { StaticImageData } from 'next/image'

export interface AboutProps {
	title: string
	description: string
	image: StaticImageData
	imageAlt: string
	ctaText?: string
	ctaHref?: string
	founded?: number
	imageOnLeft?: boolean
	className?: string
}
