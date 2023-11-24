export type Sites = {
  sources?: string[]
  includeUrlRegex?: string
  excludeUrlRegex?: string
}

export type PostItem = {
  title: string
  link: string
  contentSnippet?: string
  isoDate?: string
  dateMiliSeconds: number
}

type Protocol = `https` | `http`

export type Blog = {
  title: string,
  date: string,
  url: `${Protocol}://${string}`,
}
