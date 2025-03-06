import { defineTheme, directory, group, link, social } from '@neato/guider/theme';
import { Logo } from './components/Logo';
import { NextSeo } from 'next-seo';
import transparentLogo from "./public/transparent-logo.png"; 
import faviconUrl from "./public/favicon.png";

const usageGuide = (url: string) => `/subs/usage/${url}`;

export default defineTheme({
  github: "itzcozi/wyzie-subs",
  navigation: [
    link('Discord', 'https://discord.gg/2mxraHBVtB', {
      newTab: true,
      icon: 'mdi:discord',
    }),
  ],
  contentFooter: {
    text: "Created by BadDeveloper with 💙",
    editRepositoryBase: "https://github.com/itzcozi/wyzie-docs/blob/master",
    socials: [
      social.github("https://github.com/itzcozi"),
      social.discord("https://discord.gg/2mxraHBVtB"),
    ]
  },
  meta: (pageMeta) => (
    <NextSeo {...{
      title: `${pageMeta.title ?? "Free, Open-Source API"} | Wyzie Docs`,
      description: pageMeta.description ?? "The official documentation for the Wyzie toolset.",
      openGraph: {
        images: [{
          url: transparentLogo.src,
        }],
        title: `${pageMeta.title ?? "Free, Open-Source API"} | Wyzie Docs`,
        description: pageMeta.description ?? "The official documentation for the Wyzie toolset.",
      },
      twitter: {
        cardType: 'summary',
      },
      additionalLinkTags: [
        {
          href: faviconUrl.src,
          rel: "icon",
          type: "image/x-icon",
        }
      ]
    }} />
  ),
  settings: {
    toc: false,
    //backgroundPattern: 'flare',
    logo: () => <Logo />,
    colors: {
      "primary": "#2563eb",
      "primaryLighter": "#3b82f6",
      "primaryDarker": "#1d4ed8",
      "background": "#0b0b0b",
      "backgroundLighter": "#141414",
      "backgroundLightest": "#181818",
      "backgroundDarker": "#090909",
      "line": "#353535",
      "text": "#c0c0c0",
      "textLighter": "#d0d0d0",
      "textHighlight": "#e0e0e0"
    },
  },
  directories: [
    directory("main", {
      sidebar: [
        group("Wyzie Subs", [
          link("Introduction", "/subs/intro"),
          link("Hosting", "/subs/hosting"),
          link.nested({
              title: 'Usage',
              items: [
                link(
                  'NPM Package',
                  usageGuide('package'),
                ),
                link(
                  'Direct Fetching',
                  usageGuide('direct'),
                ),
              ],
            }),
        ]),
        group("Wyzie Proxy", [
          link("Introduction", "/proxy/intro"),
          link("Hosting", "/proxy/hosting"),
        ]),
      ]
    })
  ],
});
