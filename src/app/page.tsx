'use client';
import Script from 'next/script';
import { AnimatedText } from './components/FramerText';
import { FaDiscord, FaLinkedin, FaYoutubeSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import ServerStatus from '@/components/scripts/ServerStatus';
export default function Home() {
    return (
        <>
            <div className="gradient-bg absolute m-0 p-0  ">
                <svg xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur
                                in="SourceGraphic"
                                stdDeviation="10"
                                result="blur"
                            />
                            <feColorMatrix
                                in="blur"
                                mode="matrix"
                                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                                result="goo"
                            />
                            <feBlend in="SourceGraphic" in2="goo" />
                        </filter>
                    </defs>
                </svg>
                <div className="gradient-container">
                    <div className="g1"></div>
                    <div className="g2"></div>
                    <div className="g3"></div>
                    <div className="g4"></div>
                    <div className="g5"></div>
                </div>
            </div>
            <div className="gradient-bg absolute inset-0 overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur
                                in="SourceGraphic"
                                stdDeviation="10"
                                result="blur"
                            />
                            <feColorMatrix
                                in="blur"
                                mode="matrix"
                                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                                result="goo"
                            />
                            <feBlend in="SourceGraphic" in2="goo" />
                        </filter>
                    </defs>
                </svg>
                <div className="gradient-container m-0 p-0">
                    <div className="g1"></div>
                    <div className="g2"></div>
                    <div className="g3"></div>
                    <div className="g4"></div>
                    <div className="g5"></div>
                </div>
            </div>
            <div className="flex min-h-screen flex-col ">
                <section className="flex flex-1 flex-col">
                    <nav className=" inset-0 top-0 z-50 hidden items-center justify-center pt-4 text-white md:visible md:sticky md:top-0 md:flex ">
                        <ul className="flex space-x-8 text-nowrap text-4xl opacity-70 md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                            <li>
                                <div className="select-none ">
                                    <span className="font-pixel opacity-100">
                                        S
                                    </span>
                                    <span className="font-pixel opacity-80">
                                        S
                                    </span>
                                    <span className="font-pixel opacity-60">
                                        S
                                    </span>
                                    <span className="font-pixel opacity-40">
                                        S
                                    </span>
                                </div>
                            </li>
                            <li>
                                <a href="#" className="hover:text-black">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-black">
                                    About Me
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-black">
                                    My Work
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-black">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="m-auto flex h-full flex-1 flex-col items-center justify-center text-center 2xl:mx-auto 2xl:max-w-[1440px]">
                        <div className="relative m-auto flex items-center justify-center text-white opacity-70">
                            <div className="flex flex-col md:my-20">
                                <h1 className="animate-slidein300 text-2xl opacity-0 md:text-nowrap md:text-5xl md:font-semibold">
                                    Hi!👋 My name is{' '}
                                    <span className=" drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                                        <AnimatedText
                                            el="h2"
                                            text={['Samuel Gonzalez']}
                                            className=" text-2xl"
                                            // repeatDelay={10000}
                                        />
                                    </span>
                                </h1>
                                <h2 className="animate-slidein500 text-base opacity-0 md:text-center md:text-lg md:font-thin">
                                    I learn, innovate, and craft solutions
                                    tailored <br />
                                    <span className="underline">
                                        to your needs.
                                    </span>
                                </h2>
                                <div className="relative flex justify-center">
                                    <ul className="flex flex-row gap-8 p-4 text-2xl">
                                        <li>
                                            <a href="">
                                                <FaDiscord />
                                            </a>
                                        </li>

                                        <li>
                                            <a href="">
                                                <MdEmail />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <FaYoutubeSquare />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <FaLinkedin />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 2xl:mx-auto 2xl:max-w-[1440px]">
                        {/* <ArrowDownCircleIcon /> */}
                    </div>
                </section>
                {/* SLIDE 2 */}
                <section className="  bg-white">
                    <div className="text-black">
                        <ServerStatus />
                    </div>
                </section>
            </div>
        </>
    );
}
