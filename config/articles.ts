import { StaticImageData } from 'next/image'
import articleImage1 from '@/assets/article-1.webp'
import articleImage2 from '@/assets/article-2.webp'
import articleImage3 from '@/assets/article-3.webp'

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

export const articles: Article[] = [
	{
		id: 'pour-over-art',
		slug: 'the-art-of-perfect-pour-over',
		title: 'The Art of the Perfect Pour-Over',
		description:
			'Master the delicate technique of pour-over coffee for an exceptional, clean cup every morning.',
		image: articleImage1,
		date: '2024-10-28',
		category: 'Brewing',
	},
	{
		id: 'ethiopia-coffee',
		slug: 'ethiopia-birthplace-of-coffee',
		title: 'Ethiopia: The Birthplace of Coffee',
		description:
			'Explore the history, origins, and unique flavor profiles of beans sourced from the ancient highlands.',
		image: articleImage2,
		date: '2024-10-15',
		category: 'Origins',
	},
	{
		id: 'coffee-shop-workspaces',
		slug: 'why-coffee-shops-best-workspaces',
		title: 'Why Coffee Shops Are the Best Workspaces',
		description:
			'We break down the science behind why a cozy cafe setting boosts focus and creativity.',
		image: articleImage3,
		date: '2024-09-30',
		category: 'Lifestyle',
	},
]
