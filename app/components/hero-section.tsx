'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Button } from './ui/button'
import { SwiperNavBtn } from './ui/SwiperNavBtn'
import face from '../../public/images/face-hero.svg'
import { FaChevronRight } from 'react-icons/fa'

const heroSlides = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 2,
        title: 'Sed ut perspiciatis unde omnis',
        description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    },
    {
        id: 3,
        title: 'Ut enim ad minima veniam',
        description: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    },
]

export default function HeroSection() {
    return (
        <section className="">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                effect={'cards'}
                autoplay={{ delay: 5000 }}
                className=""
            >
                {heroSlides.map((slide) => (
                    <SwiperSlide key={slide.id} className="bg-[url(/images/hero-bg.svg)]  bg-no-repeat bg-cover ">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-10 h-100">
                            <div className="flex items-center justify-center lg:hidden">
                                <Image
                                    src={face}
                                    alt="Hero Face"
                                    className='rounded-3xl md:block '
                                />
                            </div>
                            <div className='flex flex-col md:justify-center md:items-start items-center'>
                                <h1 className="text-4xl md:text-6xl text-[#7AA65A] mb-4 text-center md:text-left">
                                    {slide.title}
                                </h1>
                                <p className="font-light text-[#7AA65A] mb-6 hidden md:block">
                                    {slide.description}
                                </p>
                                <div className=" flex flex-col md:justify-center md:items-start items-center gap-4">
                                    <div className='flex md:flex-row flex-col gap-4 md:justify-center md:items-start items-center'>
                                        <Button variant="default" className="bg-[#7AA65A] w-[226px] h-[56px] sm:h-auto justify-evenly
                                             text-white">
                                            <span>SHOP NOW</span> <FaChevronRight />
                                        </Button>
                                        <span className='block sm:hidden pt-4 text-black cursor-pointer'>TAKE THE QUIZ</span>
                                        <Button variant="outline" className="border-[#7AA65A] md:flex hidden w-[226px] text-[#7AA65A] justify-evenly ">
                                            <span>TAKE THE QUIZ</span> <FaChevronRight />
                                        </Button>
                                    </div>
                                    <SwiperNavBtn />
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <Image
                                    src={face}
                                    alt="Hero Face"
                                    className='rounded-3xl lg:block hidden'
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}