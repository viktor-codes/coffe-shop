'use client'

import { useState, FormEvent } from 'react'
import Navbar from '@/components/layout/navbar/navbar'
import Footer from '@/components/layout/footer/footer'
import Section from '@/components/ui/section'
import Button from '@/components/ui/button'
import Container from '@/components/ui/container'
import { getFooterData } from '@/lib/footer-data'
import { cn } from '@/lib/utils'

interface ReservationData {
	name: string
	email: string
	phone: string
	date: string
	time: string
	guests: string
	specialRequests: string
}

interface ReservationErrors {
	name?: string
	email?: string
	phone?: string
	date?: string
	time?: string
	guests?: string
}

export default function ReservationPage() {
	const footerData = getFooterData()
	const [formData, setFormData] = useState<ReservationData>({
		name: '',
		email: '',
		phone: '',
		date: '',
		time: '',
		guests: '2',
		specialRequests: '',
	})
	const [errors, setErrors] = useState<ReservationErrors>({})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(
		'idle'
	)

	const validateEmail = (email: string): boolean => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
	}

	const validatePhone = (phone: string): boolean => {
		return /^[\d\s\-\+\(\)]+$/.test(phone) && phone.replace(/\D/g, '').length >= 10
	}

	const validateDate = (date: string): boolean => {
		const selectedDate = new Date(date)
		const today = new Date()
		today.setHours(0, 0, 0, 0)
		return selectedDate >= today
	}

	const validateTime = (time: string): boolean => {
		const [hours] = time.split(':').map(Number)
		return hours >= 8 && hours <= 22
	}

	const validateForm = (): boolean => {
		const newErrors: ReservationErrors = {}

		if (!formData.name.trim()) {
			newErrors.name = 'Name is required'
		} else if (formData.name.trim().length < 2) {
			newErrors.name = 'Name must be at least 2 characters'
		}

		if (!formData.email.trim()) {
			newErrors.email = 'Email is required'
		} else if (!validateEmail(formData.email)) {
			newErrors.email = 'Please enter a valid email address'
		}

		if (!formData.phone.trim()) {
			newErrors.phone = 'Phone is required'
		} else if (!validatePhone(formData.phone)) {
			newErrors.phone = 'Please enter a valid phone number'
		}

		if (!formData.date) {
			newErrors.date = 'Date is required'
		} else if (!validateDate(formData.date)) {
			newErrors.date = 'Please select a future date'
		}

		if (!formData.time) {
			newErrors.time = 'Time is required'
		} else if (!validateTime(formData.time)) {
			newErrors.time = 'We are open from 8:00 AM to 10:00 PM'
		}

		if (!formData.guests || Number(formData.guests) < 1) {
			newErrors.guests = 'Please select number of guests'
		} else if (Number(formData.guests) > 10) {
			newErrors.guests = 'Maximum 10 guests per reservation'
		}

		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
		// Clear error when user starts typing
		if (errors[name as keyof ReservationErrors]) {
			setErrors(prev => ({ ...prev, [name]: undefined }))
		}
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (!validateForm()) {
			return
		}

		setIsSubmitting(true)
		setSubmitStatus('idle')

		// Simulate API call
		try {
			await new Promise(resolve => setTimeout(resolve, 1500))
			setSubmitStatus('success')
			setFormData({
				name: '',
				email: '',
				phone: '',
				date: '',
				time: '',
				guests: '2',
				specialRequests: '',
			})
		} catch (error) {
			setSubmitStatus('error')
		} finally {
			setIsSubmitting(false)
		}
	}

	// Get minimum date (today)
	const today = new Date().toISOString().split('T')[0]

	return (
		<>
			<Navbar />
			<main>
				<Section variant='light' spacing='lg'>
					<Container maxWidth='4xl'>
						<div className='text-center mb-12'>
							<h1 className='text-4xl sm:text-5xl font-bold text-dark mb-4'>
								Book Your Table
							</h1>
							<p className='text-lg text-dark/70 max-w-2xl mx-auto'>
								Reserve your spot at Kopikap and enjoy a perfect coffee
								experience. We recommend booking in advance, especially for
								weekends.
							</p>
						</div>

						<form
							onSubmit={handleSubmit}
							className='max-w-2xl mx-auto space-y-6'
							noValidate
						>
							{/* Name Field */}
							<div>
								<label
									htmlFor='name'
									className='block text-sm font-semibold text-dark mb-2'
								>
									Full Name <span className='text-primary'>*</span>
								</label>
								<input
									type='text'
									id='name'
									name='name'
									value={formData.name}
									onChange={handleChange}
									className={cn(
										'w-full px-4 py-3 border-2 rounded-lg transition-colors',
										'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
										errors.name
											? 'border-red-500'
											: 'border-dark/10 focus:border-primary'
									)}
									aria-invalid={!!errors.name}
									aria-describedby={errors.name ? 'name-error' : undefined}
								/>
								{errors.name && (
									<p id='name-error' className='mt-1 text-sm text-red-500'>
										{errors.name}
									</p>
								)}
							</div>

							{/* Email Field */}
							<div>
								<label
									htmlFor='email'
									className='block text-sm font-semibold text-dark mb-2'
								>
									Email <span className='text-primary'>*</span>
								</label>
								<input
									type='email'
									id='email'
									name='email'
									value={formData.email}
									onChange={handleChange}
									className={cn(
										'w-full px-4 py-3 border-2 rounded-lg transition-colors',
										'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
										errors.email
											? 'border-red-500'
											: 'border-dark/10 focus:border-primary'
									)}
									aria-invalid={!!errors.email}
									aria-describedby={errors.email ? 'email-error' : undefined}
								/>
								{errors.email && (
									<p id='email-error' className='mt-1 text-sm text-red-500'>
										{errors.email}
									</p>
								)}
							</div>

							{/* Phone Field */}
							<div>
								<label
									htmlFor='phone'
									className='block text-sm font-semibold text-dark mb-2'
								>
									Phone <span className='text-primary'>*</span>
								</label>
								<input
									type='tel'
									id='phone'
									name='phone'
									value={formData.phone}
									onChange={handleChange}
									placeholder='+1 (555) 123-4567'
									className={cn(
										'w-full px-4 py-3 border-2 rounded-lg transition-colors',
										'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
										errors.phone
											? 'border-red-500'
											: 'border-dark/10 focus:border-primary'
									)}
									aria-invalid={!!errors.phone}
									aria-describedby={errors.phone ? 'phone-error' : undefined}
								/>
								{errors.phone && (
									<p id='phone-error' className='mt-1 text-sm text-red-500'>
										{errors.phone}
									</p>
								)}
							</div>

							{/* Date and Time Row */}
							<div className='grid sm:grid-cols-2 gap-6'>
								{/* Date Field */}
								<div>
									<label
										htmlFor='date'
										className='block text-sm font-semibold text-dark mb-2'
									>
										Date <span className='text-primary'>*</span>
									</label>
									<input
										type='date'
										id='date'
										name='date'
										value={formData.date}
										onChange={handleChange}
										min={today}
										className={cn(
											'w-full px-4 py-3 border-2 rounded-lg transition-colors',
											'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
											errors.date
												? 'border-red-500'
												: 'border-dark/10 focus:border-primary'
										)}
										aria-invalid={!!errors.date}
										aria-describedby={errors.date ? 'date-error' : undefined}
									/>
									{errors.date && (
										<p id='date-error' className='mt-1 text-sm text-red-500'>
											{errors.date}
										</p>
									)}
								</div>

								{/* Time Field */}
								<div>
									<label
										htmlFor='time'
										className='block text-sm font-semibold text-dark mb-2'
									>
										Time <span className='text-primary'>*</span>
									</label>
									<input
										type='time'
										id='time'
										name='time'
										value={formData.time}
										onChange={handleChange}
										min='08:00'
										max='22:00'
										className={cn(
											'w-full px-4 py-3 border-2 rounded-lg transition-colors',
											'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
											errors.time
												? 'border-red-500'
												: 'border-dark/10 focus:border-primary'
										)}
										aria-invalid={!!errors.time}
										aria-describedby={errors.time ? 'time-error' : undefined}
									/>
									{errors.time && (
										<p id='time-error' className='mt-1 text-sm text-red-500'>
											{errors.time}
										</p>
									)}
								</div>
							</div>

							{/* Guests Field */}
							<div>
								<label
									htmlFor='guests'
									className='block text-sm font-semibold text-dark mb-2'
								>
									Number of Guests <span className='text-primary'>*</span>
								</label>
								<select
									id='guests'
									name='guests'
									value={formData.guests}
									onChange={handleChange}
									className={cn(
										'w-full px-4 py-3 border-2 rounded-lg transition-colors',
										'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
										errors.guests
											? 'border-red-500'
											: 'border-dark/10 focus:border-primary'
									)}
									aria-invalid={!!errors.guests}
									aria-describedby={errors.guests ? 'guests-error' : undefined}
								>
									<option value=''>Select guests</option>
									{Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
										<option key={num} value={num}>
											{num} {num === 1 ? 'guest' : 'guests'}
										</option>
									))}
								</select>
								{errors.guests && (
									<p id='guests-error' className='mt-1 text-sm text-red-500'>
										{errors.guests}
									</p>
								)}
							</div>

							{/* Special Requests Field */}
							<div>
								<label
									htmlFor='specialRequests'
									className='block text-sm font-semibold text-dark mb-2'
								>
									Special Requests (Optional)
								</label>
								<textarea
									id='specialRequests'
									name='specialRequests'
									value={formData.specialRequests}
									onChange={handleChange}
									rows={4}
									placeholder='Any dietary restrictions, allergies, or special occasions?'
									className='w-full px-4 py-3 border-2 border-dark/10 rounded-lg transition-colors resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
								/>
							</div>

							{/* Submit Status */}
							{submitStatus === 'success' && (
								<div className='p-4 bg-green-50 border-2 border-green-200 rounded-lg'>
									<p className='text-green-700 font-medium'>
										Reservation confirmed! We'll send you a confirmation email
										shortly.
									</p>
								</div>
							)}

							{submitStatus === 'error' && (
								<div className='p-4 bg-red-50 border-2 border-red-200 rounded-lg'>
									<p className='text-red-700 font-medium'>
										Something went wrong. Please try again later.
									</p>
								</div>
							)}

							{/* Submit Button */}
							<Button
								type='submit'
								size='lg'
								fullWidth
								isLoading={isSubmitting}
								disabled={isSubmitting}
							>
								{isSubmitting ? 'Booking...' : 'Book Table'}
							</Button>
						</form>
					</Container>
				</Section>
			</main>
			<Footer {...footerData} />
		</>
	)
}
