import { styled } from "styled-components";
import { useContext } from "react";
import Context from "../Context";
import Header from "../components/Topo";
import Footer from "../components/Menu";

export default function TodayPage(){

    const {image, setImage} = useContext(Context);
    return(
        <>
            <Header/>
                
            <Footer/>
        </>
    )
}

