import { styled } from "styled-components";
import { useContext, useEffect, useState } from "react";
import Context from "../Context";
import Header from "../components/Topo";
import Footer from "../components/Menu";
import axios from "axios";
import dayjs from "dayjs";
import HabitToday from "../components/HabitToday";

export default function TodayPage(){

    const arrayWeek = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sabado"];

    const diaDaSemana = arrayWeek[dayjs().format('d')];
    const diaDoMes = dayjs().date();
    const mes = dayjs().month();
    
    const {image, setImage} = useContext(Context);
    const {token, setToken} = useContext(Context);

    const config = {
        headers: { Authorization :`Bearer ${token}`}
    }

    const [habitosHoje,setHabitosHoje] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",config);
        promise.then(resposta => {
            console.log(resposta.data);
            setHabitosHoje(resposta.data);
        });
        promise.catch( erro => console.log(erro) );
    },[]);

    return(
        <>
            <Header/>
                <Date><h1 data-test="today">{diaDaSemana}, {diaDoMes}/{mes}</h1></Date>
                <Progresso data-test="today-counter">Nenhum hábito concluído ainda</Progresso>
                {habitosHoje.map( habitosHoje => 
                    <HabitToday
                        key={habitosHoje.id}
                        name={habitosHoje.name}
                        done={habitosHoje.done}
                        currentSequence={habitosHoje.currentSequence}
                        highestSequence={habitosHoje.highestSequence}
                        />
                    )}
            <Footer/>
        </>
    )
}

const Date = styled.div`    
    
    
    margin-top: 90px;
    margin-left: 15px;
    h1{
        font-family: Lexend Deca;
        font-weight: 400;
        font-size: 22.98px;
        line-height: 28.72px;
        color: rgba(18, 107, 165, 1);
    }
`
const Progresso = styled.div`
    width: 278px;
    height: 22px;
    margin-left: 15px;
    margin-bottom: 15px;
    font-family: Lexend Deca;
    font-weight: 400;
    font-size: 17.98px;
    line-height: 22.47px;
    color:rgba(186, 186, 186, 1);
`