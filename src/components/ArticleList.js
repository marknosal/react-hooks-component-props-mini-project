import React from "react";
import Article from "./Article"

function ArticleList({posts}) {
    const jsxPosts = posts.map(post => {
        return <Article key={post.id} date={post.date} minutes={post.minutes} preview={post.preview} title={post.title} />
    })
    return (
        <main>{jsxPosts}</main>
    )
}

export default ArticleList;