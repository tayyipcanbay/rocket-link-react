import React, { useEffect } from "react";
import "../style/user.css";
import LinkItem from "../components/linkItem";
import Loading from "../components/loading";
import {useParams} from "react-router-dom";

function User(props) {
  const url = window.location.href;
  const username=useParams().username;
  const [userLinks,setUserLinks]= React.useState([]);
  const [profieImage,setProfileImage]=React.useState("");
  const [ready, setReady] = React.useState(true);
  const backgroundURL="https://picsum.photos/1920/1080";
  const isLoaded = ready;
  const isLoading = !ready;
  const getAvatar=(name)=>{
    fetch("https://ui-avatars.com/api/?name="+name+"&background=000&color=fff")
    .then(res=>res.blob())
    .then(data=>{
        setProfileImage(URL.createObjectURL(data));
    })

}
useEffect(() => {
  setTimeout(() => {
      getLinks();
  },1000);
}, []);
  const getLinks=()=>{
    getAvatar(username);
    fetch("http://localhost:9000/api/links/"+username,{
        method:"GET",

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
  const renderPage=()=>{           
    if(isLoading){
        return <Loading/>
    }
    else if(isLoaded){
        return(
            <div style={{backgroundImage:`url(${backgroundURL})`}} className="user-body">
                <div className="user-container">
                    <div className="user-header">
                        <div className="user-avatar">
                            <img src={`https://ui-avatars.com/api/?name=${username}&background=0D8ABC&color=fff`} alt="avatar" id="avatar"/>
                            <div className="user-name"><pre>{username}</pre></div><hr></hr>
                        </div>
                    </div>
                    <div className="user-content">
                        <div className="user-info">
                            {
                                userLinks.map((item,index)=>{
                                    return(
                                        <LinkItem id={item._id} title={item.title} link={item.link} />
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
  return (
    <div className="user-body">
      {renderPage()}
    </div>

  )
}
export default User;