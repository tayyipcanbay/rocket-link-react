import React from "react";
import "../style/section.css";

function Section({id,title,description}){
    return(
        <section id={id} >
            <div className="section">
                <header>
                    <h1>{title}</h1><hr></hr>
                </header>
                <div className="content">
                    <p className="text">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Section;
