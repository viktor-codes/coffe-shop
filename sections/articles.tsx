import Image from 'next/image'
// Assuming you have images for your articles
import articleImage1 from '@/assets/article-1.webp'
import articleImage2 from '@/assets/article-2.webp'
import articleImage3 from '@/assets/article-3.webp'
import Link from 'next/link'

const articleData = [
	{
		image: articleImage1,
		title: 'The Art of the Perfect Pour-Over',
		description:
			'Master the delicate technique of pour-over coffee for an exceptional, clean cup every morning.',
		date: 'Oct 28, 2025',
		link: '#',
	},
	{
		image: articleImage2,
		title: 'Ethiopia: The Birthplace of Coffee',
		description:
			'Explore the history, origins, and unique flavor profiles of beans sourced from the ancient highlands.',
		date: 'Oct 15, 2025',
		link: '#',
	},
	{
		image: articleImage3,
		title: 'Why Coffee Shops Are the Best Workspaces',
		description:
			'We break down the science behind why a cozy cafe setting boosts focus and creativity.',
		date: 'Sep 30, 2025',
		link: '#',
	},
]

const MustReadArticles = () => {
	return (
		<section className='py-20 bg-light'>
			<div className='container mx-auto px-4'>
				{/* 1. Header: Main Title and View All Button */}
				<div className='flex justify-between items-center mb-12'>
					<h2 className='text-4xl font-bold text-dark'>Must Read Articles</h2>

					<Link
						href='#' // Link to your main blog page
						className='font-bold text-primary px-6 py-2.5 shadow-sm cursor-pointer border border-primary hover:text-white hover:bg-primary transition-all whitespace-nowrap'
					>
						View More
					</Link>
				</div>

				{/* 2. Three Articles Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{articleData.map((article, index) => (
						// Card Container: No explicit border, relies on shadow/spacing
						<Link
							key={index}
							href={article.link}
							className='flex flex-col overflow-hidden shadow-lg bg-white transition-shadow duration-300 hover:shadow-xl group'
						>
							{/* Image Container (1/2 or 2/3 height, for vertical image layout) */}
							<div className='relative w-full h-[250px] overflow-hidden'>
								<Image
									src={article.image}
									alt={article.title}
									className='object-cover object-center h-full' // Subtle zoom effect
								/>
							</div>

							{/* Content Block: Padding, Text, Date */}
							<div className='p-6 flex flex-col grow'>
								{/* Title */}
								<h3 className='text-xl font-bold text-dark mb-2 leading-snug'>
									{article.title}
								</h3>

								{/* Short Description */}
								<p className='text-dark/70 text-base mb-4 grow'>
									{article.description}
								</p>

								{/* Date/Metadata */}
								<p className='text-sm text-dark/50 hover:text-primary font-medium mt-auto'>
									Published: {article.date}
								</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	)
}

export default MustReadArticles
