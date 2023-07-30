import Header from "../components/Topo";
import Footer from "../components/Menu";
import { styled } from "styled-components";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Context from "../Context";
import ListaHabitos from "../components/ListaHabitos";

export default function HabitPage(){
    //configurando token
    const {token, setToken} = useContext(Context);
    const config = {
        headers: { Authorization :`Bearer ${token}`}
    }
    // url axios
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    const [listaHabitos, setListaHabitos] = useState([]);

    //componente listar habitos
    useEffect(() => {
        const promise = axios.get(url,config);
        promise.then(resposta => {
            console.log(resposta);
            setListaHabitos(resposta.data);
        });
        promise.catch( erro => console.log(erro) );
    },[]);

    

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

        const promise = axios.post(url,novoHabito,config);
        promise.then(resposta => {
            console.log(resposta);
        });
        promise.catch( erro => console.log(erro) );
    }
    const [mostrar, setMostrar] = useState(false);

    function aparecerForm(){
        setMostrar(true);
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
                    <FormHabit>
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
                            <InputDay
                                data-test="habit-day"
                                type="button" 
                                key={i} 
                                value={day} 
                                onClick={()=>addDay(i)}/>
                            )
                        )}
    
                        <ButtonCancelar data-test="habit-create-cancel-btn">Cancelar</ButtonCancelar>
                        <ButtonSalvar data-test="habit-create-save-btn" onClick={saveHabit}>Salvar</ButtonSalvar>
                    </FormHabit>
                )}
                {listaHabitos.map( listaHabitos => 
                    <ListaHabitos
                        key={listaHabitos.id}
                        name={listaHabitos.name}
                        days={listaHabitos.days}
                        array={array}
                        />
                    )}
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </Habit>
            <Footer/>
        </>
    )
}
//listaHabitosSelecionados={listaHabitosSelecionados}
//setlistaHabitosSelecionados={setlistaHabitosSelecionados}
const Titulo = styled.div`    
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 70px;
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
    height: auto;
    p{
        font-family: Lexend Deca;
        font-weight: 400;
        font-size: 17.98px;
        line-height: 22.47px;
        color: rgba(102, 102, 102, 1);
    }
  
`
const FormHabit = styled.div`
    width: 340px;
    height: 180px;
    input:nth-child(1){
        width: 303px;
        height: 43px;
        border-radius: 5px;
        font-family: Lexend Deca;
        font-weight: 400;
        font-size: 19.98px;
        line-height: 24.97px;
        color: rgba(219, 219, 219, 1);
    }
`
const InputDay = styled.input`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    font-family: Lexend Deca;
    font-weight: 400;
    font-size: 19.98px;
    line-height: 24.97px;
    color: rgba(219, 219, 219, 1);
`
const ButtonCancelar = styled.button`
    width: 69px;
    height: 20px;
    font-family: Lexend Deca;
    font-weight: 400;
    font-size: 15.98px;
    line-height: 19.97px;
    text-align: center;
    color: rgba(82, 182, 255, 1);
    border: none;
    background-color: rgba(255, 255, 255, 1);
`
const ButtonSalvar = styled.button`
    width: 84px;
    height: 35px;
    border-radius: 5px;
    font-family: Lexend Deca;
    font-weight: 400;
    font-size: 15.98px;
    line-height: 19.97px;
    text-align: center;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(82, 182, 255, 1);
`