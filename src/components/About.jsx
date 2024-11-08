import Image from "next/image"
import DevImg from "./DevImg"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { User2, MailIcon, PhoneCall, Briefcase } from "lucide-react"

const infoData = [
    {
        icon: <User2 size={20} />,
        text: "Chido Ukaigwe",
    },
    {
        icon: <PhoneCall size={20} />,
        text: "07534420485",
    },
    {
        icon: <MailIcon size={20} />,
        text: "chidodesigns@gmail.com",
    },
]

const experienceData = [
    {
        title: 'experience',
        data: [
            {
                year: '2010 - 2015',
                role: 'Full Stack Engineer',
                company: 'University of Nigeria, Nsukka',
                type: 'contract'
            },
            {
                year: '2010 - 2015',
                role: 'Bachelor of Computer Science',
                company: 'University of Nigeria, Nsukka',
                type: 'contract'
            },
            {
                year: '2010 - 2015',
                role: 'Bachelor of Computer Science',
                company: 'University of Nigeria, Nsukka',
                type: 'contract'
            },

        ]

    }
]

const skillsData = [
    {
        title: 'Technical Skills',
        data: [
            {
                name: 'HTML,  CSS',
                desc: 'I have a deep understanding of HTML, CSS, and JavaScript.'
            },
            {
                name: 'HTML',
                desc: 'I have a deep understanding of HTML, CSS, and JavaScript.'
            },
            {
                name: 'HTML',
                desc: 'I have a deep understanding of HTML, CSS, and JavaScript.'
            }
        ]
    }
]

export default function About() {

    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    }

    return (
        <section className="xl:h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto pt-20 px-10">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto pt-20">About Me</h2>
                <div className="flex flex-col xl:flex-row">
                    {/* image */}
                    <div className="hidden xl:flex flex-1 relative">
                        <DevImg containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative" imgsrc="/about/webdeveloper.jpg" />
                    </div>
                    {/* tabs */}
                    <div className="flex-1">
                        <Tabs>
                            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520] xl:border dark:border-none">
                                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">Personal Info</TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="experience">Experience</TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">Skills</TabsTrigger>
                            </TabsList>
                            <div className="text-lg mt-12 xl:mt-8">
                                {/* Personal */}
                                <TabsContent value="personal">
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-4">Unmatched Service Quality for Over 10 Years</h3>
                                        <p className="subtitle max-w-xl mx-auto xl:mx-0">I specialize in crafting intuitive websites with cutting edge technology, delviering dynamic and engaging user experiences.</p>
                                        {/* icons */}
                                        <div className="grid xl:grid-cols-2 gap-4 mb-12"> 
                                            {infoData.map((item, index) => (
                                                <div key={index} className="flex items-center gap-x-4 mx-auto Xl:mx-0">
                                                   <div className="text-primary">{item.icon}</div>
                                                   <div>{item.text}</div>
                                                </div>
                                            ))}
                                        </div>
                                     
                                    </div>
                                </TabsContent>
                                <TabsContent value="experience">
                                       {/* experience */}
                                       <div>
                                            <h3 className="h3 mb-8 text-center xl:text-left">
                                                My Awesome Journey
                                            </h3>
                                            {/* experience & education wrapper */}
                                            <div>
                                                {/* experience */}
                                                <div>
                                                   <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <Briefcase/>
                                                    <h4 className="capitalize font-medium py-4">
                                                        {getData(experienceData, 'experience').title}
                                                    </h4>
                                                   </div>
                                                   {/* list */}
                                                   <div className="flex flex-col gap-y-8">
                                                    {getData(experienceData, 'experience').data.map((item, index) => {
                                                         const { year, role, company, type } = item;
                                                         return (
                                                            <div key={index} className="flex gap-x-8 group">
                                                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                </div>
                                                                <div>
                                                                    <div className="font-semibold text-xl leading-none mb-2">Company:{company}</div>
                                                                    <div className="text-lg leading-none text-muted-foreground mb-4">Role: {role}</div>
                                                                    <div className="text-base font-medium" >Period: {year}</div>
                                                                    <div className="text-base font-medium">Type: {type}</div>
                                                                </div>
                                                            </div>
                                                         )
                                                    })}
                                                   </div>
                                                </div>
                                            </div>
                                        </div>
                                </TabsContent>
                                <TabsContent value="skills">
                                <div>
                                            <h3 className="h3 mb-8 text-center xl:text-left">
                                                Technical Skills
                                            </h3>
                                            {/* experience & education wrapper */}
                                            <div>
                                                {/* experience */}
                                                <div>
                                                   <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <Briefcase/>
                                                    <h4 className="capitalize font-medium py-4">
                                                        {getData(skillsData, 'Technical Skills').title}
                                                    </h4>
                                                   </div>
                                                   {/* list */}
                                                   <div className="flex flex-col gap-y-8">
                                                    {getData(skillsData, 'Technical Skills').data.map((item, index) => {
                                                         const { name, desc } = item;
                                                         return (
                                                            <div key={index} className="flex gap-x-8 group">
                                                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                </div>
                                                                <div>
                                                                    <div className="font-semibold text-xl leading-none mb-2">{name}</div>
                                                                    <div className="text-lg leading-none text-muted-foreground mb-4"> {desc}</div>
                                                            
                                                                </div>
                                                            </div>
                                                         )
                                                    })}
                                                   </div>
                                                </div>
                                            </div>
                                        </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}
