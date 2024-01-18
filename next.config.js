/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/flyer',
                destination: '/flyer.html',
            },
        ]
    },
}

module.exports = nextConfig
