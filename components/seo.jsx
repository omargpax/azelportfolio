import React from 'react'

const seoData = {
  title: "Omargpax",
  description: "I'm passionate about art and music. Oh and I'm also a developer. So, if you want to share something, here I am. God bless you ☕",
  author: "Omar A. Guerrero",
  image: "/preview.png",
  url: "https://omargpax.vercel.app",
  keywords: [
    "omargpax",
    "omar guerrero",
    "@omargpax",
    "Peruvian developer",
    "Portfolio",
    "Omargpax Portfolio ",
    "Junior Developer",
  ],
};

function SEO() {
  return (
    <head>
      <meta name="title" content={seoData.title} />
      <meta name="author" content={seoData.author} />
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords.join(", ")} />
      <link rel="canonical" href={seoData.url} />
      {/* Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoData.url} />
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:image" content={seoData.image} />
      <meta property="og:site_name" content={seoData.title} />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoData.url} />
      <meta property="twitter:title" content={seoData.title} />
      <meta property="twitter:description" content={seoData.description} />
      <meta property="twitter:image" content={seoData.image} />
      <meta name="robots" content="Index" />
      <link rel="manifest" href="/manifest.json" />
      {/* Favicon */}
      <link rel="apple-touch-icon" sizes="120x120" href="./favicon.ico" />
      <link rel="icon" type="image/ico" sizes="32x32" href="./favicon.ico" />
      <link rel="icon" type="image/ico" sizes="16x16" href="./favicon.ico" />
    </head>
  );
}

export default SEO