import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();
    const language = localStorage.getItem("language")

    const params = {
        "en": {
            "title": "Login",
            "description": "Enter your username and password below to log in to your account.",
            "usernameLabel": "Username",
            "passwordLabel": "Password",
            "loginButton": "Login",
            "error": {
                "invalidCredentials": "Invalid username or password.",
                "unexpected": "An unexpected error occurred. Please try again later.",
                "network": "A network error occurred. Please try again later."
            }
        },
        "fr": {
            "title": "Connexion",
            "description": "Entrez votre nom d'utilisateur et votre mot de passe ci-dessous pour vous connecter à votre compte.",
            "usernameLabel": "Nom d'utilisateur",
            "passwordLabel": "Mot de passe",
            "loginButton": "Connexion",
            "error": {
                "invalidCredentials": "Nom d'utilisateur ou mot de passe incorrect.",
                "unexpected": "Une erreur inattendue s'est produite. Veuillez réessayer plus tard.",
                "network": "Une erreur réseau s'est produite. Veuillez réessayer plus tard."
            }
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username,
                    password,
                    expiresInMins: 30,
                }),
            });

            if (response.status === 200) {
                const data = await response.json();
                sessionStorage.setItem('key', data.token);
                navigate('/blog');
            } else if (response.status === 400) {
                setErrorMessage(params[language].error.invalidCredentials);
            } else {
                setErrorMessage(params[language].error.unexpected);
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage(params[language].error.network);
        }
    };

    return (
        <div className="container mt-16 px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-white dark:bg-darkTertiary">
                    <div className="mb-4 space-y-2">
                        <h2 className="text-3xl font-semibold text-gray-800 dark:text-darkQuaternary">
                            {params[language].title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            {params[language].description}
                        </p>
                    </div>

                    {errorMessage && (
                        <div className="bg-red-200 text-red-800 p-2 rounded mb-4">
                            {errorMessage}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label
                                    htmlFor="username"
                                    className="block text-sm font-medium text-gray-700 dark:text-darkQuaternary"
                                >
                                    {params[language].usernameLabel}
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    className="w-full px-4 py-2 border rounded-md border-gray-300 dark:border-gray-600 dark:bg-darkSecondary dark:text-darkQuaternary"
                                    placeholder={params[language].usernameLabel}
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700 dark:text-darkQuaternary"
                                >
                                    {params[language].passwordLabel}
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-darkSecondary dark:text-darkQuaternary"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex mt-6 justify-center">
                            <button
                                type="submit"
                                className={`px-4 py-2 font-semibold rounded-md hover:bg-lightTertiary text-lightQuaternary bg-lightPrimary border border-lightQuaternary dark:hover:bg-darkPrimary dark:text-darkQuaternary dark:bg-darkTertiary dark:border-darkQuaternary`}
                            >
                                {params[language].loginButton}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
