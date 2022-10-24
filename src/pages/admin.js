import React, { useEffect } from "react";
import "../style/user.css";
import Loading from "../components/loading";
import LinkItem from "../components/linkItem";
import uuid from "react-uuid";

function Admin() { 
    const [user] = React.useState(JSON.parse(localStorage.getItem("rocket-link-user")));
    const [isAuth, setIsAuth] = React.useState(false);
    const [ready, setReady] = React.useState(false);
    const [userLinks,setUserLinks]= React.useState([]);
    useEffect(() => {
        if(!user){
            window.location.href="/login";
        }
        else{
            setIsAuth(true);
        }
    }, []);
    useEffect(() => {
        getLinks();
    }, []);
    const saveAndRefresh=(saveTitle,saveLink,id)=>{
        console.log(saveTitle,saveLink);
        fetch("http://localhost:9000/api/links/"+id,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+user.token
            },
            body:JSON.stringify({
                title:saveTitle,
                link:saveLink
            })
        })
        .then((data)=>{
            console.log(data);
            window.location.reload();
        }
        )
        .catch((err)=>console.log(err));

    }
    // const createLink=(title,link)=>{
    //     fetch("http://localhost:9000/api/links/",{
    //         method:"POST",
    //         headers:{
    //             "Content-Type":"application/json",
    //             "Authorization":"Bearer "+user.token
    //         },
    //         body:JSON.stringify({
    //             title:title,
    //             link:link
    //         })
    //     }).then((res)=>{
    //         if(res.ok){
    //             console.log("ok");
    //         }
    //     })
    // }
    // createLink("Instagram","https://www.instagram.com/tayyipcanbay");
    const getLinks=()=>{
        fetch("http://localhost:9000/api/links/",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+user.token
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.data.length===0){
                data.data=[{
                    id:uuid(),
                    title:"Henüz title eklenmemiş",
                    link:"Henüz link eklenmemiş",
                }];
            }
            setUserLinks(data.data);
            setReady(true);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    const createLink=(e)=>{
        e.preventDefault();
        console.log("create");
        var link= e.target.children[0].value;
        var title=e.target.children[1].value;
        console.log(title,link);
        fetch("http://localhost:9000/api/links/",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+user.token
            },
            body:JSON.stringify({
                title:title,
                link:link
            })
        })
        .then((res)=>{
            if(res.ok){
                console.log("ok");
                window.location.reload();
            }
        })

    }
    const isLoaded = isAuth && ready;
    const isLoading = isAuth && !ready;
    const renderPage=()=>{           
            if(isLoading){
                return <Loading/>
            }
            else if(isLoaded){
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
                                <div className="create-link">
                                    <button className="create-link-button" onClick={(e)=>{e.preventDefault();document.getElementById("create-link-title").style.display="block"}}>Create Link</button>
                                    <div style={{display:"block"}} className="create-link-title">
                                        <pre>Link Ekle</pre>
                                       <div className="create-link-box">
                                            <form onSubmit={createLink}>
                                                <input type="text" placeholder="Başlık" name="title" id="title" />
                                                <input type="text" placeholder="Link" name="link" id="link" />
                                                <button type="submit">Ekle</button>
                                            </form>
                                       </div>
                                    </div>
                                </div>
                                <div className="user-info">
                                    {
                                        userLinks.map((item,index)=>{
                                            return(
                                                <LinkItem saveAndRefresh={saveAndRefresh} id={item._id} title={item.title} link={item.link} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
    }
    return(
        <div className="admin-body">
            {renderPage()}
        </div>
    )
}

export default Admin;