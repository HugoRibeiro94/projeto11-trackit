import { Link, useNavigate } from "react-router-dom"
import {Button, ButtonRetorno,Container,Input} from "./../styles/StyleInicio"
import logo from "../assets/logoTrackIt.png"
import { useState } from "react"
import axios from "axios";

export default function RegisterPage(){

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");
    const [desabilitar,setDesabilitar] = useState(false);

    const navigate = useNavigate();

    function cadastrar(event){

        event.preventDefault();

        setDesabilitar(true);

        const novaCadastro = {
            email: email,
            name: name,
            image: image,
            password: password
        }

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',novaCadastro);
        promise.then((resposta) => { navigate('/')});
        promise.catch( erro => alert(erro));
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
                        required
                        disabled={desabilitar}
                    />
                    <Input
                        data-test="password-input"
                        type="password"
                        placeholder="senha"
                        onChange={ e => setPassword(e.target.value)}
                        value={password}
                        required
                        disabled={desabilitar}
                    />
                    <Input
                        data-test="user-name-input"
                        type="text"
                        placeholder="nome"
                        onChange={ e => setName(e.target.value)}
                        value={name}
                        required
                        disabled={desabilitar}
                    />
                    <Input
                        data-test="user-image-input" 
                        type="url"
                        placeholder="foto"
                        onChange={ e => setImage(e.target.value)}
                        value={image}
                        required
                        disabled={desabilitar}
                    />
                    <Button 
                        onClick={cadastrar} 
                        disabled={desabilitar} 
                        data-test="signup-btn">
                            Cadastrar
                    </Button>
                
                <Link to="/">
                    <ButtonRetorno data-test="login-link">Já tem uma conta? Faça login!</ButtonRetorno>
                </Link>
            </Container>
        </>
    )
}