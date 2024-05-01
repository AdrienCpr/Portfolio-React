import React, {useState} from 'react';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';

import emailjs from '@emailjs/browser';

const Contact = ({language}) => {
    const [captchaToken, setCaptchaToken] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleCaptcha = (token) => {
        setCaptchaToken(token);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (captchaToken){
            const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.REACT_APP_RECAPTCHA_SECRET_KEY}&response=${captchaToken}`, {
                method: 'POST',
            });
            const data = await response.json();
            console.log(data)
            if (data.success) {
                emailjs
                    .send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formData, process.env.REACT_APP_PUBLIC_KEY)
                    .then(
                        () => {
                            console.log('SUCCESS!');
                        },
                        (error) => {
                            console.log('FAILED...', error.text);
                        },
                    );
            } else {
                console.log('Captcha validation failed.');
            }
        } else {
            console.log('Please pass the captcha test first.');
        }
    }


    const params = {
        "fr": {
            "title": "Contact",
            "form": {
                "nameLabel": "Nom :",
                "emailLabel": "E-mail :",
                "messageLabel": "Message :",
                "submitButton": "Envoyer",
                "placeholders": {
                    "name": "Entrez votre nom",
                    "email": "Entrez votre e-mail",
                    "message": "Entrez votre message"
                }
            }
        },
        "en": {
            "title": "Contact",
            "form": {
                "nameLabel": "Name:",
                "emailLabel": "Email:",
                "messageLabel": "Message:",
                "submitButton": "Send",
                "placeholders": {
                    "name": "Enter your name",
                    "email": "Enter your email",
                    "message": "Enter your message"
                }
            }
        }
    }


    return (
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className={`text-3xl font-bold tracking-tighter mb-8 sm:text-5xl
                        dark:text-darkQuaternary
                        text-lightQuaternary`}
                    >
                        {params[language].title}
                    </h2>
                    <form className="w-full max-w-md mx-auto space-y-4 p-4 border-2 rounded-md">
                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="name" className={`block
                                    dark:text-darkQuaternary
                                    text-lightQuaternary`}
                                >
                                    {params[language].form.nameLabel}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder={params[language].form.placeholders.name}
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 mt-2 border rounded-md dark:bg-darkTertiary"
                                    required
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label htmlFor="email" className={`block
                                    dark:text-darkQuaternary
                                    text-lightQuaternary`}
                                >
                                    E-mail :
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder={params[language].form.placeholders.email}
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 mt-2 border rounded-md dark:bg-darkTertiary"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className={`block
                                text-lightQuaternary
                                dark:text-darkQuaternary`}
                            >
                                {params[language].form.messageLabel}
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder={params[language].form.placeholders.message}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 mt-2 border rounded-md dark:bg-darkTertiary"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <GoogleReCaptcha onVerify={handleCaptcha} />
                        </div>
                        <div>
                            <button onClick={(e) => handleSubmit(e)}
                                    className={`px-4 py-2 font-semibold rounded-md
                                        hover:bg-lightTertiary
                                        text-lightQuaternary
                                        bg-lightPrimary
                                        border border-lightQuaternary
                                        dark:hover:bg-darkPrimary
                                        dark:text-darkQuaternary
                                        dark:bg-darkTertiary
                                        dark:border dark:border-darkQuaternary`}>
                                {params[language].form.submitButton}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
