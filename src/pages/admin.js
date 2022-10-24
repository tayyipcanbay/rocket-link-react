import React, { useEffect } from "react";
import "../style/user.css";
import Loading from "../components/loading";
import LinkItem from "../components/linkItem";

function Admin() { 
    const [user] = React.useState(JSON.parse(localStorage.getItem("rocket-link-user")));
    const [isAuth, setIsAuth] = React.useState(false);
    const [ready, setReady] = React.useState(false);
    const [userLinks,setUserLinks]= React.useState([]);
    const [profieImage,setProfileImage]=React.useState("");
    const [username]=React.useState(user.data.username);
    const [views,setViews]=React.useState(user.data.views_count);
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
    const getLinks=()=>{
        getAvatar(username);
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
    const deleteLink=(id)=>{
        console.log("delete");
        fetch("http://localhost:9000/api/links/"+id,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+user.token
            }
        })
        .then(res=>res.json())
        .then(data=>{
            window.location.reload();
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
    const getAvatar=(name)=>{
        fetch("https://ui-avatars.com/api/?name="+name+"&background=0D8ABC&color=fff")
        .then(res=>res.blob())
        .then(data=>{
            setProfileImage(URL.createObjectURL(data));
        }
        )

    }
    const setVisibleCreateLink=(e)=>{
        e.preventDefault();
        var box=e.target.parentElement.children[1];
        console.log(box);
        box.style.display="block";
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
                                    <img src={`https://ui-avatars.com/api/?name=${username}&background=0D8ABC&color=fff`} alt="avatar" id="avatar"/>
                                    <div className="user-name"><pre>{username}</pre></div><hr></hr>
                                    <div className="user-bio"><pre>{views}<br></br>Total Views</pre></div>
                                </div>
                            </div>
                            <div className="user-content">
                                <div className="create-link">
                                    <button className="create-link-button" onClick={setVisibleCreateLink}>Create Link</button>
                                    <div id="create-link-title" style={{display:"none"}} className="create-link-title">
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
                                                <LinkItem deleteLink={deleteLink} saveAndRefresh={saveAndRefresh} id={item._id} title={item.title} link={item.link} />
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