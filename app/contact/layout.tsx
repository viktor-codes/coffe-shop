import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Contact Us',
	description:
		'Get in touch with Kopikap. Visit us, call us, or send us a message. We\'d love to hear from you!',
	openGraph: {
		title: 'Contact Kopikap - Get in Touch',
		description:
			'Get in touch with Kopikap. Visit us, call us, or send us a message.',
	},
}

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <>{children}</>
}
