import React from "react";
import "../style/section.css";

function Section(props){
    const data=props.data;
    return(
        <section style={{backgroundImage:`url(${data.image})`}}>
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
