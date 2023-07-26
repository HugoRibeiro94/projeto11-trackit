import { Link } from "react-router-dom"
import {Button, ButtonRetorno,Container,Input} from "./../styles/StyleInicio"
import logo from "../assets/logoTrackIt.png"

export default function LoginPage(){
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
                <Button>Entrar</Button>
                <Link to="/cadastro">
                    <ButtonRetorno>Não tem uma conta? Cadastre-se!</ButtonRetorno>
                </Link>
            </Container>
        </>
    )
}

