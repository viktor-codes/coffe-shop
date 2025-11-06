import { siteConfig } from '@/config/site'
import { openingHours } from '@/config/opening-hours'
import { articles } from '@/config/articles'
import { footerNavigation } from '@/config/navigation'

/**
 * Prepare footer data from config files
 * This keeps your page.tsx clean
 */
export function getFooterData() {
	// Contact info from site config
	const contactInfo = [
		{
			label: 'Address',
			value: siteConfig.contact.address,
		},
		{
			label: 'Email',
			value: siteConfig.contact.email,
			href: `mailto:${siteConfig.contact.email}`,
		},
		{
			label: 'Phone',
			value: siteConfig.contact.phone,
			href: `tel:${siteConfig.contact.phone.replace(/\s/g, '')}`, // Remove spaces for tel: link
		},
	]

	// Featured articles (latest 4)
	const featuredArticles = articles.slice(0, 4).map(article => ({
		title: article.title,
		date: article.date,
		slug: article.slug,
	}))

	return {
		contactInfo,
		openingHours,
		featuredArticles,
		siteLinks: footerNavigation,
	}
}
