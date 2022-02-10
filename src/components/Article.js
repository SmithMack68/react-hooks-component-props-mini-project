import React from "react";

function Article({id, title, date="January 1, 1970", preview, minutes}){
    return(
        <div className="article">
            <article key={id}>
            <h3>{title}</h3>
            <small>{date} {minutes} min read</small>
            <p>{preview}</p>
            </article>
        </div>
    )

}

export default Article