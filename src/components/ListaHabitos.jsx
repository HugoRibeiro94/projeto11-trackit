import { styled } from "styled-components";

export default function ListaHabitos({name,days,arrayDay}){
    return(
        <Lista data-test="habit-container">
            <div data-test="habit-name">{name}</div>
            {days.map(days => <Day data-test="habit-day" key={days}>{arrayDay[days]}</Day>)}
        </Lista>
    );
}
const Lista = styled.div`
    width: 100%;
    margin-top: 10px;
`
const Day = styled.div`
    background-color: beige;
`