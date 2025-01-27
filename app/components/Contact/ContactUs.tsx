import React from 'react'

const ContactUs = () => {
    const contacts = [
        {
            title: "Booking",
            name: "Solomon Khan",
            email: "lorem@gmail.com",
            phone: "+2335420188864"
        },
        {
            title: "Press",
            name: "Solomon Khan",
            email: "lorem@gmail.com",
            phone: "+2335420188864"
        },
        {
            title: "Management",
            name: "Solomon Khan",
            email: "lorem@gmail.com",
            phone: "+2335420188864"
        },
        {
            title: "Tour",
            name: "Jason Trace",
            email: "lorem@gmail.com",
            phone: "+2335420188864"
        }
    ]

    return (
        <div className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-4">
                {/* Contact Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {contacts.map((contact, index) => (
                        <div key={index} className="space-y-2">
                            <h3 className="text-2xl font-bold mb-4">{contact.title}</h3>
                            <p className="text-lg">{contact.name}</p>
                            <p className="text-gray-400">{contact.email}</p>
                            <p className="text-gray-400">{contact.phone}</p>
                        </div>
                    ))}
                </div>

                {/* Map Section */}
                <div className="w-full h-[400px] relative">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425345.0838890465!2d-112.40121467500002!3d33.60518773953615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b12ed50a179cb%3A0x8c69c7214760bed!2sPhoenix%2C%20AZ!5e0!3m2!1sen!2sus!4v1705959431119!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        // allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg"
                    />
                </div>
            </div>
        </div>
    )
}

export default ContactUs