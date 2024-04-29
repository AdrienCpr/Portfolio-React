import React from 'react';
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';

const ModalDelete = ({ deletePost, closeDeleteModal, deletePostConfirmed, language }) => {
    const params = {
        "en": {
            "title": "Confirm Deletion",
            "message": "Are you sure you want to delete \"{postTitle}\"?",
            "cancelButton": "Cancel",
            "confirmButton": "Delete"
        },
        "fr": {
            "title": "Confirmer la suppression",
            "message": "Voulez-vous vraiment supprimer \"{postTitle}\" ?",
            "cancelButton": "Annuler",
            "confirmButton": "Supprimer"
        }
    }

    return (
        <Modal
            isOpen={!!deletePost}
            onRequestClose={closeDeleteModal}
            className="fixed inset-0 flex items-center justify-center z-50"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
        >
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 relative w-80">
                <button
                    className="absolute top-2 right-2 text-gray-700 hover:text-red-500"
                    onClick={closeDeleteModal}
                >
                    <FaTimes />
                </button>
                <h2 className="text-xl font-bold text-gray-800 dark:text-darkQuaternary">{params[language].title}</h2>
                <p className="text-gray-600 dark:text-darkQuaternary">
                    {params[language].message.replace("{postTitle}", deletePost?.title)}
                </p>
                <div className="flex justify-end mt-4">
                    <button
                        className="px-4 py-2 font-semibold rounded-md hover:bg-lightTertiary text-lightQuaternary bg-lightPrimary border border-lightQuaternary dark:hover:bg-darkPrimary dark:text-darkQuaternary dark:bg-darkTertiary dark:border-darkQuaternary"
                        onClick={closeDeleteModal}
                    >
                        {params[language].cancelButton}
                    </button>
                    <button
                        className="px-4 py-2 font-semibold rounded-md hover:bg-lightTertiary text-lightQuaternary bg-lightPrimary border border-lightQuaternary dark:hover:bg-darkPrimary dark:text-darkQuaternary dark:bg-darkTertiary dark:border-darkQuaternary"
                        onClick={deletePostConfirmed}
                    >
                        {params[language].confirmButton}
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default ModalDelete;
