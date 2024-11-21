"use client"

import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react"
import { Button } from "./ui/button" 
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"


export default function Form() {
  return (
    <form className="flex flex-col gap-y-4">
        <div className="relative flex items-center">
            <Input type="name" id="name" placeholder="name"/>
            <User className="absolute right-6" size={20}/>
        </div>
        <div className="relative flex items-center">
            <Input type="email" id="email" placeholder="example@example.com"/>
            <MailIcon className="absolute right-6" size={20}/>
        </div>
        <div className="relative flex items-center">
            <Textarea id="message" placeholder="Type your message here..."/>
            <MessageSquare className="absolute top-4 right-6" size={20}/>
        </div>
        <Button className="flex items-center gap-x-1 max-w-[166px]">
            Let's Talk 
            <ArrowRightIcon size={20}/>
        </Button>
    </form>
  )
}
