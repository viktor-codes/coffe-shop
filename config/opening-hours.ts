export interface OpeningHour {
	day: string
	open: string | null
	close: string | null
	closed?: boolean
}

export const openingHours: OpeningHour[] = [
	{ day: 'Monday', open: '7:00 am', close: '5:00 pm' },
	{ day: 'Tuesday', open: '7:00 am', close: '5:00 pm' },
	{ day: 'Wednesday', open: '7:00 am', close: '5:00 pm' },
	{ day: 'Thursday', open: '7:00 am', close: '5:00 pm' },
	{ day: 'Friday', open: '7:00 am', close: '5:00 pm' },
	{ day: 'Saturday', open: '8:00 am', close: '2:00 pm' },
	{ day: 'Sunday', open: null, close: null, closed: true },
]
