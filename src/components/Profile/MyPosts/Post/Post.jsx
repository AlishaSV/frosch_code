import React from 'react';
import s from './Post.module.css'

const Post = () => {
    return (
            <div className={s.item}>
                <img alt={"post"} src='https://images.unsplash.com/photo-1518737496070-5bab26f59b3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1248&q=80'/>
              post 1
            </div>
    )
}

export default Post;