/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/flyer',
                destination: '/flyer.pdf',
            },
        ]
    },
}

module.exports = nextConfig
