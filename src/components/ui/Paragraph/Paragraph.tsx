import type { BaseComponentType } from "@/models/components.model"
import { IconArrowDown, IconArrowUp } from "@tabler/icons-react"
import { useState } from "react"

export const Paragraph: BaseComponentType = ({ children, ...props }) => {
    const [displayLargeText, setDisplayLargeText] = useState(false)

    const handleOnClickToShowMore = () => {
        setDisplayLargeText((state) => !state)
    }

    return (
        <div
            className="relative overflow-hidden"
            style={{
                maxHeight: displayLargeText ? '100%' : '18rem'
            }}
            {...props}
        >
            <p
                className="text-zinc-200 mt-1 font-semibold text-center lg:text-start text-pretty"
            >
                {children}
            </p>
            <div
                className="bottom-0 left-0 w-full flex justify-center items-center"
                style={{
                    position: !displayLargeText ? 'absolute' : 'relative'
                }}
            >
                {!displayLargeText && <div className="absolute w-full h-16 bottom-0 z-10 [background:linear-gradient(0deg,_rgba(24,24,27,1)_0%,_rgba(255,255,255,0)_100%)]"></div>}
                <button
                    className="absolute bottom-0 pb-2 flex items-center z-40 gap-[0.1rem] text-blue-300 font-bold hover:underline"
                    onClick={handleOnClickToShowMore}
                    style={{
                        position: !displayLargeText ? 'absolute' : 'relative'
                    }}
                >
                    {!displayLargeText && (
                        <>
                            Show more
                            <IconArrowDown className="pb-[0.1rem]" width={20} height={20} />
                        </>
                    )
                    }
                    {displayLargeText && (
                        <>
                            Hide
                            <IconArrowUp className="pb-[0.1rem]" width={20} height={20} />
                        </>
                    )
                    }
                </button>
            </div>
        </div>
    )
}