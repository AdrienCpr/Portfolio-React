import React from 'react';
import { FaLaravel } from "react-icons/fa";
import { SiLivewire } from "react-icons/si";
import { FaPhp } from "react-icons/fa";

import { RiRemixRunFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

import { SiTailwindcss } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { SiUnrealengine } from "react-icons/si";
import { SiGodotengine } from "react-icons/si";

const Skills = ({language}) => {

    const params = {
        "fr": {
            mainSkills: "Compétences principales",
            secondarySkills: "Compétences secondaires",
        },
        "en": {
            mainSkills: "Main Skills",
            secondarySkills: "Secondary Skills",
        },
        "skills": [
            {
                "name": "Laravel",
                "icon": <FaLaravel
                    className={"h-12 w-12 dark:text-gray-400 mb-4 transition-transform transform group-hover:scale-125"}/>,
                "primary": true
            },
            {
                "name": "Livewire",
                "icon": <SiLivewire
                    className={"h-12 w-12 dark:text-gray-400 mb-4 transition-transform transform group-hover:scale-125"}/>,
                "primary": true
            },
            {
                "name": "Php",
                "icon": <FaPhp
                    className={"h-12 w-12 dark:text-gray-400 mb-4 transition-transform transform group-hover:scale-125"}/>,
                "primary": true
            },
            {
                "name": "Remix",
                "icon": <RiRemixRunFill
                    className={"h-12 w-12 dark:text-gray-400 mb-4 transition-transform transform group-hover:scale-125"}/>,
                "primary": true
            },
            {
                "name": "React",
                "icon": <FaReact
                    className={"h-12 w-12 dark:text-gray-400 mb-4 transition-transform transform group-hover:scale-125"}/>,
                "primary": true
            },
            {
                "name": "NodeJs",
                "icon": <FaNodeJs
                    className={"h-12 w-12 dark:text-gray-400 mb-4 transition-transform transform group-hover:scale-125"}/>,
                "primary": true
            },
            {
                "name": "JavaScript",
                "icon": <IoLogoJavascript
                    className={"h-12 w-12 dark:text-gray-400 mb-4 transition-transform transform group-hover:scale-125"}/>,
                "primary": true
            },
            {
                "name": "Tailwind",
                "icon": <SiTailwindcss
                    className={"h-10 w-10 dark:text-gray-400 mb-4 transition-transform transform group-hover:scale-125"}/>,
                "primary": false
            },
            {
                "name": "Postgres",
                "icon": <DiPostgresql
                    className={"h-10 w-10 dark:text-gray-400 mb-4 transition-transform transform group-hover:scale-125"}/>,
                "primary": false
            },
            {
                "name": "UE5",
                "icon": <SiUnrealengine
                    className={"h-10 w-10 dark:text-gray-400 mb-4 transition-transform transform group-hover:scale-125"}/>,
                "primary": false
            },
            {
                "name": "Godot",
                "icon": <SiGodotengine
                    className={"h-10 w-10 dark:text-gray-400 mb-4 transition-transform transform group-hover:scale-125"}/>,
                "primary": false

            }
        ]
    }



    return (
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className={`text-3xl font-bold tracking-tighter sm:text-5xl mb-8
                                text-lightQuaternary
                                dark:text-darkQuaternary`}>{params[language].mainSkills}</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {params["skills"].map((skill, index) => (
                            (skill.primary) ?
                                <div key={index} className="group flex flex-col items-center">
                                    {skill.icon}
                                    <p className="=text-sm opacity-0 group-hover:opacity-100 transition-opacity
                                              text-lightQuaternary
                                              dark:text-darkQuaternary"
                                    >
                                        {skill.name}
                                    </p>
                                </div> :
                                ""
                        ))}
                    </div>
                    <div className="space-y-2">
                        <h3 className={`text-xl font-bold tracking-tighter sm:text-3xl mb-8
                            text-lightQuaternary
                            dark:text-darkQuaternary`}>{params[language].secondarySkills}</h3>
                        <div className="flex flex-wrap justify-center gap-4">

                            {params["skills"].map((skill, index) => (
                                !skill.primary ?
                                    <div key={index} className="group flex flex-col items-center">
                                        {skill.icon}
                                        <p className="text-xs opacity-0 group-hover:opacity-100 transition-opacity
                                          text-lightQuaternary
                                          dark:text-darkQuaternary"
                                        >
                                            {skill.name}
                                        </p>
                                    </div> :
                                    ""
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;