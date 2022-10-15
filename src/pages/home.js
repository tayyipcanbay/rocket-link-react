import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Section from "../components/section";

function Home() {
    
    return (
        <div style={{backgroundColor:"white",width:"100vw",height:"100vh"}}>
            <Navbar />
            <Section title="About" description="This is a description about the website."/>
            <Section title="About" description="This is a description about the website."/>
            <Footer />
        </div>
    )
}
    export default Home;
