import React from 'react';

const About = ({ language }) => {
    const params = {
        fr: {
            name: "Compare Adrien",
            title1: "Développeur en master 1",
            title2: "Expert en développement logiciel",
            description1: "Je suis un développeur passionné, cumulant plus de 5 années d'expérience dans le domaine du développement web. Mon parcours professionnel m'a conduit à travailler sur une multitude de projets, me permettant ainsi d'acquérir des compétences variées, notamment dans les technologies telles que Laravel, React, Node.js, et bien d'autres.",
            description2: "Je suis également diplômé en tant que concepteur et développeur d'applications, ayant enrichi mes connaissances durant deux années d'alternance au cours desquelles j'ai collaboré sur divers projets avec des clients."
        },
        en: {
            name: "Compare Adrien",
            title1: "Master's student",
            title2: "Software Development Expert",
            description1: "I am a passionate developer with over 5 years of experience in web development. My professional journey has taken me across a variety of projects, allowing me to gain expertise in technologies such as Laravel, React, Node.js, and more.",
            description2: "I also hold a degree as an application designer and developer, having expanded my knowledge during two years of apprenticeship where I collaborated on various projects with clients."
        }
    };

    return (
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 fade-in">
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-16">
                    <div className="space-y-2 text-center md:w-1/2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl dark:text-darkQuaternary text-lightQuaternary">
                            {params[language].name}
                        </h1>
                        <p className="mx-auto md:text-xl text-gray-500 dark:text-gray-400">
                            {params[language].title1} <br/>
                            {params[language].title2}
                        </p>
                    </div>
                    <img
                        alt={params[language].title}
                        className="rounded-full object-cover object-center fade-in"
                        src="/portfolio/adrien.jpg"
                        loading="lazy"
                        style={{ height: "500px", width: "500px" }}
                    />
                </div>
            </div>
            <div className="mt-8 space-y-4 flex flex-col items-center fade-in">
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 text-center">
                    {params[language].description1}
                </p>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 text-center">
                    {params[language].description2}
                </p>
            </div>
        </div>
    );
};

export default About;
