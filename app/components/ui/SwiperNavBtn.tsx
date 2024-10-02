'use client'

import React from 'react'
import { useSwiper } from 'swiper/react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { cn } from '../../lib/utils'

interface SwiperNavBtnProps {
    className?: string
}

export function SwiperNavBtn({ className }: SwiperNavBtnProps) {
    const swiper = useSwiper()

    return (
        <div className={cn('flex items-center gap-2 mt-10 place-content-center', className)}>
            <button
                onClick={() => swiper.slidePrev()}
                className="text-center items-center justify-center flex w-[41px] h-[31px] rounded-full text-[#7AA65A] border-2 border-[#7AA65A] hover:bg-[#7AA65A] hover:text-white"
                aria-label="Previous slide"
            >
                <FaArrowLeft className="w-4 h-4" />
            </button>
            <button
                onClick={() => swiper.slideNext()}
                className="text-center items-center justify-center flex rounded-full w-[41px] h-[31px] text-[#7AA65A] border-2 border-[#7AA65A] hover:bg-[#7AA65A] hover:text-white"
                aria-label="Next slide"
            >
                <FaArrowRight className="w-4 h-4" />
            </button>
        </div>
    )
}

export function SwiperNavBtnPrev({ className }: SwiperNavBtnProps) {
    const swiper = useSwiper()

    return (
        <button
            onClick={() => swiper.slidePrev()}
            className={cn(
                "p-2 rounded-full bg-white text-gray-800 ",
                className
            )}
            aria-label="Previous slide"
        >
            <FaArrowLeft className="w-6 h-6" />
        </button>
    )
}

export function SwiperNavBtnNext({ className }: SwiperNavBtnProps) {
    const swiper = useSwiper()

    return (
        <button
            onClick={() => swiper.slideNext()}
            className={cn(
                "p-2 rounded-full bg-white text-gray-800 ",
                className
            )}
            aria-label="Next slide"
        >
            <FaArrowRight className="w-6 h-6" />
        </button>
    )
}