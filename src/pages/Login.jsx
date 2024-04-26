import React from 'react';
const Login = () => {

    return (
        <div className="container mt-16 px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-white dark:bg-darkTertiary">
                    <div className="mb-4 space-y-2">
                        <h2 className="text-3xl font-semibold text-gray-800 dark:text-darkQuaternary">
                            Connexion
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Entrez votre email ci-dessous pour vous connecter à votre compte.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 dark:text-darkQuaternary"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 border rounded-md border-gray-300 dark:border-gray-600 dark:bg-darkSecondary dark:text-darkQuaternary"
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 dark:text-darkQuaternary"
                            >
                                Mot de passe
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-darkSecondary dark:text-darkQuaternary"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex mt-6 justify-center">
                        <button type="submit"
                                className={`px-4 py-2 font-semibold rounded-md
                                        hover:bg-lightTertiary
                                        text-lightQuaternary
                                        bg-lightPrimary
                                        border border-lightQuaternary
                                        dark:hover:bg-darkPrimary
                                        dark:text-darkQuaternary
                                        dark:bg-darkTertiary
                                        dark:border dark:border-darkQuaternary`}>
                            Connexion
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
