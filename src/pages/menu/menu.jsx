import { BookCard, BooksContainer, Container } from "./styles";
import { api } from "../../services/api";

export async function Menu() {
  const token = localStorage.getItem("user");

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const response = await api.get("/books", config);

  const books = response.data.books;

  {
    /* |tentando passar o token na requisição mas sem sucesso| */
  }

  return (
    <Container>
      <BooksContainer>
        <h1>Escolha entre os livros disponiveis</h1>

        {/*mapeando a lista para renderizar cada livro dentro de uma div card*/}

        {books.map((book) => {
          <BookCard>{book}</BookCard>;
        })}

        {/*cada card tera dois icones cada um com uma opção para delete e update */}
      </BooksContainer>
    </Container>
  );
}
