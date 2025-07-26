// theme.config.js
import { useConfig } from 'nextra-theme-docs'

export default {
  logo: <span>Arya Blog</span>,
  project: {
    link: 'https://github.com/u-arya/arya-blog',
  },
  docsRepositoryBase: 'https://github.com/u-arya/arya-blog/blob/main',
  useNextSeoProps() {
    const { frontMatter } = useConfig()
    return {
      titleTemplate: '%s – Arya Blog',
      description: frontMatter.description || 'Arya Blog - A personal blog built with Next.js and Nextra'
    }
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  footer: {
    text: 'MIT © Arya',
  },
}