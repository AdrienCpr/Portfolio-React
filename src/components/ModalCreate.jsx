import React, { useState } from 'react';
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";

const ModalCreate = ({isCreateModalOpen, closeCreateModal, language, setPosts}) => {
    const params = {
        "en": {
            "title": "Create New Post",
            "fieldTitle": "Title",
            "fieldBody": "Body",
            "fieldTags": "Tags (separated by commas)",
            "fieldReactions": "Reactions",
            "cancelButton": "Cancel",
            "createButton": "Create"
        },
        "fr": {
            "title": "Créer un nouvel article",
            "fieldTitle": "Titre",
            "fieldBody": "Corps du texte",
            "fieldTags": "Tags (séparés par des virgules)",
            "fieldReactions": "Réactions",
            "cancelButton": "Annuler",
            "createButton": "Créer"
        }
    };

    const [newPost, setNewPost] = useState({
        title: "",
        body: "",
        tags: "",
        reactions: 0
    });

    const createPost = () => {
        const newId = Date.now();
        const tags = newPost.tags.split(',').map(tag => tag.trim());

        const post = {
            id: newId,
            title: newPost.title,
            body: newPost.body,
            tags,
            reactions: newPost.reactions,
        };

        setPosts((previousPosts) => [post, ...previousPosts]);
        setNewPost({
            title: "",
            body: "",
            tags: "",
            reactions: 0,
        });
        closeCreateModal();
    };

    return (
        <Modal
            isOpen={isCreateModalOpen}
            onRequestClose={closeCreateModal}
            className="fixed inset-0 flex items-center justify-center z-50"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
        >
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 relative w-80">
                <button
                    className="absolute top-2 right-2 text-gray-700 hover:text-red-500"
                    onClick={closeCreateModal}
                >
                    <FaTimes />
                </button>
                <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-darkQuaternary">
                    {params[language].title}
                </h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm text-gray-600 dark:text-darkQuaternary">
                            {params[language].fieldTitle}
                            <input
                                type="text"
                                value={newPost.title}
                                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                                className="w-full border rounded px-4 py-2 dark:bg-darkTertiary"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block text-sm text-gray-600 dark:text-darkQuaternary">
                            {params[language].fieldBody}
                            <textarea
                                value={newPost.body}
                                onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
                                className="w-full border rounded px-3 py-2 dark:bg-darkTertiary"
                            ></textarea>
                        </label>
                    </div>
                    <div>
                        <label className="block text-sm text-gray-600 dark:text-darkQuaternary">
                            {params[language].fieldTags}
                            <input
                                type="text"
                                value={newPost.tags}
                                onChange={(e) => setNewPost({ ...newPost, tags: e.target.value })}
                                className="w-full px-3 py-2 border rounded dark:bg-darkTertiary"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block text-sm text-gray-600 dark:text-darkQuaternary">
                            {params[language].fieldReactions}
                            <input
                                type="number"
                                value={newPost.reactions}
                                onChange={(e) => setNewPost({ ...newPost, reactions: e.target.value })}
                                className="w-full px-3 py-2 border rounded dark:bg-darkTertiary"
                            />
                        </label>
                    </div>
                </div>
                <div className="flex justify-end mt-4">
                    <button
                        className="px-4 py-2 font-semibold rounded-md
                                        hover:bg-lightTertiary
                                        text-lightQuaternary
                                        bg-lightPrimary
                                        border border-lightQuaternary
                                        dark:hover:bg-darkPrimary
                                        dark:text-darkQuaternary
                                        dark:bg-darkTertiary
                                        dark:border dark:border-darkQuaternary"
                        onClick={closeCreateModal}
                    >
                        {params[language].cancelButton}
                    </button>
                    <button
                        className="px-4 py-2 font-semibold rounded-md
                                        hover:bg-lightTertiary
                                        text-lightQuaternary
                                        bg-lightPrimary
                                        border border-lightQuaternary
                                        dark:hover:bg-darkPrimary
                                        dark:text-darkQuaternary
                                        dark:bg-darkTertiary
                                        dark:border dark:border-darkQuaternary"
                        onClick={createPost}
                    >
                        {params[language].createButton}
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default ModalCreate;
