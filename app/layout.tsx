import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Raleway } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

const ralewaySans = Raleway({
	variable: '--font-raleway-sans',
	subsets: ['latin'],
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kopikap.com'

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: 'Kopikap - Best Coffee Taste, Best Cozy Place',
		template: '%s | Kopikap',
	},
	description:
		'The modern and cozy Coffee Shop',
	keywords: [
		'coffee shop',
		'cafe',
		'coffee',
		'pastries',
		'breakfast',
		'desserts',
		'Kopikap',
		'cozy cafe',
	],
	authors: [{ name: 'Kopikap' }],
	creator: 'Kopikap',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: siteUrl,
		siteName: 'Kopikap',
		title: 'Kopikap - Best Coffee Taste, Best Cozy Place',
		description:
			'The modern and cozy Coffee Shop',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Kopikap Coffee Shop',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Kopikap - Best Coffee Taste, Best Cozy Place',
		description:
			'Step inside Kopikap, where every cup is perfectly brewed and the atmosphere invites you to stay a while.',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${ralewaySans.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	)
}
