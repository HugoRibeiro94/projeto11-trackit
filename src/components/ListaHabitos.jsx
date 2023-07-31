import { styled } from "styled-components";
import vector from "../assets/Vector.png";
import axios from "axios";
import Context from "../Context";
import { useContext } from "react";

export default function ListaHabitos({name,days,arrayDay,idHabito,config}){

    const {token, setToken} = useContext(Context);

    function deletarHabito(){
        const text = "Deseja deletar o habito?"
        if(confirm(text)==true){
            const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHabito}`,config);
            promise.then(resposta => console.log(resposta))
            promise.catch(erro => console.log(erro))
            console.log(idHabito)
        }else{
            console.log("cancelar")
        }
    }

    return(
        <Lista data-test="habit-container">
            <p data-test="habit-name">{name}</p>
            <img data-test="habit-delete-btn" onClick={deletarHabito} src={vector} />
            <div>{days.map((days,i) => <Day data-test="habit-day" key={i}>{arrayDay[days]}</Day>)}</div>
        </Lista>
    );
}
const Lista = styled.div`
    width: 340px;
    height: 150px;
    position: relative;
    border: solid 1px #a4a3a3;
    margin-bottom: 10px;
    p{
        width: 303px;
        height: 43px;
        margin-left: 10px;
        border-radius: 5px;
        font-family: Lexend Deca;
        font-weight: 400;
        font-size: 19.98px;
        line-height: 24.97px;
        color: #a4a3a3;
    }
    div{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    img{
        width: 13px;
        height: 15px;
        position: absolute;
        top: 5px;
        left: 300px;
    }
`
const Day = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    font-family: Lexend Deca;
    font-weight: 400;
    font-size: 19.98px;
    line-height: 24.97px;
    text-align: center;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(207, 207, 207, 1);
`