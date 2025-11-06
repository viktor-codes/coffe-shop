import { StaticImageData } from 'next/image'

export interface Article {
	id: string
	slug: string
	title: string
	description: string
	image: StaticImageData
	date: string
	author?: string
	category?: string
}

export interface ArticlesProps {
	articles: Article[]
	title?: string
	showViewMore?: boolean
	viewMoreHref?: string
	className?: string
}

export interface ArticleCardProps {
	article: Article
}
