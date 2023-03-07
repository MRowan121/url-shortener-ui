import React from "react";

const Url = ({ title, short_url, long_url, id, deleteUrl}) => {
    return (
        <div className="url" id={id}>
            <h3>{title}</h3>
            <a href={short_url} target="blank">{short_url}</a>
            <p>{long_url}</p>
            <button onClick={() => deleteUrl(id)}>🗑️</button>
        </div>
    )
}

export default Url;