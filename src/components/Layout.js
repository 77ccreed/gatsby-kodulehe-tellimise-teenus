import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="et" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.png`}
        />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:creator" content={author} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />

        <meta name="google-site-verification" content="DYwWl0JM6R7-PjJn43OLicq2M9mfJLNIML4cG4_CkhI" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Estonia",
              "addressLocality": "Valga",
              "streetAddress": "Petseri 8-53",
              "postalCode": "	68204"
            },
            "description": "Programeerimine ja arvutialane konsultatsioon ettevõtjale.",
            "name": "OÜ Kodulehe Tellimine",
            "telephone": "+372 5688 4456",
            "priceRange": "€€€-€€€€",
            "areaServed": "Estonia",
            "founder": "Kiur Jullis",
            "url": "https://tellikoduleht.ee/",
            "sameAs": "https://www.facebook.com/O%C3%9C-Kodulehe-Tellimine-111480883801254/",
            "image": [
              "https://tellikoduleht.ee/static/4c2933e846982f2a735f0a0341b220b5/2198e/tellikoduleht.ee-m%C3%B5%C3%B5tmistulemused.png",
              "https://tellikoduleht.ee/static/142d495308561c83548aea4882afbadf/fb329/ettev%C3%B5tte-kodulehe-tegemine.jpg",
              "https://tellikoduleht.ee/static/63cd39d9fb516e78c9ea76c9ca63dfd9/fb329/kodulehe-teksti-kirjutamine.jpg"
            ]
          })}
        </script>
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
