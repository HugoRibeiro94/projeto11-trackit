import { Link } from "react-router-dom"
import {Button, ButtonRetorno,Container,Input} from "./../styles/StyleInicio"
import logo from "../assets/logoTrackIt.png"

export default function RegisterPage(){
    return(
        <>
            <Container>
                <img src={logo}/>
                <Input
                    type="email"
                    placeholder="email"
                    required
                />
                <Input
                    type="password"
                    placeholder="senha"
                    required
                />
                <Input
                    type="text"
                    placeholder="nome"
                    required
                />
                <Input
                    type="url"
                    placeholder="foto"
                    required
                />
                <Button>Cadastrar</Button>
                <Link to="/">
                    <ButtonRetorno>Já tem uma conta? Faça login!</ButtonRetorno>
                </Link>
            </Container>
        </>
    )
}