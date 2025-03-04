import { defineTheme, directory, group, link, social } from '@neato/guider/theme';
import { Logo } from './components/Logo';
import { NextSeo } from 'next-seo';
import transparentLogo from "./public/transparent-logo.png"; 
import faviconUrl from "./public/favicon.png";

const starLinks = [
  link('GitHub', 'https://github.com/itzcozi/wyzie-subs', {
    style: 'star',
    newTab: true,
    icon: 'akar-icons:github-fill',
  }),
  link('Discord', 'https://discord.gg/2mxraHBVtB', {
    style: 'star',
    newTab: true,
    icon: 'fa6-brands:discord',
  }),
];

const usageGuide = (url: string) => `/subs/usage/${url}`;

export default defineTheme({
  github: "itzcozi/wyzie-subs",
  navigation: [
    link('Discord', 'https://discord.gg/2mxraHBVtB', {
      style: 'star',
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
      description: pageMeta.description ?? "The offical documentation for the Wyzie toolset.",
      openGraph: {
        images: [{
          url: transparentLogo.src,
        }],
        title: `${pageMeta.title ?? "Free, Open-Source API"} | Wyzie Docs`,
        description: pageMeta.description ?? "The offical documentation for the Wyzie toolset.",
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
    logo: () => <Logo />,
    colors: {
      "primary": "#2563eb",
      "primaryLighter": "#3b82f6",
      "primaryDarker": "#1d4ed8",
      "background": "#0b0b0b",
      "backgroundLighter": "#111",
      "backgroundLightest": "#181818",
      "backgroundDarker": "#000000",
      "line": "#333",
      "text": "#c0c0c0",
      "textLighter": "#d0d0d0",
      "textHighlight": "#e0e0e0"
    },
  },
  directories: [
    directory("main", {
      sidebar: [
        ...starLinks,
        group("Wyzie Subs", [
          link("Introduction", "/subs/introduction"),
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
          link("Introduction", "/proxy/introduction"),
        ]),
      ]
    })
  ],
});
