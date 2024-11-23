import Form from "@/components/Form"
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react"


export default function Contact() {
  return (
    <section>
      <div className="container mx-auto px-10">
        {/* Text & illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              <div>Say Hello 👋 </div>
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together</h1>
            <p className="subtitle max-w-[400px]">Want to discuss a project, ask a question, or simply connect? Feel free to reach out. I'm always open to new opportunities and collaborations.</p>
          </div>
          {/* illustration */}
          <div>
          <Form/>
          </div>
          {/* <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div> */}
        </div>
        {/* info text & form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32 ">
          {/* info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-4  xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">

            {/* <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary"/>
              <div>chidodesigns@gmail.com</div>
            </div>
            
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary"/>
              <div>london, Hackney</div>
            </div> */}

            {/* <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary"/>
              <div>07534420485</div>
            </div> */}

            </div>
           {/* <Form/> */}
        </div>
      </div>
    </section>
  )
}
