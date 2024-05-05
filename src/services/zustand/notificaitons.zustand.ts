import { pageData } from '@/data'
import type { NotificationArray, NotificationType } from '@/models/notifications.model'
import { create } from 'zustand'

interface NotificationsStore {
    notifications: NotificationArray
    addNotification: (notification: NotificationType) => void
    setNotificationArray: (notifications: NotificationArray) => void
    removeNotification: (notificationId: string) => void
}

export const useNotificationStore = create<NotificationsStore>((set) => ({
    notifications: pageData.notifications,
    addNotification: (newNotification) => set((state) => {
        const newNotificationArray = [...state.notifications, newNotification]

        return ({ notifications: newNotificationArray })
    }
    ),
    setNotificationArray: (newNotificationArray) => set((state) => ({ notifications: newNotificationArray })),
    removeNotification: (notificationId) => set((state) => {
        const newNotificationArray = state.notifications.filter((notification) => notification.id !== notificationId)

        return ({ notifications: newNotificationArray })
    }),
}))