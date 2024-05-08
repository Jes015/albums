import type { BaseComponentProps } from "@/models/components.model"
import type { FC } from "react"

interface BadgeProps extends BaseComponentProps {
    type?: 'default' | 'song' | 'album'
}

export const Badge: FC<BadgeProps> = ({ type = 'default', ...props }) => {
    return (
        <div
            className={
                [
                    'border select-none py-[0.1rem] px-[0.28rem] rounded-md',
                    type === 'default' ? "text-inherit font-medium bg-neutral-900 text-zinc-200 border-neutral-700/70" : '',
                    type === 'album' ? 'bg-red-900/10 text-orange-200 font-semibold border-orange-200/20' : '',
                    type === 'song' ? 'bg-blue-900/10 text-emerald-200 font-semibold border-emerald-200/20' : ''
                ].join(' ')
            }
            {...props}
        />
    )
}
