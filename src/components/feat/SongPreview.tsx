import type { ArtInfo } from "@/models/arte.model"
import { frontRoutes } from "@/models/routes.model"
import { IconDots, IconHeartFilled } from "@tabler/icons-react"
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
            href={songInfo.state === 'soon' ? undefined : frontRoutes.dynamics.song.path(songInfo.slug)}
            className="select-none flex items-center gap-4 no-underline text-inherit font-medium text-zinc-200 hover:!text-zinc-200 p-2 hover:bg-zinc-200/5 rounded-md"
        >
            <div className="sm:pl-4 w-[38px] flex justify-end flex-shrink-0">
                <span className="text-2xl text-zinc-300 font-bold">{index + 1}</span>
            </div>
            <div className="flex-grow flex-col sm:flex-row flex sm:items-center gap-2">
                <div
                    className="flex items-center"
                    style={{
                        opacity: songInfo.state === 'soon' ? 0.4 : 1
                    }}
                >
                    <div className="flex items-center gap-2">
                        <Image
                            src={songInfo.image}
                            alt="Calls album image"
                            height="48px"
                            width="48px"
                            className="flex-shrink-0"
                        />
                        <div>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center sm:gap-1">
                                <span className="text-xl font-semibold"> {songInfo.title} </span>
                                <div className="flex text-xs gap-1 items-center sm:ml-2">
                                    {
                                        songInfo.tags.map((tag) => (
                                            <Badge key={tag}>{tag}</Badge>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="items-center text-xs gap-1 hidden sm:flex">
                                <span className="text-zinc-400 italic text-[0.7rem]">by</span>
                                <span className="hover:underline text-zinc-300">
                                    {
                                        new Intl.ListFormat().format(songInfo.artists)
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-start sm:self-center scale-90 text-xs">
                    {songInfo.state === 'soon' && <Badge className="flex items-center gap-1" type="album">Sale pronto <IconHeartFilled className="text-red-400" width={20} height={20} /></Badge>}
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

