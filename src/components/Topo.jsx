import logoTopo from "../assets/TrackIt.png";
import { useContext } from "react";
import Context from "../Context";
import { styled } from "styled-components";

export default function Topo(){

    const {image, setImage} = useContext(Context);

    return(
        <Header>
            <img src={logoTopo}/>
            <img src={image}/>
        </Header>
    )
}

const Header = styled.div`
    width:100%;
    height: 70px;
    background-color: rgba(18, 107, 165, 1);
    box-shadow: rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    top: 0;
    left: 0;
    img{
        width: 51px;
        height: 51px;
    }   
`