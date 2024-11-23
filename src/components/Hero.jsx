"use client";
import Link from "next/link"
import { Button } from "./ui/button"
import { Download, Send } from "lucide-react"

import {RiBriefcase4Fill, RiBriefcase5Fill, RiTeamFill, RiTodoFill, RiArrowDownSLine  } from "react-icons/ri"

import DevImg from "./DevImg"
import Badge from "./Badge"
import Socials from "./Socials"

export default function Hero() {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-no-repeat bg-bottom dark:bg-black-100">
        <div className="container mx-auto px-10">
            <div className="flex justify-between gap-x-8">
                {/* text */}
                <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                    <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Full Stack Developer</div>
                    <h1 className="h1 mb-4">Hello, my name is Chido Ukaigwe</h1>
                    <p className="subtitle max-w-[490px] mx-auto xl:mx-0">I am a highly motivated, self-starting, results oriented full stack developer; with a passion for crafting innovative, user-centric websites, single page applications and RESTful API’s</p>
                    {/* buttons */}
                    <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                        <Link href="/contact">
                            <Button className="gap-x-2">
                                Contact me <Send size={18} />
                            </Button>
                        </Link>
                        <Link href="/cv/chido-ukaigwe-full-stack-developer-cv.pdf" download target="_blank">
                        <Button className="gap-x-2" variant="secondary">
                            Download CV <Download size={18} />
                        </Button>
                        </Link>
                     
                    </div>
                    {/* socials */}
                    <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconStyles="text-foreground text-[22px] hover:text-primary transition-all" />
                </div>
                {/* image */}
                <div className="hidden xl:flex relative">
                    {/* badge 1 */}
                    <Badge endCountNum={6} badgeText={'Years Of PHP experience'} containerStyles="absolute top-[24%] -left-[5rem]"/>
                    {/* badge 2 */}
                    <Badge  endCountNum={5} badgeText={'Years Of Nodejs + Reactjs experience'} containerStyles="absolute top-[80%] -left-[1rem]"/>
                     {/* badge 3 */}
                     <Badge  endCountNum={6} badgeText={'Years Of HTML + CSS experience'} containerStyles="absolute top-[55%] -right-8"/>
                    <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"> </div>
                    <DevImg containerStyles="bg-hero_shape w-[510px] h-[462] bg-no-repeat" imgsrc={'/hero/webdeveloper-modified.jpg'}/>
                </div>
            </div> 
            {/* icon */}
            <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
            <RiArrowDownSLine className="text-3xl text-primary" />
            </div>
        </div>
    </section>
  )
}
