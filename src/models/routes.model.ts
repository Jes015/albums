const dynamics = {
    album: {
        name: 'Album',
        path: function (albumName: string) {
            return `/album/${albumName}`
        }
    },
    song: {
        name: 'Song',
        path: function (songName: string) {
            return `/song/${songName}`
        }
    }
}

const statics = {
    home: {
        name: 'Home',
        path: '/'
    }
}

export const frontRoutes = { dynamics, statics }
