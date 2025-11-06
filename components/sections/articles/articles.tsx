import Section from '@/components/ui/section'
import Button from '@/components/ui/button'
import ArticleCard from './article-card'
import { ArticlesProps } from './articles.types'

/**
 * Articles section displaying featured blog posts
 *
 * @example
 * <Articles
 *   articles={articles}
 *   title="Latest Articles"
 *   showViewMore
 * />
 */
const Articles = ({
	articles,
	title = 'Must Read Articles',
	showViewMore = true,
	viewMoreHref = '/articles',
	className = '',
}: ArticlesProps) => {
	return (
		<Section
			variant='light'
			spacing='lg'
			className={className}
			aria-labelledby='articles-heading'
		>
			{/* Header with Title and View More Button */}
			<div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12'>
				<h2
					id='articles-heading'
					className='text-4xl lg:text-5xl font-bold text-dark'
				>
					{title}
				</h2>

				{showViewMore && (
					<Button
						href={viewMoreHref}
						variant='outline'
						size='md'
						className='whitespace-nowrap'
					>
						View More Articles
					</Button>
				)}
			</div>

			{/* Articles Grid */}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
				{articles.map(article => (
					<ArticleCard key={article.id} article={article} />
				))}
			</div>
		</Section>
	)
}

export default Articles
