import { styled } from "styled-components"
import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <Footer data-test="menu">
            <Link to="/habitos">
                <ButtonMenu data-test="habit-link">Habitos</ButtonMenu>
            </Link>
            <Link to="/hoje">
                <ButtonToday data-test="today-link">Hoje</ButtonToday>
            </Link>
            <Link to="/historico">
                <ButtonMenu data-test="history-link">Historico</ButtonMenu>
            </Link>
        </Footer>
    )
}
const Footer = styled.div`
    width: 100%;
    height: 70px;
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0px;
    left: 0;
`
const ButtonMenu = styled.button`
    width: 68px;
    height: 22px;
    color: rgba(82, 182, 255, 1);
    background-color: rgba(255, 255, 255, 1);
    border: none;
    font-family: Lexend Deca;
    font-weight: 400;
    font-size: 17.98px;
    line-height: 22.47px;
    text-align: center;
`
const ButtonToday = styled.button`
    width: 91px;
    height: 91px;
    background-color: rgba(82, 182, 255, 1);
    color: rgba(255, 255, 255, 1);
    border-radius: 50%;
    border: none;
    font-family: Lexend Deca;
    font-weight: 400;
    font-size: 17.98px;
    line-height: 22.47px;
    text-align: center;
`