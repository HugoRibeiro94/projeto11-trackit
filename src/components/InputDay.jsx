import { useState } from "react";
import { styled } from "styled-components";

export default function InputDay(props){ 

    const {desabilitar,setDesabilitar,novoArrayDays,setNovoArrayDays,arrayDay,i} = props
    const [selecionado, setSelecionado] = useState("");
    //console.log(selecionado)
    //console.log(arrayDay)
    //console.log(i)
    function addDay(i,selecionado){
        console.log(i);
        console.log(arrayDay);
        console.log(selecionado);
        if(selecionado===""){
            setSelecionado("selecionado");
            setNovoArrayDays([...novoArrayDays,i]);
        }
        if(selecionado==="selecionado"){
            setSelecionado("");
            novoArrayDays.pop();
        }      
    }
    return(
        <>
            <Input 
            data-test="habit-day"
            type="button"
            value={arrayDay}
            selected={selecionado}
            disabled={desabilitar}
            onClick={()=>addDay(i,selecionado,novoArrayDays)}
            />
        </>
       
    )
}
const Input = styled.input`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    font-family: Lexend Deca;
    font-weight: 400;
    font-size: 19.98px;
    line-height: 24.97px;
    color: ${props =>{
        if(props.selected==="selecionado"){
            return "rgba(255, 255, 255, 1)"
        }if(props.selected===""){
            return "rgba(207, 207, 207, 1)"
        }
    }};
    background-color: ${props =>{
        if(props.selected==="selecionado"){
            return "rgba(207, 207, 207, 1)"
        }if(props.selected===""){
            return "rgba(255, 255, 255, 1)"
        }
    }};
`