import React, { useEffect, useState } from 'react';
import { FaComment, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Blog = ({ language, darkMode }) => {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [openComments, setOpenComments] = useState({});

    console.log(comments)
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

    return (
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 fade-in">
                <div className="px-4 py-6 md:px-6 lg:py-16 md:py-12">
                    <div className="space-y-8">
                        {posts.map((post) => (
                            <article key={post.id} className="grid gap-4 md:gap-6 md:grid-cols-[200px_1fr]">
                                <div className="bg-gray-100 rounded-lg overflow-hidden dark:bg-gray-800"> {/* Mode sombre pour le conteneur */}
                                    <img
                                        alt="Blog post cover"
                                        className="object-cover w-full h-full"
                                        src="/adrien.jpg"
                                        style={{ aspectRatio: '200/150' }}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <div className="space-y-1">
                                        <h2 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-darkQuaternary">
                                            {post.title}
                                        </h2>
                                    </div>
                                    <div className="prose prose-gray dark:text-darkQuaternary">
                                        <p>{post.body}</p>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-2">
                                        {post.tags.map((tag, idx) => (
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
                                            onClick={() => toggleComments(post.id) }
                                        >
                                            <FaComment className="w-4 h-4 mr-2" />
                                            {openComments[post.id] ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                                        </button>
                                    </div>

                                    {openComments[post.id] && comments[post.id] && (
                                        comments[post.id].map((comment)=>(
                                            <div key={comment.id} className="mt-4 bg-gray-100 p-4 rounded-lg dark:bg-gray-700">
                                                <div className="space-y-2">
                                                    <div className="p-2 bg-white rounded-md dark:bg-darkTertiary">
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
        </div>
    );
};

export default Blog;
