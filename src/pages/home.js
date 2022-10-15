import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Home() {
    var data= [
        {
            name:"Alperen",
            surname:"Karslı"
        }
        ]
    return (
        <div style={{backgroundColor:"black",width:"100vw",height:"100vh"}}>
            <Navbar data={data} />
            
            
        </div>
    )
}
    export default Home;
