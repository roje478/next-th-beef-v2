/** @type {import('next').NextConfig} */
const nextConfig = {
	// Optimizaciones de imágenes
	images: {
		formats: ['image/avif', 'image/webp'],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
	},

	// Habilitar compresión
	compress: true,

	// Remover header X-Powered-By
	poweredByHeader: false,

	// Habilitar modo estricto de React
	reactStrictMode: true,
};

export default nextConfig;
