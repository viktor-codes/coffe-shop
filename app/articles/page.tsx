import type { Metadata } from 'next'
import Navbar from '@/components/layout/navbar/navbar'
import Footer from '@/components/layout/footer/footer'
import Section from '@/components/ui/section'
import ArticleCard from '@/components/sections/articles/article-card'
import { articles } from '@/config/articles'
import { getFooterData } from '@/lib/footer-data'

export const metadata: Metadata = {
	title: 'Blog',
	description:
		'Discover coffee tips, brewing techniques, origin stories, and lifestyle articles from Kopikap. Learn about the art of coffee and cafe culture.',
	openGraph: {
		title: 'Kopikap Blog - Coffee Tips & Stories',
		description:
			'Discover coffee tips, brewing techniques, and lifestyle articles from Kopikap.',
	},
}

export default function ArticlesPage() {
	const footerData = getFooterData()

	return (
		<>
			<Navbar />
			<main>
				<Section variant='light' spacing='lg' aria-labelledby='articles-heading'>
					{/* Page Header */}
					<div className='text-center mb-12 lg:mb-16'>
						<h1
							id='articles-heading'
							className='text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-4'
						>
							Our Blog
						</h1>
						<p className='text-lg sm:text-xl text-dark/70 max-w-2xl mx-auto'>
							Discover coffee tips, brewing techniques, origin stories, and
							lifestyle articles from our team.
						</p>
					</div>

					{/* Articles Grid */}
					{articles.length > 0 ? (
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
							{articles.map(article => (
								<ArticleCard key={article.id} article={article} />
							))}
						</div>
					) : (
						<div className='text-center py-12'>
							<p className='text-dark/60 text-lg'>No articles found.</p>
						</div>
					)}
				</Section>
			</main>
			<Footer {...footerData} />
		</>
	)
}
