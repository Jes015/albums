import type { NotificationArray } from "./models/notifications.model"

export interface PageDataType {
    pageTitle: string
    notifications: NotificationArray
}

export const pageData: PageDataType = {
    pageTitle: 'joyolababy\'s albums',
    notifications: [
        {
            id: 'info <3',
            title: 'Info <3',
            type: 'info',
            content: 'Quise hacer este sitio web para guardar todos los detalles de mis albums, no quería solo sacarlos sin contexto. Cada cosa que hago tiene un contexto o cada album que sacaré en los siguientes años tiene un contexto y lo voy a explicar aquí.',
            date: '5 de mayo de 2024',
        },
        {
            id: 'info 2 <3',
            title: 'Info 2 <3',
            type: 'important',
            content: 'En un futuro cambio el diseño del sitio web, pero por ahora el diseño es sencillo porque estoy ocupado. <br/> Si eres designer mandame un re-design por ig, tu le pones precio, si me gusta te pago y te pongo en los créditos de la pagina <3',
            date: '5 de mayo de 2024',
        },
        {
            id: 'Todo es alte <3',
            title: 'Todo es alte <3',
            type: 'info',
            content: 'Todo lo que hago lo hago de corazón. <br/> Todos mis albums tienen una historia por detrás. <br/> No son letras sin sentimiento, son los recuerdos y emociones mas bonitas de mi vida <3. <br/> Si eres fanático, gracias <3. <br/> Disfruta de mis canciones <3. <br/> Gracias por pasarte y que Dios te bendiga <3.',
            date: '5 de mayo de 2024',
        }
    ]
}