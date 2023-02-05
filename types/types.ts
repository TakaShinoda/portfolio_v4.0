export type Sites = {
  sources?: string[]
  includeUrlRegex?: string
  excludeUrlRegex?: string
}

type Enclosure = {
  url: string
  length: string
  type: string
}

export type PostItem = {
  title: string
  link: string
  contentSnippet?: string
  isoDate?: string
  dateMiliSeconds: number
  enclosure?: Enclosure
}
