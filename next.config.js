/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'poster-shop.joinposter.com',
				port: '',
				pathname: '/upload/**',
			},
		],
	},
}

module.exports = nextConfig
