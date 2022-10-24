import React, { useEffect } from "react";
import "../style/linkItem.css";
import styled ,{keyframes} from "styled-components";
import {bounce} from "react-animations";


function LinkItem(props) {
    const id=props.id;
    const [editable,setEditable]=React.useState(false);
    useEffect(() => {
        if(editable){

        }
        else{

        }},[editable]);

    const Bounce= styled.div`animation:2s ${keyframes`${bounce}`}`;
    const link={
        status:"active",
        title:props.title,
        link:props.link,
        icon:"https://picsum.photos/200"
    }
    const editLink=(e)=>{
        console.log("edit");
        setEditable(true);

    }
    const saveChange=(e)=>{
        let inputLocation= e.target.parentElement.parentElement.parentElement.children[0].children[0].children[0].children[1].children[0];// Burası baya kötü bir kod ama şimdilik böyle kalacak
        props.saveAndRefresh(inputLocation.children[0].value,inputLocation.children[1].value,id);
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
    const renderLink=()=>{
        if(editable){
            return(
                <div className="link-body">
                        <div className="link-container">
                            <div className="link-header">
                                <div className="link-icon">
                                    <img src={link.icon} alt="link icon" />
                                </div>
                                <div className="link-title">
                                    <div className="link-title-text">
                                        <input style={{width:'100%'}} type="text" name="title" id="title" defaultValue={link.title}/>
                                        <input style={{width:'100%'}} type="text" name="link" id="link" defaultValue={link.link}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="icons" className="icons">
                        <div onClick={saveChange} className="delete-icon icon">
                            <i className="fa-solid fa-floppy-disk"></i>
                            </div>
                    </div>
                    </div>
            )
        }
        else{
            return(
                <div id={props.id} className="link-body">
                    <div className="link-container">
                        <div className="link-header">
                            <div className="link-icon">
                                <img src={link.icon} alt="link icon" />
                            </div>
                            <div className="link-title">
                                <div className="link-title-text">
                                    {link.title}<br></br><br></br>
                                    <a target={"_blank"} href={link.link}>
                                    {link.link}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="icons" className="icons">
                    <div onClick={deleteLink} className="delete-icon icon">
                            {/* add delete icon */}
                            <i className="fa-solid fa-trash fa-xl"></i>
                        </div>
                        <div onClick={editLink} className="edit-icon icon">
                            {/* add delete icon */}
                            <i className="fa-solid fa-pen-to-square fa-xl"></i>
                        </div>
                </div>
                </div>
            )
        }}
    return(
        renderLink()
    )
}
export default LinkItem;