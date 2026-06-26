import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'omargpax.vercel.app',
      },
      {
        protocol: 'https',
        hostname: '*.omargpax.dev',
      },
      {
        protocol: 'https',
        hostname: '**.supabase.co',  // para cuando uses Supabase Storage
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',   // para el post de prueba
      },
    ],
  },
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)