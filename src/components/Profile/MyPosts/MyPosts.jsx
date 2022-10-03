import React from "react";
import { Field, reduxForm } from "redux-form";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map((p, index) => <Post key={index} message={p.message} likesCount={p.likesCount} />)

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component="textarea"/>
            </div>
            <div>
                <button >Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form:'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts