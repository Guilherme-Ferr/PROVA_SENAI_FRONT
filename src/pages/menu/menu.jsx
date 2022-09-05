import { BooksContainer, Container } from "./styles";
import { api } from "../../services/api";

export async function Menu() {
  const token = localStorage.getItem("user");

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const bodyParameters = {
    key: "value",
  };
  const response = await api.get("/books", bodyParameters, config);
  console.log("🚀 ~ file: menu.jsx ~ line 18 ~ Menu ~ response", response);

  const books = response.data.books;

  return (
    <Container>
      <BooksContainer>
        <h1>Escolha entre os livros disponiveis</h1>

        {/*mapeando a lista para renderizar cada livro dentro de uma div card*/}
        {books.map((book) => {
          <div>{book}</div>;
        })}

        {/*cada card tera dois icones cada um com uma opção para delete e update */}
      </BooksContainer>
    </Container>
  );
}
