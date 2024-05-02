import React from 'react';
import {Chrono} from "react-chrono";

const Timeline = ({darkMode, language}) => {

    const params = {
        "fr": {
            "timeline": "Chronologie",
            "items": [
                {
                    "id": 0,
                    "title": "Juillet 2020",
                    "cardTitle": "Baccalauréat Scientifique",
                    "url": "http://www.stlouis-orange.fr/",
                    "cardSubtitle": "Obtention de mon baccalauréat scientifique avec mention AB",
                    "media": {
                        "type": "IMAGE",
                        "source": {
                            "url": "https://cdn-s-www.ledauphine.com/images/CD36051C-762C-42A9-8080-933482A04B2E/NW_raw/le-lycee-saint-louis-a-orange-affiche-un-taux-de-reussite-pour-le-bac-2018-de-99-archives-photo-le-dl-1553033229.jpg"
                        }
                    }
                },
                {
                    "id": 1,
                    "title": "2022",
                    "cardTitle": "DUT Informatique",
                    "url": "https://iut.univ-amu.fr/fr/sites-geographiques/arles",
                    "cardSubtitle": "Obtention de mon DUT Informatique sur le site d'Arles",
                    "media": {
                        "type": "IMAGE",
                        "source": {
                            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7MyADu1DS_AGyYwQVjRVDRAw4tGtDKemnTF1F_UGJCw&s"
                        }
                    }
                },
                {
                    "id": 2,
                    "title": "2022-2023",
                    "cardTitle": "Concepteur et développeur d'applications",
                    "url": "https://esimed.fr/",
                    "cardSubtitle": "Obtention de mon titre de Concepteur et développeur d'applications en alternance (ESIMED|GLANUM)",
                    "media": {
                        "type": "IMAGE",
                        "source": {
                            "url": "https://cfa-insta.fr/wp-content/uploads/2021/01/3-Devops-desktop-2021-V1.jpg"
                        }
                    }
                },
                {
                    "id": 3,
                    "title": "2023-2025",
                    "cardTitle": "Expert en développement logiciel",
                    "url": "https://esimed.fr/",
                    "cardSubtitle": "Formation d'Expert en développement logiciel en alternance (ESIMED|GLANUM)",
                    "media": {
                        "type": "IMAGE",
                        "source": {
                            "url": "https://guardia.school/wp-content/webp-express/webp-images/uploads/2023/03/19-5.jpg.webp"
                        }
                    }
                }
            ]
        },
        "en": {
            "timeline": "Timeline",
            "items": [
                {
                    "id": 0,
                    "title": "July 2020",
                    "cardTitle": "Scientific Baccalauréat",
                    "url": "http://www.stlouis-orange.fr/",
                    "cardSubtitle": "Obtained my scientific baccalauréat with honors (AB)",
                    "media": {
                        "type": "IMAGE",
                        "source": {
                            "url": "https://cdn-s-www.ledauphine.com/images/CD36051C-762C-42A9-8080-933482A04B2E/NW_raw/le-lycee-saint-louis-a-orange-affiche-un-taux-de-reussite-pour-le-bac-2018-de-99-archives-photo-le-dl-1553033229.jpg"
                        }
                    }
                },
                {
                    "id": 1,
                    "title": "2022",
                    "cardTitle": "DUT in Computer Science",
                    "url": "https://iut.univ-amu.fr/fr/sites-geographiques/arles",
                    "cardSubtitle": "Obtained my DUT in Computer Science at the Arles campus",
                    "media": {
                        "type": "IMAGE",
                        "source": {
                            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7MyADu1DS_AGyYwQVjRVDRAw4tGtDKemnTF1F_UGJCw&s"
                        }
                    }
                },
                {
                    "id": 2,
                    "title": "2022-2023",
                    "cardTitle": "Application Designer and Developer",
                    "url": "https://esimed.fr/",
                    "cardSubtitle": "Obtained my title of Application Designer and Developer through apprenticeship (ESIMED|GLANUM)",
                    "media": {
                        "type": "IMAGE",
                        "source": {
                            "url": "https://cfa-insta.fr/wp-content/uploads/2021/01/3-Devops-desktop-2021-V1.jpg"
                        }
                    }
                },
                {
                    "id": 3,
                    "title": "2023-2025",
                    "cardTitle": "Software Development Expert",
                    "url": "https://esimed.fr/",
                    "cardSubtitle": "Training for Software Development Expert through apprenticeship (ESIMED|GLANUM)",
                    "media": {
                        "type": "IMAGE",
                        "source": {
                            "url": "https://guardia.school/wp-content/webp-express/webp-images/uploads/2023/03/19-5.jpg.webp"
                        }
                    }
                }
            ]
        }
    }


    const theme = {
        primary: darkMode ? getComputedStyle(document.body).getPropertyValue('--color-dark-quaternary') : getComputedStyle(document.body).getPropertyValue('--color-light-tertiary'),
        secondary: darkMode ? getComputedStyle(document.body).getPropertyValue('--color-dark-secondary') : getComputedStyle(document.body).getPropertyValue('--color-light-secondary'),
        cardBgColor: darkMode ? getComputedStyle(document.body).getPropertyValue('--color-dark-tertiary') : getComputedStyle(document.body).getPropertyValue('--color-light-secondary'),
        titleColor: darkMode ? getComputedStyle(document.body).getPropertyValue('--color-dark-quaternary') : getComputedStyle(document.body).getPropertyValue('--color-light-quaternary'),
        titleColorActive: darkMode ? getComputedStyle(document.body).getPropertyValue('--color-dark-quaternary') : getComputedStyle(document.body).getPropertyValue('--color-light-quaternary'),
    };

    const classNames = {
        cardSubTitle: darkMode ? 'my-card-subtitle-dark' : 'my-card-subtitle-light',
        cardText: darkMode ? 'my-card-text-dark' : 'my-card-text-light',
        cardTitle: darkMode ? 'my-card-title-dark' : 'my-card-title-light',
        title: darkMode ? 'my-title-dark' : 'my-title-light',
    };

    return (
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className={`text-3xl font-bold tracking-tighter sm:text-5xl mb-8
                        text-lightQuaternary
                        dark:text-darkQuaternary`}
                    >{params[language].timeline}</h2>
                    <div className="grid grid-cols-1 content-center">
                        <Chrono items={params[language].items}
                            key={darkMode+language}
                            mode="VERTICAL_ALTERNATING"
                            disableToolbar
                            activeItemIndex={0}
                            allowDynamicUpdate={true}
                            buttonTexts={{
                                first: 'Jump to First',
                                last: 'Jump to Last',
                                next: 'Next',
                                previous: 'Previous',
                            }}
                            theme={theme}
                            classNames={classNames}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;