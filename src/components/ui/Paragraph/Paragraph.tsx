import type { BaseComponentProps } from "@/models/components.model"
import { IconArrowDown, IconArrowUp } from "@tabler/icons-react"
import { useRef, useState, type FC, type LegacyRef } from "react"

interface ParagraphProps extends BaseComponentProps {
    maxHeight?: string
    content: string
}

export const Paragraph: FC<ParagraphProps> = ({ maxHeight, content, children, ...props }) => {
    const paragraphRef = useRef<HTMLDivElement>()

    const [displayLargeText, setDisplayLargeText] = useState(false)

    const handleOnClickToShowMore = () => {
        setDisplayLargeText((state) => {

            if (state) {
                const containerElement = document.getElementById('art-container')
                containerElement?.scrollIntoView({ behavior: 'smooth' })
            }

            return !state
        })
    }

    return (
        <div
            className="relative overflow-hidden transition-all [transition-duration:0.2s]"
            style={{
                maxHeight: displayLargeText ? '100%' : maxHeight ?? '100%'
            }}
            {...props}
        >
            <div
                ref={paragraphRef as LegacyRef<HTMLDivElement>}
                className="text-zinc-200 mt-1 font-medium text-start text-pretty"
                dangerouslySetInnerHTML={{ __html: content }}
            />
            {
                maxHeight != null && content.length > 40 && (
                    <div
                        className="bottom-0 left-0 w-full flex justify-center items-center"
                        style={{
                            position: !displayLargeText ? 'absolute' : 'relative'
                        }}
                    >
                        {!displayLargeText && <div className="absolute w-full h-16 bottom-0 z-10 [background:linear-gradient(0deg,_rgba(24,24,27,1)_0%,_rgba(255,255,255,0)_100%)]"></div>}
                        <button
                            className="select-none absolute [text-shadow:0px_0px_20px_black] bottom-0 pb-2 flex items-center z-40 gap-[0.1rem] text-blue-300 font-bold hover:underline"
                            onClick={handleOnClickToShowMore}
                            style={{
                                position: !displayLargeText ? 'absolute' : 'relative'
                            }}
                        >
                            {!displayLargeText && (
                                <>
                                    Mostrar mas
                                    <IconArrowDown className="pb-[0.1rem]" width={20} height={20} />
                                </>
                            )
                            }
                            {displayLargeText && (
                                <>
                                    Mostrar menos
                                    <IconArrowUp className="pb-[0.1rem]" width={20} height={20} />
                                </>
                            )
                            }
                        </button>
                    </div>
                )
            }
        </div>
    )
}