// components/sections/Articles/ArticleCard.tsx
import Image from 'next/image'
import Link from 'next/link'
import { ArticleCardProps } from './articles.types'
import { cn } from '@/lib/utils'

/**
 * Individual article card component
 */
const ArticleCard = ({ article }: ArticleCardProps) => {
	// Format date
	const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})

	return (
		<Link
			href={`/articles/${article.slug}`}
			className='flex flex-col overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-xl group'
		>
			{/* Image Container */}
			<div className='relative w-full h-[250px] overflow-hidden bg-gray-100'>
				<Image
					src={article.image}
					alt={article.title}
					fill
					className='object-cover object-center transition-transform duration-300 group-hover:scale-105'
					sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
				/>

				{/* Category Badge */}
				{article.category && (
					<div className='absolute top-4 left-4 bg-primary text-light px-3 py-1 text-xs font-semibold uppercase tracking-wide'>
						{article.category}
					</div>
				)}
			</div>

			{/* Content Block */}
			<article className='p-6 flex flex-col flex-grow'>
				{/* Title */}
				<h3 className='text-xl font-bold text-dark mb-3 leading-snug line-clamp-2 group-hover:text-primary transition-colors'>
					{article.title}
				</h3>

				{/* Description */}
				<p className='text-dark/70 text-base mb-4 flex-grow line-clamp-3'>
					{article.description}
				</p>

				{/* Metadata Footer */}
				<footer className='flex items-center justify-between text-sm text-dark/60 pt-4 border-t border-dark/10'>
					<time dateTime={article.date} className='font-medium'>
						{formattedDate}
					</time>

					{article.author && (
						<span className='text-primary font-medium'>
							By {article.author}
						</span>
					)}
				</footer>
			</article>
		</Link>
	)
}

export default ArticleCard
