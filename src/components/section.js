import React from "react";
import "../style/section.css";

function Section(props){
    const data=props.data;
    const scrollNext=()=>{
        if(data.ref!==""){
            window.location.href="#"+data.ref;
            console.log(data.ref);
        }
        else if(data.ref===""){
            window.location.href="#";
        }
    }

    return(
        <section onDoubleClick={scrollNext} id={data.id} style={{backgroundImage:`url(${data.image})`}}>
            <div className="section">
                <div className="section-content">
                    <div className="section-header ">
                        <h1 className="section-title">{data.title}</h1>
                        <p className="section-text">{data.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Section;
