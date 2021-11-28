export interface Author {
  name: string,
  photo?: string
}

export interface Track {
  id: string
  title: string,
  author: Author,
  thumbnail?: string,
  length?: number,
  modulesCount?: number,
}

export interface TrackForHome {
  tracksForHome: Track[]
}