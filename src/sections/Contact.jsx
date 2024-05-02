import React, {useState} from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({language}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        recaptcha: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
        recaptcha: '',
        global: '',
    });

    const [success, setSuccess] = useState({
        global: '',
    });

    const validateForm = () => {
        let isValid = true;
        let errors = {
            name: '',
            email: '',
            message: '',
            recaptcha: '',
            global: '',
        };

        if (!formData.name.trim()) {
            errors.name = params[language].errors.name;
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            errors.email = params[language].errors.email;
            isValid = false;
        }

        if (!formData.message.trim()) {
            errors.message = params[language].errors.message;
            isValid = false;
        }

        if (formData.recaptcha !== 'portfolio') {
            errors.recaptcha = params[language].errors.recaptcha;
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                formData,
                process.env.REACT_APP_PUBLIC_KEY
            );
            setErrors({
                name: '',
                email: '',
                message: '',
                recaptcha: '',
                global: '',
            });

            setSuccess({
                global: params[language].successMessage,
            });

            setFormData({
                name: '',
                email: '',
                message: '',
                recaptcha: '',
            });

            setTimeout(() => {
                setSuccess({
                    global: '',
                });
            }, 5000);
        } catch (error) {
            setErrors({
                ...errors,
                global: `${params[language].errors.global}: ${error.text}`,
            });
        }
    };

    const params = {
        fr: {
            title: 'Contact',
            form: {
                nameLabel: 'Nom :',
                emailLabel: 'E-mail :',
                messageLabel: 'Message :',
                submitButton: 'Envoyer',
                placeholders: {
                    name: 'Entrez votre nom',
                    email: 'Entrez votre e-mail',
                    message: 'Entrez votre message',
                    recaptcha: "Écrivez 'portfolio' ici",
                },
            },
            errors: {
                name: 'Le nom ne doit pas être vide.',
                email: 'E-mail invalide.',
                message: 'Le message ne doit pas être vide.',
                recaptcha: 'Recaptcha incorrect.',
                global: "L'envoi a échoué",
            },
            successMessage: 'Message envoyé avec succès!',
        },
        en: {
            title: 'Contact',
            form: {
                nameLabel: 'Name:',
                emailLabel: 'Email:',
                messageLabel: 'Message:',
                submitButton: 'Send',
                placeholders: {
                    name: 'Enter your name',
                    email: 'Enter your email',
                    message: 'Enter your message',
                    recaptcha: "Enter 'portfolio' here",
                },
            },
            errors: {
                name: "Name can't be empty.",
                email: 'Invalid email.',
                message: 'Message cannot be empty.',
                recaptcha: 'Incorrect recaptcha.',
                global: 'Sending failed',
            },
            successMessage: 'Message sent successfully!',
        },
    };

    return (
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2
                        className={`text-3xl font-bold tracking-tighter mb-8 sm:text-5xl
              dark:text-darkQuaternary
              text-lightQuaternary`}
                    >
                        {params[language].title}
                    </h2>

                    {errors.global && (
                        <div className="border border-red-400 text-red-700 px-4 py-3 rounded relative">
                            {errors.global}
                        </div>
                    )}
                    {success.global && (
                        <div className="border border-green-400 text-green-700 px-4 py-3 rounded relative">
                            {success.global}
                        </div>
                    )}


                    <form
                        className="w-full max-w-md mx-auto space-y-4 p-4 border-2 rounded-md"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label
                                    htmlFor="name"
                                    className={`block
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
                                {errors.name && (
                                    <div className="text-red-600 text-sm">{errors.name}</div>
                                )}
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label
                                    htmlFor="email"
                                    className={`block
                    dark:text-darkQuaternary
                    text-lightQuaternary`}
                                >
                                    {params[language].form.emailLabel}
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
                                {errors.email && (
                                    <div className="text-red-600 text-sm">{errors.email}</div>
                                )}
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className={`block
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
                            {errors.message && (
                                <div className="text-red-600 text-sm">{errors.message}</div>
                            )}
                        </div>

                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label
                                htmlFor="recaptcha"
                                className={`block
                  dark:text-darkQuaternary
                  text-lightQuaternary`}
                            >
                                Recaptcha
                            </label>
                            <input
                                type="text"
                                id="recaptcha"
                                placeholder={params[language].form.placeholders.recaptcha}
                                name="recaptcha"
                                value={formData.recaptcha}
                                onChange={handleChange}
                                className="w-full px-4 py-2 mt-2 border rounded-md dark:bg-darkTertiary"
                                required
                            />
                            {errors.recaptcha && (
                                <div className="text-red-600 text-sm">{errors.recaptcha}</div>
                            )}
                        </div>

                        <div>
                            <button
                                type="submit"
                                className={`px-4 py-2 font-semibold rounded-md
                  hover:bg-lightTertiary
                  text-lightQuaternary
                  bg-lightPrimary
                  border border-lightQuaternary
                  dark:hover:bg-darkPrimary
                  dark:text-darkQuaternary
                  dark:bg-darkTertiary
                  dark:border dark:border-darkQuaternary`}
                            >
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
