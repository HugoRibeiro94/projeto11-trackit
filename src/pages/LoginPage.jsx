import { Link, useNavigate } from "react-router-dom"
import {Button, ButtonRetorno,Container,Input} from "./../styles/StyleInicio"
import logo from "../assets/logoTrackIt.png"
import { useState } from "react";
import axios from "axios";

export default function LoginPage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [desabilitar,setDesabilitar] = useState(false);
    
    const navigate = useNavigate();

    function logar(event){

        event.preventDefault();

        setDesabilitar(true);

        const login = {
            email: email,
            password: password
        }

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',login);
        promise.then((resposta) => { 
            navigate('/hoje')
        });
        promise.catch( erro => 
            alert(erro), 
            setDesabilitar(false));
    }

    return(
        <>
            <Container>
                <img src={logo}/>
                
                    <Input
                        data-test="email-input"
                        type="email"
                        placeholder="email"
                        onChange={ e => setEmail(e.target.value)}
                        value={email}
                        disabled={desabilitar}
                        required
                    />
                    <Input
                        data-test="password-input"
                        type="password"
                        placeholder="senha"
                        onChange={ e => setPassword(e.target.value)}
                        value={password}
                        disabled={desabilitar}
                        required
                    />
                    <Button 
                        onClick={logar} 
                        disabled={desabilitar} 
                        data-test="login-btn">
                        Entrar
                    </Button>
                <Link to="/cadastro">
                    <ButtonRetorno data-test="signup-link" >Não tem uma conta? Cadastre-se!</ButtonRetorno>
                </Link>
            </Container>
        </>
    )
}

