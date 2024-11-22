"use client"

import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { useState } from "react"


export default function Form() {

    const [formData, setFormData] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!formData.name || !formData.email || !formData.message){
            return
        }
        setLoading(true)
        console.log("Loading")
        console.log(formData)
        setTimeout(() => {
            setLoading(false)
            console.log('finshed Loading')
        }, 2000);

        setFormData(formData)

         
    }

    if (loading){
        return <p>Loading...</p>  // Show loading state while submitting the form
    }

    if (!loading){
        return (
        
            <form className="flex flex-col gap-y-4">
                <div className="relative flex items-center">
                    <Input type="text" id="name" placeholder="name" onChange={handleChange} required/>
                    <User className="absolute right-6" size={20} />
                </div>
                <div className="relative flex items-center">
                    <Input type="email" id="email" placeholder="example@example.com" onChange={handleChange} required/>
                    <MailIcon className="absolute right-6" size={20} />
                </div>
                <div className="relative flex items-center">
                    <Textarea id="message" placeholder="Type your message here..." onChange={handleChange} required/>
                    <MessageSquare className="absolute top-4 right-6" size={20} />
                </div>
                <Button className="flex items-center gap-x-1 max-w-[166px]" onClick={handleSubmit} disabled={!formData?.name || !formData?.email || !formData?.message}> 
                    {loading ? 'Sending...' : "Let's Talk"}
                    <ArrowRightIcon size={20} />
                </Button>
            </form>
        )
    }
   

}

