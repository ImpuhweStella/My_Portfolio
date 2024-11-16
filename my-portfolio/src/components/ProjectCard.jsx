import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

function ProjectCard({ title, description, link }) {
    return (
        <div className="bg-[#13132b] border border-gray-700 rounded-lg p-6 flex flex-col items-center text-center space-y-4">

            <h2 className="text-white text-xl font-semibold">{title}</h2>
            <p className="text-sm text-gray-400">{description}</p>
            <div className="flex">
                <a href={link} className="bg-[#0d0d1f] border border-white text-white rounded-md px-20 py-3 mt-auto flex items-center gap-2">
                    Learn More <IoIosArrowForward />
                </a>
            </div>

        </div>
    );
}

export default ProjectCard;
