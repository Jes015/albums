export interface ArtInfoLink {
    name: string
    url: string
    type: 'youtube' | 'spotify' | 'apple'
}

export type ArtInfoLinkArray = ArtInfoLink[]

export interface ArtInfo {
    title: string
    slug: string
    type: 'album' | 'canción'
    tags: string[]
    image: string
    releaseDate: number
    description: string
    links: ArtInfoLinkArray
    artists: string[]
}

export type ArtInfoArray = ArtInfo[]
