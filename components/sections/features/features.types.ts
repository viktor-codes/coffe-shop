import { IconType } from 'react-icons'

export interface Feature {
	id: string
	icon: IconType
	title: string
	description: string
}

export interface FeaturesProps {
	features: Feature[]
	title?: string
	description?: string
	className?: string
}

export interface FeatureCardProps {
	feature: Feature
}
