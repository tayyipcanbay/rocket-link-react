import React from "react";
import "../style/linkItem.css";
import styled ,{keyframes} from "styled-components";
import {bounce} from "react-animations";

function LinkItem(props) {
    var title="This is gonna be a title";
    const Bounce=styled.div`animation:2s ${keyframes`${bounce}`}`;
    return(
        <Bounce>
            <div className="link-body">
                <div className="link-container">
                    <div className="link-header">
                        <div className="link-icon">
                            <img src={"https://picsum.photos/200"} alt="link icon" />
                        </div>
                        <div className="link-title">
                            <div className="link-title-text">
                                <a target={"_blank"} href="https://instagram.com">
                                {title}
                                </a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </Bounce>
    )
}
export default LinkItem;