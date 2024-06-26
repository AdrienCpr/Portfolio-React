import React, {Fragment} from 'react';
import {Menu, Transition} from '@headlessui/react';
import { FR, GB } from 'country-flag-icons/react/3x2'

const Header = ({setLanguage, language}) => {
    const handleLanguageChange = (value) => {
        localStorage.setItem("language",value)
        setLanguage(value);
    };

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex justify-center px-4 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    {language === "fr" ?
                        <FR title="French flag" className="h-4 w-auto inline" />
                        :
                        <GB title="English flag" className="h-4 w-auto inline" />
                    }
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`${
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                    } block px-4 py-2 text-sm`}
                                    onClick={() => handleLanguageChange('fr')}
                                >
                                    <FR title="French flag" className="h-4 w-auto inline" />
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`${
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                    } block px-4 py-2 text-sm`}
                                    onClick={() => handleLanguageChange('en')}
                                >
                                    <GB title="English flag" className="h-4 w-auto inline" />
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default Header;