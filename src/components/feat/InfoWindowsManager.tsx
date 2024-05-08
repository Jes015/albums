import type { BaseComponentType } from "@/models/components.model"
import { useNotificationStore } from "@/services/zustand/notificaitons.zustand"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { Notification } from "./Notification/Notification"

export const InfoWindowsManager: BaseComponentType = () => {
    const notifications = useNotificationStore((state) => state.notifications)
    
    const [parent] = useAutoAnimate()

    return (
        <div
            className="fixed z-50 top-0 right-0 m-4 max-w-80 overflow-hidden"
        >
            <div
                className="flex flex-col gap-2 z-50"
                ref={parent}
            >
                {
                    notifications.map((notification) => (
                        <Notification key={notification.id} data={notification} />
                    ))
                }
            </div>
        </div>
    )
}