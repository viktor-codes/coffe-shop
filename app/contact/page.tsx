'use client'

import { useState, FormEvent } from 'react'
import Navbar from '@/components/layout/navbar/navbar'
import Footer from '@/components/layout/footer/footer'
import Section from '@/components/ui/section'
import Button from '@/components/ui/button'
import Container from '@/components/ui/container'
import { siteConfig } from '@/config/site'
import { getFooterData } from '@/lib/footer-data'
import { cn } from '@/lib/utils'

interface FormData {
	name: string
	email: string
	phone: string
	message: string
}

interface FormErrors {
	name?: string
	email?: string
	phone?: string
	message?: string
}

export default function ContactPage() {
	const footerData = getFooterData()
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		phone: '',
		message: '',
	})
	const [errors, setErrors] = useState<FormErrors>({})
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

	const validateForm = (): boolean => {
		const newErrors: FormErrors = {}

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

		if (formData.phone && !validatePhone(formData.phone)) {
			newErrors.phone = 'Please enter a valid phone number'
		}

		if (!formData.message.trim()) {
			newErrors.message = 'Message is required'
		} else if (formData.message.trim().length < 10) {
			newErrors.message = 'Message must be at least 10 characters'
		}

		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
		// Clear error when user starts typing
		if (errors[name as keyof FormErrors]) {
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
			await new Promise(resolve => setTimeout(resolve, 1000))
			setSubmitStatus('success')
			setFormData({ name: '', email: '', phone: '', message: '' })
		} catch (error) {
			setSubmitStatus('error')
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<>
			<Navbar />
			<main>
				<Section variant='light' spacing='lg'>
					<Container maxWidth='4xl'>
						<div className='grid lg:grid-cols-2 gap-12 lg:gap-16'>
							{/* Contact Information */}
							<div>
								<h1 className='text-4xl sm:text-5xl font-bold text-dark mb-6'>
									Get in Touch
								</h1>
								<p className='text-lg text-dark/70 mb-8 leading-relaxed'>
									We'd love to hear from you! Whether you have a question,
									feedback, or just want to say hello, feel free to reach out.
								</p>

								<div className='space-y-6'>
									<div>
										<h3 className='text-lg font-semibold text-dark mb-2'>
											Address
										</h3>
										<p className='text-dark/70'>{siteConfig.contact.address}</p>
									</div>

									<div>
										<h3 className='text-lg font-semibold text-dark mb-2'>
											Email
										</h3>
										<a
											href={`mailto:${siteConfig.contact.email}`}
											className='text-primary hover:underline'
										>
											{siteConfig.contact.email}
										</a>
									</div>

									<div>
										<h3 className='text-lg font-semibold text-dark mb-2'>
											Phone
										</h3>
										<a
											href={`tel:${siteConfig.contact.phone}`}
											className='text-primary hover:underline'
										>
											{siteConfig.contact.phone}
										</a>
									</div>
								</div>
							</div>

							{/* Contact Form */}
							<div>
								<form onSubmit={handleSubmit} className='space-y-6' noValidate>
									{/* Name Field */}
									<div>
										<label
											htmlFor='name'
											className='block text-sm font-semibold text-dark mb-2'
										>
											Name <span className='text-primary'>*</span>
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
											aria-describedby={
												errors.email ? 'email-error' : undefined
											}
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
											Phone
										</label>
										<input
											type='tel'
											id='phone'
											name='phone'
											value={formData.phone}
											onChange={handleChange}
											className={cn(
												'w-full px-4 py-3 border-2 rounded-lg transition-colors',
												'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
												errors.phone
													? 'border-red-500'
													: 'border-dark/10 focus:border-primary'
											)}
											aria-invalid={!!errors.phone}
											aria-describedby={
												errors.phone ? 'phone-error' : undefined
											}
										/>
										{errors.phone && (
											<p id='phone-error' className='mt-1 text-sm text-red-500'>
												{errors.phone}
											</p>
										)}
									</div>

									{/* Message Field */}
									<div>
										<label
											htmlFor='message'
											className='block text-sm font-semibold text-dark mb-2'
										>
											Message <span className='text-primary'>*</span>
										</label>
										<textarea
											id='message'
											name='message'
											value={formData.message}
											onChange={handleChange}
											rows={6}
											className={cn(
												'w-full px-4 py-3 border-2 rounded-lg transition-colors resize-none',
												'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
												errors.message
													? 'border-red-500'
													: 'border-dark/10 focus:border-primary'
											)}
											aria-invalid={!!errors.message}
											aria-describedby={
												errors.message ? 'message-error' : undefined
											}
										/>
										{errors.message && (
											<p
												id='message-error'
												className='mt-1 text-sm text-red-500'
											>
												{errors.message}
											</p>
										)}
									</div>

									{/* Submit Status */}
									{submitStatus === 'success' && (
										<div className='p-4 bg-green-50 border-2 border-green-200 rounded-lg'>
											<p className='text-green-700 font-medium'>
												Thank you! Your message has been sent successfully.
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
										{isSubmitting ? 'Sending...' : 'Send Message'}
									</Button>
								</form>
							</div>
						</div>
					</Container>
				</Section>
			</main>
			<Footer {...footerData} />
		</>
	)
}
