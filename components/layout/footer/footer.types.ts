export interface ContactInfo {
	label: string
	value: string
	href?: string
}

export interface OpeningHour {
	day: string
	open: string | null
	close: string | null
	closed?: boolean
}

export interface Article {
	title: string
	date: string
	slug: string
}

export interface FooterProps {
	contactInfo: ContactInfo[]
	openingHours: OpeningHour[]
	featuredArticles: Article[]
	siteLinks: { name: string; href: string }[]
	className?: string
}
