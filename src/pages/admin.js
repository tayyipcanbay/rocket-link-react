import React, { useEffect } from "react";
import "../style/user.css";
import LinkItem from "../components/linkItem";

function Admin() {
    const [ready , setReady] = React.useState(false);
    const [links, setLinks] = React.useState([]);
    useEffect(()=>{
        const checkLogin=()=>{
            var user=JSON.parse(localStorage.getItem("rocket-link-user"));
            if(user){
                setReady(true);
                getUserLinks(user.token).then((data)=>{
                    if(data.success){
                        setLinks(data);
                    }
                    else{
                        alert("Error");
                    }
                }) 
                return true;
            }
            setTimeout(()=>{
                window.location.href="/login";
            },3000)
            return false;
        }
        checkLogin();
    },[])
    const getUserLinks=(token)=>{
            return new Promise((resolve,reject)=>{
                fetch("http://localhost:9000/api/links/",{
                method:"GET",
                headers:{
                    Authorization:"Bearer "+token
                }
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                resolve(data);
            })
            .catch(err=>{
                reject(err);
            })
            })
    }
    const renderPage=()=>{
        if(ready){
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
                            <button type="button" onClick={(e)=>{e.preventDefault();console.log(links)}}></button>
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
        else{
            return(
                <div>Please Login First!</div>
            )
        }
    }
    return (
        <div>
            {renderPage()}
        </div>
    )
}

export default Admin;