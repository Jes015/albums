import type { BaseComponentProps } from "@/models/components.model"
import type { NotificationType } from "@/models/notifications.model"
import { useNotificationStore } from "@/services/zustand/notificaitons.zustand"
import { IconAlertCircleFilled, IconHeartFilled, IconUrgent, IconX } from "@tabler/icons-react"
import { type FC } from "react"

interface NotificationProps extends BaseComponentProps {
    data: NotificationType
}

export const Notification: FC<NotificationProps> = ({ data, ...props }) => {
    const [removeNotification] = useNotificationStore((state) => [state.removeNotification])

    const handleOnClickToClose = () => {
        removeNotification(data.id)
    }

    return (
        <div
            className="peer-checked:[transition-duration:0.2s] z-[40000] [transition-duration:0.4s] transition-transform flex flex-col gap-1 self-end max-w-80 bg-zinc-900/95 backdrop-blur-sm rounded-md text-zinc-100 border-2 border-zinc-800"
            {...props}
        >
            <header
                className="flex mt-1 justify-between items-center p-2 !pt-1 border-b-2 border-b-zinc-700/40"
            >
                <div className="flex items-center gap-1">
                    {
                        data.type === 'info' && (
                            <IconHeartFilled
                                className="text-red-400"
                                width={17}
                                height={17}
                            />
                        )
                    }
                    {
                        data.type === 'important' && (
                            <IconUrgent
                                stroke={2}
                                className="text-yellow-400/90"
                                width={17}
                                height={17}
                            />
                        )
                    }
                    {
                        data.type === 'warning' && (
                            <IconAlertCircleFilled
                                className="text-zinc-100"
                                width={17}
                                height={17}
                            />
                        )
                    }
                    <span
                        className="font-semibold text-xs pt-[0.05rem] text-zinc-200"
                    >
                        {data.title}
                    </span>
                </div>
                <button
                    aria-label="hide Window TODO:ADD WINDOWS NAME FOR ACCESSIBILITY"
                    onClick={handleOnClickToClose}
                >
                    <IconX aria-hidden='true' stroke={2} width={18} height={18} />
                </button>
            </header>
            <div className="px-2 text-xs text-pretty text-zinc-200">
                <p className="text-pretty" dangerouslySetInnerHTML={{ __html: data.content }} />
            </div>
            <footer className="px-2 pb-1 self-end">
                <time className="text-[0.58rem] font-bold italic text-zinc-400">{data.date}</time>
            </footer>
        </div>
    )
}