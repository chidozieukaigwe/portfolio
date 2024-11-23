"use client"

import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { useState } from "react"
import { sendContactForm } from "@/lib/sendContactForm"


export default function Form() {

    const [formData, setFormData] = useState(null)
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = async (e) => {

        try {
            e.preventDefault()
            setError(null)
            setLoading(true)

            if (!formData.name || !formData.email || !formData.message){
                return
            }
           await sendContactForm(formData)
            setLoading(false)
            setSuccess(true)
            
        } catch (error) {
            console.error(error)
            setLoading(false)
            setError(true)
            
            
        }
 
    }

    if (success) {
        return <p>Message sent successfully!</p>  // Show success message after form submission
    }

    if (error) {
        return <p>Error sending message. Please try again later.</p> 
    }

    if (loading){
        return <p>Sending Message...</p>  // Show loading state while submitting the form
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

