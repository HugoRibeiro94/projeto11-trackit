import Header from "../components/Topo";
import Footer from "../components/Menu";
import { styled } from "styled-components";

export default function HistoricPage(){
    return(
        <>
            <Header/>
                <Titulo>
                    <h1>Historico</h1>
                    <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                </Titulo>
            <Footer/>
        </>
    )
}

const Titulo = styled.div`
    width: 100%;
    height: auto;
    background-color: rgba(219, 219, 219, 1);
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 70px 0;
    h1{
        font-family: Lexend Deca;
        font-weight: 400;
        font-size: 22.98px;
        line-height: 28.72px;
        color: rgba(18, 107, 165, 1);
    }
    p{
        font-family: Lexend Deca;
        font-weight: 400;
        font-size: 17.98px;
        line-height: 22.47px;
        color: rgba(102, 102, 102, 1);
    }
  
`