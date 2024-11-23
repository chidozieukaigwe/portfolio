import Image from "next/image"
import DevImg from "./DevImg"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { User2, MailIcon, PhoneCall, Briefcase, PenToolIcon } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

const infoData = [
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
                year: ' January 2023 - October 2023',
                role: 'Full Stack Engineer',
                company: 'Sony Music Entertainment',
                type: 'Contract'
            },
            {
                year: 'May 2022 - October 2022',
                role: 'Senior PHP Developer',
                company: 'Electroneum',
                type: 'contract'
            },
            {
                year: 'May 2021 - December 2021',
                role: 'CMS Engineer',
                company: 'Zavamed',
                type: 'Full Time'
            },


        ]

    }
]

const skillsData = [
    {
        title: 'Technical Skills',
        data: [
            {
                name: 'PHP',
                desc: 'PHP is the core programming language I use to develop applications, whether it is using raw PHP to build an API or using a framework such as Symfony/Laravel for code architecture, application development and efficiency in my code'
            },
            {
                name: 'Javascript',
                desc: 'I am also proficient in developing full stack applications in javascript, utilizing frameworks such as Express.js to help speed up development; whilst using frontend javascript frameworks like React.js or Next.js for consumer facing interfaces.'
            },
            {
                name: 'HTML5 + CSS3',
                desc: 'Proficient in creating responsive layouts, utilizing CSS preprocessors (Sass, Less), and implementing cross-browser compatibility.'
            },
            {
                name: 'Cloud Computing',
                desc: 'Experienced in leveraging cloud platforms to build scalable and reliable applications (Heroku, AWS, Vultr).'
            },
         
        ]
    }
]

export default function About() {

    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    }

    return (
        <section className="xl:h-[900px] pb-12 py-24 xl:mb-20">
            <div className="container mx-auto py-10 px-10">
                <h2 className="section-title mb-8 text-center mx-auto pt-20">About Me</h2>
                <p className="subtitle text-center mx-auto  mb-8 xl:mb-16 "> </p>



                <div className="flex flex-col xl:flex-row">
                    {/* image */}
                    <div className="hidden xl:flex flex-1 relative">
                        <DevImg containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative" imgsrc="/about/webdeveloper.jpg" />
                    </div>
                    {/* tabs */}
                    <div className="flex-1">
                        <Tabs defaultValue="experience">
                            <TabsList className="w-full grid xl:grid-cols-2 xl:max-w-[520] xl:border dark:border-none">
                                {/* <TabsTrigger className="w-[162px] xl:w-auto" value="personal">Personal Info</TabsTrigger> */}
                                <TabsTrigger className="w-[162px] xl:w-auto" value="experience">Experience</TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">Skills</TabsTrigger>
                            </TabsList>
                            <div className="text-lg mt-12 xl:mt-8">
                                {/* Personal */}
                                {/* <TabsContent value="personal">
                                    <div className="text-center xl:text-left">
                              
                                        <h3 className="h3 mb-4">Unmatched Service Quality for Over 5 Years</h3>
                                        <p className="subtitle max-w-xl mx-auto xl:mx-0">I specialize in crafting intuitive web applications with cutting edge technology, delivering dynamic and engaging user experiences.</p>
                                   
                                        <div className=" gap-4 mb-12">
                                            {infoData.map((item, index) => (
                                                <div key={index} className="flex items-center gap-x-4 mx-auto Xl:mx-0">
                                                    <div className="text-primary">{item.icon}</div>
                                                    <div>{item.text}</div>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </TabsContent> */}
                                <TabsContent value="experience">
                                    {/* experience */}
                                    <div>
                                        {/* experience & education wrapper */}
                                        <div>
                                            {/* experience */}
                                            <div>
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <Briefcase />
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
                                                                    <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                                                                    <div className="text-base leading-none text-muted-foreground mb-2"> {role}</div>
                                                                    <div className="text-base font-medium mb-2" > {year}</div>
                                                                    <div className="text-base font-medium mb-2"> {type}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                            <div className="mx-auto text-center">
                                                <Link href={"/experience"}>
                                                    <Button>
                                                        View All
                                                    </Button>
                                                </Link>

                                            </div>

                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="skills">
                                    <div>
                                        <h3 className="h3 mb-8 text-center xl:text-left">
                                            Core Technical Skills
                                        </h3>
                                        {/* experience & education wrapper */}
                                        <div>

                                            <div>
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <PenToolIcon />
                                                    <h3 className="capitalize font-medium py-4">
                                                        What I Use Everyday
                                                        {/* {getData(skillsData, 'Technical Skills').title} */}
                                                    </h3>
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
