export interface NotificationType {
    id: string
    title: string
    type: 'info' | 'warning' | 'important'
    content: string
    date: string
}

export type NotificationArray = NotificationType[]