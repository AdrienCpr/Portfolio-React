import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = ({language}) => {
    const params = {
        "fr": {
            "copyright": "© 2024 Compare Adrien. Tous droits réservés.",
        },
        "en": {
            "copyright": "© 2024 Compare Adrien. All rights reserved.",
        }
    }

    return (
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t justify-between">
            <p className={`text-xs
                text-lightTertiary
                dark:text-darkQuaternary`}
            >
                {params[language].copyright}
            </p>
            <div className="flex space-x-4">
                <a href="https://github.com/AdrienCpr" target="_blank" rel="noopener noreferrer">
                    <FaGithub className={"dark:text-darkQuaternary"} size={24} />
                </a>
                <a href="https://linkedin.com/in/adrien-compare-4692b722b" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className={"dark:text-darkQuaternary"} size={24} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
