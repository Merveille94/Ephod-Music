import React from 'react'
import { MdManageAccounts } from "react-icons/md";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

const LabelServices = () => {
    const services = [
        {
            icon: <MdManageAccounts size={32} />,
            title: "MANAGEMENT",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum sit amet lorem ipsum dolor sit amet consectetur adipiscing elit ipsum sit amet"
        },
        {
            icon: <BsMusicNoteBeamed size={32} />,
            title: "PRODUCTION",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum sit amet lorem ipsum dolor sit amet consectetur adipiscing elit ipsum sit amet"
        },
        {
            icon: <FaRegLightbulb size={32} />,
            title: "PROMOTION",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum sit amet lorem ipsum dolor sit amet consectetur adipiscing elit ipsum sit amet"
        },
        {
            icon: <TbTruckDelivery size={32} />,
            title: "DISTRIBUTION",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum sit amet lorem ipsum dolor sit amet consectetur adipiscing elit ipsum sit amet"
        }
    ];

    return (
        <div className="bg-black text-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="text-start space-y-4 p-6">
                            <div className="flex justify-start items-center">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold tracking-wider">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LabelServices