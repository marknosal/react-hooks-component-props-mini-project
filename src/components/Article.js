import React from "react";

function Article ({title, date='January 1, 1970', minutes, preview}) {console.log(minutes)
    let emoji = minutes
    console.log(emoji)
    if(minutes < 10) {
        emoji = ☕️
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}{' '+minutes}</small>
        <p>{preview}</p>
        </article>
    )
}

export default Article;