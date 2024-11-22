import { GanttChartSquare, Blocks, Gem } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"


const servicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Web Design',
        description: 'I specialize in crafting custom websites that captivate your audience and drive results. From sleek and modern designs to functional and engaging user experiences.',
        // description: 'I specialize in creating engaging and user-friendly websites for businesses and organizations.',
    },

    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Web Development',
        description: 'I specialize in crafting custom web applications that deliver exceptional user experiences. From simple static websites to complex dynamic web applications.',
    },

    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: 'SEO',
        description: "I specialize in creating engaging and SEO-friendly websites for businesses and organizations. Improving your website's visibility in search engine results."
    },
]

export default function Services() {
  return (
    <section className="mb-12 xl:py-24 px-10">
        <div className="container mx-auto xl:pt-10">
            <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto"> My Services
            </h2>
            {/* grid items */}
            <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
                {servicesData.map((item, index) => {
                    return <Card className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative" key={index}>
                        <CardHeader className="text-primary absolute -top-[60px] h-[100px]">
                            <div className="w-[140px] h-[80px] bg-pink-100 dark:bg-background flex justify-center items-center">{item.icon}</div>
                        </CardHeader>
                        <CardContent className="text-center">
                            <CardTitle className="mb-4">{item.title}</CardTitle>
                            <CardDescription className="text-lg h-[100px]">{item.description}</CardDescription>
                        </CardContent>
                    </Card>
                })}
            </div>
        </div>
    </section>
  )
}
