import React from 'react';

const Skills = () => {

    const skills = [
            {
                "name": "JavaScript",
                "icon" : "developer.png",
                "primary": true
            },
            {
                "name": "Python",
                "icon" : "developer.png",
                "primary": false
            }
        ]


    return (
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className={`text-3xl font-bold tracking-tighter sm:text-5xl mb-8
                                text-lightQuaternary
                                dark:text-darkQuaternary`}>Compétences principales</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {skills.map((skill, index) => (
                            (skill.primary) ?
                                <div key={index} className="group flex flex-col items-center">
                                    <img
                                        alt={`icon ${skill.name}`}
                                        className="h-12 w-12 dark:text-gray-400 mb-4 transition-transform transform group-hover:scale-125 "
                                        src={"/" + skill.icon}
                                    />
                                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity
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
                            dark:text-darkQuaternary`}>Compétences secondaires</h3>
                        <div className="flex flex-wrap justify-center gap-4">

                            {skills.map((skill, index) => (
                                !skill.primary ?
                                    <div key={index} className="group flex flex-col items-center">
                                        <img
                                            alt={`icon ${skill.name}`}
                                            className="h-8 w-8 dark:text-gray-400 mb-4 transition-transform transform group-hover:scale-125 "
                                            src={`/${skill.icon}`}
                                        />
                                        <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity
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