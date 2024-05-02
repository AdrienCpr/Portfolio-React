import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    focusOnSelect: true,
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
const Projects = ({language}) => {

    const params = {
        "fr": {
            "projects": "Projets",
            "items": [
                {
                    "id": 1,
                    "title": "Ce portfolio",
                    "image": "https://media.licdn.com/dms/image/D4E03AQHo1L5sCkyS6g/profile-displayphoto-shrink_800_800/0/1694500103211?e=2147483647&v=beta&t=jkkRFeMdEg1wNU0TB_zzrxPa0KpohzTGsBIo2AJeR8I",
                    "link": "/",
                    "description": "Réalisé en React et Tailwind"
                },
                {
                    "id": 2,
                    "title": "Projet Bachelor",
                    "image": "https://static.fnac-static.com/multimedia/Images/FD/Comete/153036/CCP_IMG_1200x800/2022194.jpg",
                    "link": "",
                    "description": "Utilisation de socket IO pour créer un jeu Pokémon avec une API NodeJS et un front JavaScript"
                },
                {
                    "id": 3,
                    "title": "Scraper LinkedIn",
                    "image": "https://brightdata.fr/wp-content/uploads/2021/09/Group-112045.svg",
                    "link": "",
                    "description": "Permet, à partir de votre identifiant LinkedIn, de récupérer vos informations avec NodeJS et Puppeteer"
                },
                {
                    "id": 4,
                    "title": "Jeu Vidéo",
                    "image": "https://media.sketchfab.com/models/d4c2f6c5a44748ee8d32040fdd4617b0/thumbnails/1f208269136e40e1a16cb6fa9bddc979/a24860284ec2463a86333c34aac44f53.jpeg",
                    "link": "",
                    "description": "Création d'un platformer 3D avec Godot"
                }
            ]
        },
        "en": {
            "projects": "Projects",
            "items": [
                {
                    "id": 1,
                    "title": "This Portfolio",
                    "image": "https://media.licdn.com/dms/image/D4E03AQHo1L5sCkyS6g/profile-displayphoto-shrink_800_800/0/1694500103211?e=2147483647&v=beta&t=jkkRFeMdEg1wNU0TB_zzrxPa0KpohzTGsBIo2AJeR8I",
                    "link": "/portfolio",
                    "description": "Created with React and Tailwind"
                },
                {
                    "id": 2,
                    "title": "Bachelor's Project",
                    "image": "https://static.fnac-static.com/multimedia/Images/FD/Comete/153036/CCP_IMG_1200x800/2022194.jpg",
                    "link": "",
                    "description": "Using socket IO to create a Pokémon game with a NodeJS API and a JavaScript frontend"
                },
                {
                    "id": 3,
                    "title": "LinkedIn Scraper",
                    "image": "https://brightdata.fr/wp-content/uploads/2021/09/Group-112045.svg",
                    "link": "",
                    "description": "Allows you, using your LinkedIn ID, to retrieve your information with NodeJS and Puppeteer"
                },
                {
                    "id": 4,
                    "title": "Video Game",
                    "image": "https://media.sketchfab.com/models/d4c2f6c5a44748ee8d32040fdd4617b0/thumbnails/1f208269136e40e1a16cb6fa9bddc979/a24860284ec2463a86333c34aac44f53.jpeg",
                    "link": "",
                    "description": "Creating a 3D platformer with Godot"
                }
            ]
        }
    }

    return (
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8
                        text-lightQuaternary
                        dark:text-darkQuaternary"
                    >
                        {params[language].projects}
                    </h2>
                    <div className="grid grid-cols-1 content-center">

                        <Slider {...settings} className="grid">
                            {params[language].items.map((project) => (
                                <div key={project.id} className="mb-4 h-96 shadow-md rounded-md overflow-hidden p-5 project-item
                                    bg-lightSecondary
                                    dark:bg-darkSecondary">
                                    <div className="aspect-w-16 aspect-h-9">
                                        <img
                                            alt={project.title}
                                            style={{width : "200px", height: "200px"}}
                                            className="object-cover mx-auto block w-full h-full"
                                            src={project.image}
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