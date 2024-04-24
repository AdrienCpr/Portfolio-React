import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    // autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    // focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}
const Projects = () => {

    const projects = [
        {
            title : "Projet 1",
            image : "developer.png",
            link : "",
            description : "Ceci est un cool description",
        },
        {
            title : "Projet 2",
            image : "developer.png",
            link : "",
            description : "Ceci est un cool description",
        },
        {
            title : "Projet 3",
            image : "developer.png",
            link : "",
            description : "Ceci est un cool description",
        },
        {
            title : "Projet 4",
            image : "developer.png",
            link : "",
            description : "Ceci est un cool description",
        },
        {
            title : "Projet 5",
            image : "developer.png",
            link : "",
            description : "Ceci est un cool description",
        },
        {
            title : "Projet 6",
            image : "developer.png",
            link : "",
            description : "Ceci est un cool description",
        }
    ]
    return (
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8
                        text-lightQuaternary
                        dark:text-darkQuaternary"
                    >
                        Projets
                    </h2>
                    <div className="grid grid-cols-1 content-center">

                        <Slider {...settings} className="grid">
                            {projects.map((project) => (
                                <div key={1} className="mb-4 shadow-md rounded-md overflow-hidden p-5 project-item
                                    bg-lightSecondary
                                    dark:bg-darkSecondary">
                                    <div className="aspect-w-16 aspect-h-9">
                                        <img
                                            alt={project.title}
                                            style={{width : "250px", height: "250px"}}
                                            className="object-cover object-center w-full h-full"
                                            src={`/${project.image}`}
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className={`text-xl font-semibold mb-2
                                            text-lightQuaternary
                                            dark:text-darkQuaternary`}
                                        >
                                            <a href={project.link}>
                                                {project.title}
                                            </a>
                                        </h3>
                                        <p className="mx-auto max-w-[700px] md:text-xl
                                            text-gray-500
                                            dark:text-gray-400"
                                        >
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;