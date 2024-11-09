"use client";
import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { Swiper, SwiperSlide } from'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Pagination} from'swiper/modules';

// @NOTES: The video for Swiper Slider is from 2:40hr and when have projects then we can re-add

import ProjectCard from './ProjectCard'

const projectData = [
    {
        image: '/work/4.png',
        category: 'reactJs',
        name: "Soltice Website",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, placeat!',
        link: '/',
        github: '/'
    },
    {
        image: '/work/3.png',
        category: 'reactJs',
        name: "Nexa Website",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, placeat!',
        link: '/',
        github: '/'
    },
    {
        image: '/work/2.png',
        category: 'nextJs',
        name: "Lumina Website",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, placeat!',
        link: '/',
        github: '/'
    },
    {
        image: '/work/1.png',
        category: 'reactJs',
        name: "Envision Website",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, placeat!',
        link: '/',
        github: '/'
    }
]

export default function Work() {

  return (
    <section className="relative mb-12 xl:mb-48">
             <div className="container mx-auto md:px-10">
          {/* text */}
          <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
              <h2 className="section-title mb-4">Latest Projects</h2>
              <p className="subtitle mb-8">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
              <Link href="/projects">
                  <Button>
                    All projects
                  </Button>
              </Link>
          </div>
          {/* slider */}
          <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
            <Swiper className="h-[480px]" slidesPerView={1} breakpoints={{
                640:{
                    slidesPerView: 2,
                    }
                }} spaceBetween={30} modules={[Pagination]} pagination={{clickable: true}}>
            {/* only first 4 projects */}
            {projectData.slice(0, 5).map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <ProjectCard project={project}/>
                  </SwiperSlide>
                )
  
            })}
            </Swiper>
          </div>
    
       
      </div>
    </section>
 
  )
}
