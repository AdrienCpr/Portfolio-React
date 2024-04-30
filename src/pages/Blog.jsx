import React, { useEffect, useState } from 'react';
import { FaComment, FaChevronDown, FaChevronUp, FaHeart, FaEdit, FaTrash } from 'react-icons/fa';
import Modal from 'react-modal';
import ModalEdit from "../components/ModalEdit";
import ModalDelete from "../components/ModalDelete";

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState({});
    const [openComments, setOpenComments] = useState({});
    const [deletePost, setDeletePost] = useState(null);
    const [editPost, setEditPost] = useState(null);
    const [editedPost, setEditedPost] = useState({});
    const language = localStorage.getItem("language")

    Modal.setAppElement('#root');

    useEffect(() => {
        fetch("https://dummyjson.com/posts", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                setPosts(data.posts.slice(0, 10));
            })
            .catch((error) => console.error(error));
    }, []);

    async function fetchCommentPerPost(idPost){
        fetch(`https://dummyjson.com/posts/${idPost}/comments`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                setComments((prevComments) => ({
                    ...prevComments,
                    [idPost]: data.comments,
                }));
            })
            .catch((error) => console.error(error));
    }

    const toggleComments = (postId) => {
        setOpenComments((prev) => ({
            ...prev,
            [postId]: !prev[postId],
        }));

        fetchCommentPerPost(postId)
    };

    const openEditModal = (post) => {
        setEditPost(post);
        setEditedPost({
            title: post.title,
            body: post.body,
            tags: Array.isArray(post.tags) ? post.tags.join(", ") : "",
            reactions: post.reactions,
        });
    };
    const handleEditChange = (field, value) => {
        setEditedPost((prev) => ({
            ...prev,
            [field]: value,
        }));
    };
    const closeEditModal = () => {
        setEditPost(null);
    };

    const openDeleteModal = (post) => {
        setDeletePost(post);
    };
    const closeDeleteModal = () => {
        setDeletePost(null);
    };
    const saveEditPost = () => {
        const updatedPosts = posts.map((post) => {
            if (post.id === editPost.id) {
                const updatedTags = editedPost.tags.split(",").map((tag) => tag.trim());
                return { ...post, ...editedPost, tags: updatedTags };
            }
            return post;
        });

        setPosts(updatedPosts);
        setEditPost(null);
    };
    const deletePostConfirmed = () => {
        const updatedPosts = posts.filter((post) => post.id !== deletePost.id);
        setPosts(updatedPosts);
        closeDeleteModal();
    };

    return (
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 fade-in">
                <div className="px-4 py-6 md:px-6 lg:py-16 md:py-12">
                    <div className="space-y-8">
                        {posts.map((post) => (
                            <article key={post.id} className="grid gap-4 md:gap-6 md:grid-cols-[200px_1fr]">
                                <div className="bg-gray-100 rounded-lg overflow-hidden dark:bg-gray-800">
                                    <img
                                        alt="Blog post cover"
                                        className="object-cover w-full h-full"
                                        src={`https://random-image-pepebigotes.vercel.app/api/random-image?id=${post.id}`}
                                        style={{ aspectRatio: '200/150' }}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <h2 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-darkQuaternary">
                                            {post.title}
                                        </h2>
                                        <div className="flex gap-2">
                                            <button
                                                className="text-gray-700 hover:text-gray-900 dark:text-darkQuaternary"
                                                onClick={() => openEditModal(post)}
                                            >
                                                <FaEdit />
                                            </button>
                                            <button
                                                className="text-gray-700 hover:text-red-600 dark:text-darkQuaternary"
                                                onClick={() => openDeleteModal(post)}
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="prose prose-gray dark:text-darkQuaternary">
                                        <p>{post.body}</p>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-2">
                                        {(Array.isArray(post.tags) ? post.tags : []).map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-gray-200 text-gray-700 px-2 py-1 rounded dark:bg-darkTertiary dark:text-gray-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <button
                                            className="flex items-center text-gray-700 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-200 dark:text-darkQuaternary dark:border-gray-700 dark:hover:bg-gray-700"
                                            onClick={() => toggleComments(post.id)}
                                        >
                                            <FaComment className="w-4 h-4 mr-2" />
                                            {openComments[post.id] ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                                        </button>
                                        <div className="flex items-center gap-2">
                                            <FaHeart className="w-4 h-4 fill-rose-500" />
                                            <span className="dark:text-darkQuaternary">{post.reactions}</span>
                                        </div>
                                    </div>

                                    {openComments[post.id] && comments[post.id] && (
                                        comments[post.id].map((comment) => (
                                            <div key={comment.id} className="mt-4 bg-gray-100 p-4 rounded-lg dark:bg-gray-700">
                                                <div className="space-y-2">
                                                    <div className="p-2 bg-white ronded-md dark:bg-darkTertiary">
                                                        <p className="text-sm text-gray-700 dark:text-darkQuaternary">
                                                            <strong>{comment.user.username}</strong>: {comment.body}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

            <ModalEdit
                editPost={editPost}
                editedPost={editedPost}
                openEditModal={openEditModal}
                closeEditModal={closeEditModal}
                saveEditPost={saveEditPost}
                handleEditChange={handleEditChange}
                posts={posts}
                setPosts={setPosts}
                language={language}
            />

            <ModalDelete
                deletePost={deletePost}
                closeDeleteModal={closeDeleteModal}
                deletePostConfirmed={deletePostConfirmed}
                language={language}
            />

        </div>
    );
};

export default Blog;
