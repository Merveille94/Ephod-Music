import React from 'react'
import Image from 'next/image'

const LabelHistory = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto py-16 px-4 text-center">
                <h2 className="text-3xl text-gray-600 mb-4">Our History</h2>
                <h3 className="text-4xl font-bold mb-8">THE LABEL</h3>

                <p className="text-lg leading-relaxed mb-12 text-gray-700">
                    First of its kind, an opportunity to bring out young talents with us through our organization,
                    spirit of special music. As both a music record label and performance powerhouse, we
                    deliver exceptional live performances, high-quality studio recordings, and artist development
                    services. Our mission is to nurture and promote talents that recognize all the hard and soft skills
                    of industry standards. Ephod Music offers a range of services including an organization,
                    recording, distribution, and talent management, ensuring that each artist we work with
                    reaches their full potential and connects deeply with their audience.
                </p>

                <div className="flex justify-center">
                    <Image
                        src="/images/sign.png"
                        alt="Signature"
                        width={150}
                        height={80}
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    )
}

export default LabelHistory