import { styled } from "styled-components"
const Container = styled.div`
    height:500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const Input = styled.input`
    width: 303px;
    height: 45px;
    border-radius: 5px;
    border: solid 1px rgba(212, 212, 212, 1);
    color:rgba(212, 212, 212, 1);
    background-color:rgba(255, 255, 255, 1);
    font-family: Lexend Deca;
    font-weight: 400;
    font-size: 19.98px;
    line-height: 24.97px;
`
const Button = styled.button`
    width: 303px;
    height: 45px;
    border-radius: 5px;
    background-color: rgba(82, 182, 255, 1);
    font-family: Lexend Deca;
    font-weight: 400;
    font-size: 20.98px;
    line-height: 26.22px;
    color: rgba(255, 255, 255, 1);
`
const ButtonRetorno = styled.button`
    width: 250px;
    font-family: Lexend Deca;
    font-weight: 400;
    font-size: 13.98px;
    line-height: 17.47px;
    text-align: center;
    color: rgba(82, 182, 255, 1);
    border:none;
    background-color: rgba(255, 255, 255, 1);
    text-decoration: underline;
`
export {Button, ButtonRetorno,Container,Input}