import React from 'react';
import {Chrono} from "react-chrono";

const Timeline = () => {

    const items = [
        {
            id: 0,
            title: "May 1940",
            cardTitle: "Dunkirk",
            url: "http://www.history.com",
            cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
            cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
            media: {
                type: "IMAGE",
                source: {
                    url: "https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=50,format=auto/sources/images/dossier/773/01-intro-773.jpg"
                }
            }
        },
        {
            id: 1,
            title: "May 1941",
            cardTitle: "Dunkirk",
            url: "http://www.history.com",
            cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
            cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
            media: {
                type: "IMAGE",
                source: {
                    url: "https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=50,format=auto/sources/images/dossier/773/01-intro-773.jpg"
                }
            }
        },
        {
            id: 2,
            title: "May 1942",
            cardTitle: "Dunkirk",
            url: "http://www.history.com",
            cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
            cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
            media: {
                type: "IMAGE",
                source: {
                    url: "https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=50,format=auto/sources/images/dossier/773/01-intro-773.jpg"
                }
            }
        }
    ];

    return (
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className={`text-3xl font-bold tracking-tighter sm:text-5xl mb-8
                        text-lightQuaternary
                        dark:text-darkQuaternary`}
                    >Expériences</h2>
                    <div className="grid grid-cols-1 content-center">
                        <Chrono items={items}
                            // mode="HORIZONTAL"
                                mode="VERTICAL_ALTERNATING"
                            // textOverlay
                                disableToolbar
                                activeItemIndex={0}
                                allowDynamicUpdate={true}
                            // slideShow
                            // slideItemDuration={4500}
                            // slideShowType="reveal"
                                buttonTexts={{
                                    first: 'Jump to First',
                                    last: 'Jump to Last',
                                    next: 'Next',
                                    previous: 'Previous',
                                }}
                                theme={{
                                        primary: 'black',
                                        secondary: 'white',
                                        cardBgColor: 'white',
                                        titleColor: 'black',
                                        titleColorActive: 'black',
                                }}
                        >
                            {/*<div className="chrono-icons">*/}
                            {/*    <img src="https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=50,format=auto/sources/images/dossier/773/01-intro-773.jpg" alt="image1" />*/}
                            {/*    <img src="https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=50,format=auto/sources/images/dossier/773/01-intro-773.jpg" alt="image2" />*/}
                            {/*  </div>*/}
                        </Chrono>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;