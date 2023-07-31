import { styled } from "styled-components"
import check from "../assets/Check.png";

export default function HabitToday({name, done, highestSequence,currentSequence}){
    return(
        <Habito data-test="today-habit-container">
            <div data-test="today-habit-name">{name}</div>
            <p data-test="today-habit-sequence">Sequencia atual: {currentSequence}</p>
            <p data-test="today-habit-record">Seu recorde: {highestSequence}</p>
            <img data-test="today-habit-check-btn" src={check}/>
        </Habito>
    )
}
const Habito = styled.div`
    width: 340px;
    height: 150px;
    position: relative;
    border: solid 1px #a4a3a3;
    margin-bottom: 10px;
    div{
        width: 303px;
        height: 43px;
        margin-left: 10px;
        border-radius: 5px;
        font-family: Lexend Deca;
        font-weight: 400;
        font-size: 19.98px;
        line-height: 24.97px;
        color: rgba(102, 102, 102, 1);
    }
    p{
        width: 146px;
        height: 32px;
        font-family: Lexend Deca;
        font-weight: 400;
        font-size: 12.98px;
        line-height: 16.22px;
        color: rgba(102, 102, 102, 1);
    }
    img{
        width: 60px;
        height: 60px;
        background-color: rgba(143, 197, 73, 1);
        border-radius: 5px;
        position: absolute;
        top: 40px;
        left: 250px;
    }
`