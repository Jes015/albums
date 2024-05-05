const dynamics = {
    album: {
        name: 'Album',
        path: function (albumName: string) {
            return `/album/${albumName}`
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
