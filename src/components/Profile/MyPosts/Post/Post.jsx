import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/474x/32/3b/c2/323bc2e28f35a760b8d7afe48f3ffe48.jpg" />
            {props.message}
            <div>
                <span>Like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post