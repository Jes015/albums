import { useEffect, useRef, useState, type LegacyRef } from "react"
import styles from './image.module.css'

interface IProps {
    src: string
    alt: string
    height: string
    width: string
    lazy?: boolean
    className?: string
}

export const Image: React.FC<IProps> = ({ className, height, width, src, alt, lazy = false }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const imageRef = useRef<HTMLImageElement>()

    useEffect(() => {
        if (imageRef.current?.complete) {
            setIsLoading(false)
            return
        }

        const handleOnLoad = () => {
            setIsLoading(false)
        }

        const handleOnError = () => {
            setError(true)
        }

        imageRef.current?.addEventListener('load', handleOnLoad)

        imageRef.current?.addEventListener('error', handleOnError)

        return () => {
            imageRef.current?.removeEventListener('load', handleOnLoad)
            imageRef.current?.removeEventListener('error', handleOnError)
        }
    }, [])

    return (
        <div
            style={{
                width,
                height
            }}
            className={
                [
                    styles.image__container,
                    isLoading && !error ? styles['image__container--loading'] : styles['image__container--load'],
                    className
                ].join(' ')
            }
        >
            {
                !error && (
                    <img
                        style={{
                            width,
                            height
                        }}
                        className={
                            [
                                styles.image,
                                isLoading ? styles['image--loading'] : styles['image--load']
                            ].join(' ')
                        }
                        ref={imageRef as LegacyRef<HTMLImageElement>}
                        loading={lazy ? 'lazy' : 'eager'}
                        {...{ src, alt }}
                    // onLoad={} use onLoad only with client:only="react" otherwise onLoad will not work if it's the first time that astro load the astro islands
                    />
                )
            }
            {
                error && (
                    <div
                        className="flex flex-col justify-center items-center h-full"
                    >
                        <span className="text-xs font-semibold uppercase text-zinc-200 opacity-80">{alt}</span>
                        <span className="font-bold text-yellow-200">Something went wrong loading the image.</span>
                    </div>
                )
            }
        </div>
    )
}