import React from "react";
import "../style/user.css";
import LinkItem from "../components/linkItem";

function Admin() {
    return (
        <div className="user-body">
            <div className="user-container">
                <div className="user-header">
                    <div className="user-avatar">
                        <img src="https://picsum.photos/200" alt="user avatar" />
                        <div className="user-name"><pre>@JohnDoe</pre></div><hr></hr>
                        <div className="user-bio"><pre><a>This is Bio title.For the user</a></pre></div>
                    </div>
                </div>
                <div className="user-content">
                    <div className="user-info">
                        <LinkItem />
                        <LinkItem />
                        <LinkItem />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin;