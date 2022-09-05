import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { Container, Inputs, LoginBox } from "./styles";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export function Login() {
  const { register, handleSubmit } = useForm();
  const navigation = useNavigate();

  async function mySubmit(data) {
    try {
      const response = await api.post("/login", data);

      if (response.status == 200) {
        toast.success("Login realizado com sucesso!");
        localStorage.setItem("user", JSON.stringify(response.data.token));
        api.defaults.headers.common.authorization = response.data.token;
        navigation("/menu");
      } else {
        toast.error("Usuário ou senha incorretos");
      }
    } catch (error) {
      toast.error("Usuário ou senha incorretos");
    }
  }

  return (
    <Container>
      <LoginBox>
        <h1>
          Bem vindo a Livraria Senai, Insira suas credenciais para ter acesso
          aos livros!
        </h1>

        <form onSubmit={handleSubmit(mySubmit)}>
          <Inputs>
            <TextField
              fullWidth
              id="username"
              name="username"
              label="Usuário"
              variant="outlined"
              {...register("username")}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Senha"
              variant="outlined"
              {...register("password")}
            />
            <Button type="submit" variant="contained" fullWidth>
              ENVIAR
            </Button>
          </Inputs>
        </form>
      </LoginBox>
    </Container>
  );
}
