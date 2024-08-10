/** @type {import('next').NextConfig} */
//https://nextjs.org/docs/messages/next-image-unconfigured-host
const nextConfig = {
	images: {
		// formats: ["image/jpg", "image/jpeg", "image/webp"],
		formats: ["image/avif", "image/webp"],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'fakestoreapi.com',
				port: '',
				pathname: '/img/**',
			},
		],
	},
	// experimental: { esmExternals: true },
};

module.exports = nextConfig;