import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	// Оптимизация изображений
	images: {
		formats: ['image/avif', 'image/webp'],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		minimumCacheTTL: 60,
		remotePatterns: [
			// Добавьте здесь домены для внешних изображений, если нужно
		],
	},

	// Компрессия
	compress: true,

	// React Strict Mode для разработки
	reactStrictMode: true,

	// Оптимизация сборки
	poweredByHeader: false,

	// Экспериментальные функции (если нужно)
	experimental: {
		// optimizePackageImports: ['react-icons'], // Оптимизация импортов
	},
}

export default nextConfig
