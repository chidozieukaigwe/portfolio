export const sendContactForm = async (data) => {

    try {
        await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
    } catch (error) {
        console.error(error)
        throw new Error('Failed to send contact form')
    }

    
} 