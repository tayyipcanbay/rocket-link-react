import React, { useEffect } from "react";
import "../style/linkItem.css";
import styled ,{keyframes} from "styled-components";
import {bounce} from "react-animations";


function LinkItem(props) {
    const Bounce= styled.div`animation:2s ${keyframes`${bounce}`}`;
    const link={
        status:"active",
        title:"This is gonna be a title",
        link:"https://www.google.com",
        icon:"https://picsum.photos/200"
    }
    const editLink=(e)=>{
        console.log("edit");
    }
    const deleteLink =(e)=>{
        console.log("delete");
    }
    useEffect(()=>{
        const url = window.location.href;
        if(url.includes("user")){
            let icons =document.querySelectorAll(".icons")
            icons.forEach((icon)=>{
                icon.style.display="none";
            })
        }
    },[])
    return(
        <Bounce>
            <div className="link-body">
                <div className="link-container">
                    <div className="link-header">
                        <div className="link-icon">
                            <img src={link.icon} alt="link icon" />
                        </div>
                        <div className="link-title">
                            <div className="link-title-text">
                                <a target={"_blank"} href={link.link}>
                                {link.title}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="icons" className="icons">
                <div onClick={deleteLink} className="delete-icon icon">
                        {/* add delete icon */}
                        <i class="fa-solid fa-trash fa-xl"></i>
                    </div>
                    <div onClick={editLink} className="edit-icon icon">
                        {/* add delete icon */}
                        <i class="fa-solid fa-pen-to-square fa-xl"></i>
                    </div>
               </div>
            </div>
        </Bounce>
    )
}
export default LinkItem;