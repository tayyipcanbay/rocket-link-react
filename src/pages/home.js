import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Section from "../components/section";

function Home() {
    const handleScroll = event => {
    };
    const data=[
        {
            id: 1,
            title: "ROCKET LINK",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
            image: "https://picsum.photos/1920/1080",
            ref:"what-is-rocket-link"
        },
    ]


    return (
        <div style={{backgroundColor:"white",width:"100vw",height:"100vh"}}>
            <Navbar />
            <Section  scrollHandler={handleScroll} data={data[0]}/>
            <Footer />
        </div>
    )
}
    export default Home;
