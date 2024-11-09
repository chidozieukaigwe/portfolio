'use client';

import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

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
    category: 'vueJs',
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
    category: 'php',
    name: "Envision Website",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, placeat!',
    link: '/',
    github: '/'
  },
  {
    image: '/work/1.png',
    category: 'php',
    name: "PHP Website",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, placeat!',
    link: '/',
    github: '/'
  }
]
//  remove category duplicates
const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((project) => project.category))
];

function Projects() {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');
  const filteredProjects = projectData.filter((project) => {
    return category === 'all projects' ? project : project.category === category;
  });
  
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto md:px-10">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My Projects</h2>
        <Tabs defaultValue={category}>
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger key={index} value={category} className="capitalize w-[162px] md:w-auto" onClick={() => {
                  setCategory(category)
                }}>
                  {category}
                </TabsTrigger>
              )
            })}
          </TabsList>
          <div> 
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent key={index}  value={category}>
                  <ProjectCard project={project} />
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects 