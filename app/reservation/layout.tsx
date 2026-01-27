import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Reservation',
	description:
		'Book your table at Kopikap. Reserve your spot and enjoy a perfect coffee experience in our cozy atmosphere.',
	openGraph: {
		title: 'Book Your Table at Kopikap',
		description:
			'Reserve your spot at Kopikap and enjoy a perfect coffee experience.',
	},
}

export default function ReservationLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <>{children}</>
}
