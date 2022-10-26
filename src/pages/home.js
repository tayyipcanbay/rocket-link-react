import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Section from "../components/section";

function Home() {
    const data=[
        {
            id: "what-is-rocket-link",
            title: "ROCKET LINK",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
            image: "https://picsum.photos/1920/1080",
            ref:"how-can-i-use-rocket-link"
        },
        {
            id: "how-can-i-use-rocket-link",
            title: "HOW CAN I USE ROCKET LINK",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
            image: "https://picsum.photos/1920/1080",
            ref:"how-it-works"
        },
        {
            id: "how-it-works",
            title: "HOW CAN I USE ROCKET LINK",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
            image: "https://picsum.photos/1920/1080",
            ref:""
        },

    ]


    return (
        <div style={{backgroundColor:"white",width:"100vw",height:"100vh"}}>
            <Navbar />
            <Section  data={data[0]}/>
            <Section  data={data[1]}/>
            <Section  data={data[2]}/>
            <Footer />
        </div>
    )
}
    export default Home;
