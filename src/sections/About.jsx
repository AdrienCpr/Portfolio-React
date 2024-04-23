import React from 'react';

const About = () => {

    return (
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-16">
                    <div className="space-y-2 text-center md:w-1/2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl dark:text-darkQuaternary text-lightQuaternary">
                            Compare Adrien
                        </h1>
                        <p className="mx-auto md:text-xl text-gray-500 dark:text-gray-400">
                            Développeur en master 1 <br />
                            Expert en développement logiciel
                        </p>
                    </div>
                    <img
                        alt="Photo d'Adrien Compare"
                        className="rounded-full object-cover object-center"
                        src="/adrien.jpg"
                        loading="lazy"
                        style={{ height: "500px", width: "500px" }}
                    />
                </div>
            </div>
            <div className="mt-8 space-y-4 flex flex-col items-center">
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 text-center">
                    Je suis un développeur passionné, cumulant plus de <b>5 années d'expérience</b> dans le domaine du développement web. Mon parcours professionnel m'a conduit à travailler sur une multitude de projets, me permettant ainsi d'acquérir des compétences variées, notamment dans les technologies telles que <b>Laravel, React, Node.js et bien d'autres.</b>
                </p>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 text-center">
                    Je suis également diplômé en tant que <b>concepteur et développeur d'applications</b>, ayant enrichi mes connaissances durant deux années d'alternance au cours desquelles j'ai collaboré sur divers projets avec des clients.
                </p>
            </div>
        </div>
    );
};
export default About;