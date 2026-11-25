// Every address the page links to, in the order the plaques hang on the rack.
// This file is the one place to change when the sites move.

export interface Link {
  name: string
  href: string
}

export const LINKS: readonly Link[] = [
  { name: 'Portfolio', href: 'https://portfolio-izanagi.vercel.app' },
  { name: 'GitHub', href: 'https://github.com/dominikkoenitzer' },
  { name: 'Senbon', href: 'https://senbon.vercel.app/' },
]
