import type { NotificationArray } from "./models/notifications.model"

export interface PageDataType {
    pageTitle: string
    notifications: NotificationArray
}

export const pageData: PageDataType = {
    pageTitle: 'joyolababy\'s albums',
    notifications: [
        {
            id: 'Todo es alte <3',
            title: 'Todo es alte <3',
            type: 'info',
            content: 'Todo lo que hago, lo hago de corazón. Todos mis álbumes tienen una historia detrás.<br> No son letras sin sentimiento, son los recuerdos y emociones más bonitos de mi vida <3.<br> Si eres fan, gracias <3.<br> Disfruta de mis canciones <3.<br> Gracias por pasarte y que Dios te bendiga <3.',
            date: '5 de mayo de 2024',
        },
        {
            id: 'info 2 <3',
            title: 'Info 2 <3',
            type: 'important',
            content: 'Quise hacer este sitio web para guardar todos los detalles de mis albums. No quería solo sacarlos sin contexto. En un futuro cambio el diseño del sitio web, pero por ahora el diseño es sencillo porque estoy ocupado. Si eres designer mandame un re-design por ig, tu le pones precio, si me lo quiero usar, te pago y te pongo en los créditos de la pagina <3',
            date: '5 de mayo de 2024',
        }
    ]
}