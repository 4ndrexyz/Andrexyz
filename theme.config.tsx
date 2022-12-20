import * as React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  project: { link: 'https://github.com/4ndrexyz' },
  docsRepositoryBase: 'https://github.com/4ndrexyz/Andrexyz',
  useNextSeoProps: () => {
    const { frontMatter } = useConfig()

    const defaultTitle =
      frontMatter.overrideTitle || "Home: 4ndrexyz Personal Web"

    return {
      description: frontMatter.description,
      defaultTitle,
      titleTemplate: `4ndrexyz`,
    }
  },
  head: () => {
    const router = useRouter()
    const { title } = useConfig()

    const ogImgLink = encodeURI(
      `https://og.sznm.dev/api/generate?heading=${
        title ?? 'Home%20%7C%204ndrexyz'
      }&text=${
        title
          ? "Home | 4ndrexyz Personal Web"
          : 'Personal%20Knowledge%20Base'
      }`
    )

    return (
      <>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content="Home: 4ndrexyz Personal Web" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImgLink} />
        <meta name="twitter:site:domain" content="home.codenime.xyz" />
        <meta name="twitter:url" content="https://home.codenime.xyz" />
        <meta name="twitter:creator" content="@andrexyz" />

        {/* OpenGraph Meta */}
        <meta
          name="og:title"
          content={title ?? "Home: 4ndrexyz Personal Web"}
        />
        <meta name="og:type" content="website" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:site_name" content="4ndrexyz" />
        <meta name="og:description" content="Home: 4ndrexyz Personal Web" />
        <meta name="og:image" content={ogImgLink} />
        <meta name="og:url" content={`https://home.codenime.xyz${router.asPath}`} />

        <meta name="apple-mobile-web-app-title" content="Base" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icon/home.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icon/home.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icon/home.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/icon/home.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icon/home.png"
        />
        <meta
          name="msapplication-TileImage"
          content="/icon/home.png"
        />
      </>
    )
  },
  darkMode: true,
  primaryHue: { light: 0, dark: 156 },
  chat: {
    link: 'https://twitter.com/andrexyz_',
    icon: (
      <svg width="24" height="24" viewBox="0 0 248 204">
        <path
          fill="currentColor"
          d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"
        ></path>
      </svg>
    ),
  },
  banner: {
    key: 'wussh-olamonde-rename',
    text: (
      <a href="https://www.codenime.xyz" target="_blank">
        Kunjungi website <b>codenime</b> untuk kamu yang ingin belajar Coding  →
      </a>
    ),
  },
  sidebar: {
    defaultMenuCollapseLevel: 0,
  },
  navigation: true,
  toc: {
    float: true,
    extraContent: true,
  },
  logo: (
    <>
      <span className="nx-mr-2 nx-font-extrabold md:nx-inline">Home</span>
      <span className="text-gray-600 font-normal md:inline">4ndrexyz</span>
    </>
  ),
  editLink: { text: 'Edit this page →' },
  footer: {
    text: (
      <div>
        2020 - {new Date().getFullYear()} |{' '}
        <a
          href="https://home.codenime.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="nx-underline nx-underline-offset-4 nx-font-bold"
        >
          Made with &hearts; by 4ndrexyz
        </a>
      </div>
    ),
  },
  // i18n: [
  //   { locale: 'en', text: 'English' },
  //   { locale: 'id', text: 'Bahasa Indonesia' },
  // ],
}

export default config
