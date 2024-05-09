import { defineCollection, reference, z } from 'astro:content'

const albumSchema = z.object({
    title: z.string(),
    slug: z.string(),
    type: z.enum(['album']),
    tags: z.array(z.string()),
    image: z.string(),
    releaseDate: z.number(),
    description: z.string(),
    descriptionShowMoreButton: z.boolean(),
    links: z.array(z.object({
        name: z.string(),
        url: z.string().url(),
        type: z.enum(['youtube', 'spotify', 'apple'])
    })),
    state: z.enum(['soon', 'released']),
    artists: z.array(z.string()),
    songs: reference('songs')
})

const songSchema = z.object({
    title: z.string(),
    slug: z.string(),
    type: z.enum(['canción']),
    tags: z.array(z.string()),
    image: z.string(),
    releaseDate: z.number(),
    description: z.string(),
    descriptionShowMoreButton: z.boolean(),
    state: z.enum(['soon', 'released']),
    links: z.array(z.object({
        name: z.string(),
        url: z.string().url(),
        type: z.enum(['youtube', 'spotify', 'apple'])
    })),
    artists: z.array(z.string()),
    album: reference('album')
})

const albumCollection = defineCollection({
    type: 'data',
    schema: albumSchema
})

const songCollection = defineCollection({
    type: 'data',
    schema: z.array(songSchema)
})

export const collections = {
    album: albumCollection,
    songs: songCollection
}