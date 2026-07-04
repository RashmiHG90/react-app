import { useState, useEffect } from 'react'
import { createPost, updatePost } from '../services/postService';

export default function PostForm({ posts, setPosts, editingPost, setEditingPost }) {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        if (editingPost) {
            setTitle(editingPost.title);
            setBody(editingPost.body);
        } else {
            setTitle('');
            setBody('');
        }
    }, [editingPost]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        if (editingPost) {
            // Update the existing post
            editPost();
        } else {
            // Add a new post
            addPost();
        }
        setTitle('');
        setBody('');
    }
    const editPost = () => {
        updatePost(editingPost.id, { title, body })
            .then((response) => {
                setPosts(posts.map(post => post.id === editingPost.id ? response.data : post));
                setEditingPost(null);
            })
            .catch((err) => { console.log(err) });
    }


    const addPost = () => {
        createPost({ title, body })
            .then((newPost) => {
                setPosts([...posts, newPost.data]);
            })
            .catch((err) => { console.log(err) });
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                Title
            </div>
            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
            <div>
                Body
            </div>
            <textarea type='text' value={body} onChange={(e) => setBody(e.target.value)} />
            <div>
                <button type='submit'>{editingPost ? 'Update Post' : 'Add Post'}</button>
            </div>

        </form>
    )
}