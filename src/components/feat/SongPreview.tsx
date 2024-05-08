import type { ArtInfo } from "@/models/arte.model"
import { frontRoutes } from "@/models/routes.model"
import { IconDots } from "@tabler/icons-react"
import type { FC } from "react"
import { Badge } from "../ui/Badge"
import { Image } from "../ui/Image/Image"

interface SongPreviewProps {
    songInfo: ArtInfo
    index: number
}
export const SongPreview: FC<SongPreviewProps> = ({ songInfo, index }) => {
    return (
        <a
            href={frontRoutes.dynamics.song.path(songInfo.slug)}
            className="select-none flex items-center gap-4 no-underline text-inherit font-medium text-zinc-200 hover:!text-zinc-200 p-2 hover:bg-zinc-200/5 rounded-md"
        >
            <div className="pl-4">
                <span className="text-2xl text-zinc-300 font-bold">{index + 1}</span>
            </div>
            <div className="flex items-center flex-grow">
                <div className="flex items-center gap-2">
                    <Image
                        src={songInfo.image}
                        alt="Calls album image"
                        height="48px"
                        width="48px"
                    />
                    <span className="text-xl font-semibold"> {songInfo.title} </span>
                </div>
                <div className="flex text-xs gap-1 items-center ml-2">
                    {
                        songInfo.tags.map((tag) => (
                            <Badge key={tag}>{tag}</Badge>
                        ))
                    }
                </div>
                <div className="ml-2 flex items-center text-xs gap-1">
                    <span className="text-zinc-400 italic text-[0.7rem]">by</span>
                    <span className="hover:underline">
                        {
                            new Intl.ListFormat().format(songInfo.artists)
                        }
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-1 text-xs">
                <button className="hover:bg-zinc-50/5 p-1 rounded-md">
                    <IconDots />
                </button>
            </div>
        </a>
    )
}
