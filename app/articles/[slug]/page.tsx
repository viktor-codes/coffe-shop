import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navbar from '@/components/layout/navbar/navbar'
import Footer from '@/components/layout/footer/footer'
import Section from '@/components/ui/section'
import Image from 'next/image'
import { articles } from '@/config/articles'
import { getFooterData } from '@/lib/footer-data'

interface ArticlePageProps {
	params: Promise<{ slug: string }>
}

export async function generateMetadata({
	params,
}: ArticlePageProps): Promise<Metadata> {
	const { slug } = await params
	const article = articles.find(art => art.slug === slug)

	if (!article) {
		return {
			title: 'Article Not Found',
			description: 'The requested article could not be found.',
		}
	}

	return {
		title: article.title,
		description: article.description,
		openGraph: {
			title: article.title,
			description: article.description,
			images: [
				{
					url: article.image.src,
					width: 1200,
					height: 630,
					alt: article.title,
				},
			],
		},
	}
}

export async function generateStaticParams() {
	return articles.map(article => ({
		slug: article.slug,
	}))
}

export default async function ArticlePage({ params }: ArticlePageProps) {
	const { slug } = await params
	const article = articles.find(art => art.slug === slug)
	const footerData = getFooterData()

	if (!article) {
		notFound()
	}

	const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})

	return (
		<>
			<Navbar />
			<main>
				<Section variant='light' spacing='lg'>
					<article className='max-w-4xl mx-auto'>
						{/* Header */}
						<header className='mb-8'>
							{article.category && (
								<div className='inline-block bg-primary text-light px-3 py-1 text-xs font-semibold uppercase tracking-wide mb-4'>
									{article.category}
							</div>
							)}
							<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-4'>
								{article.title}
							</h1>
							<div className='flex items-center gap-4 text-dark/60 text-sm'>
								<time dateTime={article.date}>{formattedDate}</time>
								{article.author && (
									<span>
										By <span className='text-primary font-medium'>{article.author}</span>
									</span>
								)}
							</div>
						</header>

						{/* Featured Image */}
						<div className='relative w-full h-[400px] sm:h-[500px] mb-8 rounded-lg overflow-hidden'>
							<Image
								src={article.image}
								alt={article.title}
								fill
								className='object-cover'
								priority
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px'
							/>
						</div>

						{/* Content */}
						<div className='prose prose-lg max-w-none'>
							<p className='text-xl text-dark/70 leading-relaxed mb-6'>
								{article.description}
							</p>

							{/* Placeholder for full article content */}
							<div className='space-y-4 text-dark/80 leading-relaxed'>
								<p>
									This is a placeholder for the full article content. In a real
									application, you would fetch the full article content from a CMS
									or database based on the slug.
								</p>
								<p>
									The article "{article.title}" would contain detailed information
									about {article.description.toLowerCase()}.
								</p>
							</div>
						</div>
					</article>
				</Section>
			</main>
			<Footer {...footerData} />
		</>
	)
}
