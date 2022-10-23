import React, { useEffect } from "react";
import "../style/user.css";
import Loading from "../components/loading";
import LinkItem from "../components/linkItem";

function Admin() { 
    const [user, setUser] = React.useState(JSON.parse(localStorage.getItem("rocket-link-user")));
    const [isAuth, setIsAuth] = React.useState(false);
    const [ready, setReady] = React.useState(false);
    useEffect(() => {
        if(!user){
            window.location.href="/login";
        }
        else{
            setIsAuth(true);
        }
    }, []);
    useEffect(() => {
        if(isAuth && ready){
            console.log("admin page");
            renderPage("loaded");
            //I want to render the page after the user is authenticated and the page is ready
        }
        else if(isAuth && !ready){
            console.log("Loading your data...");
            renderPage("loading");
        }
    }, [isAuth, ready]);
    setTimeout(() => {
        setReady(true);
    }, 2000);
    const renderPage=(param)=>{           
            if(param==="loading"){
                console.log("loading");
                return <Loading/>
            }
            else if(param==="loaded"){
                console.log("loaded");  
                return(
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
                                <button type="button" onClick={(e)=>{e.preventDefault()}}></button>
                                <div className="user-info">
                                    User Info Cards here
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
    }
    return(
        <div className="admin-body">
            
        </div>
    )
}

export default Admin;