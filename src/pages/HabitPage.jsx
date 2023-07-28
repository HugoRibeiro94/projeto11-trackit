import Header from "../components/Topo";
import Footer from "../components/Menu";
import { styled } from "styled-components";
import { useState } from "react";
import axios from "axios";

export default function HabitPage(){

    const [mostrar, setMostrar] = useState(false);
    
    function aparecerForm(){
        setMostrar(true);
    }

    const array = ["D","S","T","Q","Q","S","S"];

    const [nameHabit, setNameHabit] = useState("");
    const [arrayDays, setArrayDays] = useState([]);
    const [desabilitar, setDesabilitar] = useState(false);

    function saveHabit(event){
        event.preventDefault();

        const novoHabito = {
            name: nameHabit,
            days: arrayDays
        }

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',novoHabito);
        promise.then(resposta => console.log(resposta));
        promise.catch( erro => console.log(erro) );
    }

    function addDay(i){
        console.log(i);
        setArrayDays([...arrayDays,i])
        console.log(arrayDays);
        
    }
    return(
        <>
            <Header/>
            <Titulo>
                <h1>Meus Habitos</h1>
                <button data-test="habit-create-btn" onClick={aparecerForm}>+</button>
            </Titulo>
            <Habit data-test="habit-create-container">
                {mostrar===true && (
                    <div>
                        <input
                            data-test="habit-name-input"
                            type="text" 
                            placeholder="nome do habito" 
                            onChange={ e => setNameHabit(e.target.value)} 
                            value={nameHabit}
                            required
                        />
                        {array.map( (day,i) => 
                            (
                            <input 
                                data-test="habit-day"
                                type="button" 
                                key={i} 
                                value={day} 
                                onClick={()=>addDay(i)}/>
                            )
                        )}
    
                        <button data-test="habit-create-cancel-btn">Cancelar</button>
                        <button data-test="habit-create-save-btn" onClick={saveHabit}>Salvar</button>
                    </div>
                )}
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </Habit>
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
    button{
        width: 40px;
        height: 35px;
        border-radius: 5px;
        color: rgba(255, 255, 255, 1);
        background-color: rgba(82, 182, 255, 1);
        border: none;
        font-family: Lexend Deca;
        font-weight: 400;
        font-size: 26.98px;
        line-height: 33.72px;
        text-align: center;
    }
`
const Habit = styled.div`
    width: 100%;
    height: 100%;

    p{
        font-family: Lexend Deca;
        font-weight: 400;
        font-size: 17.98px;
        line-height: 22.47px;
        color: rgba(102, 102, 102, 1);
    }
  
`
