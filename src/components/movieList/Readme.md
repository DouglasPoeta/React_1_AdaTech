# Atividade [Entrega] - We 💚 movie 🎥

Você está envolvido em um projeto para criar um catálogo de filmes online. Seu objetivo é desenvolver uma aplicação React que exiba informações detalhadas sobre diferentes filmes. Além disso, a equipe de qualidade solicita que você utilize PropTypes para validar as propriedades dos seus componentes.

**Tarefas:**

1. **Componente de Filme (`MovieCard`):**
    - Crie um componente **`MovieCard`** que represente um card de filme.
    - O componente deve receber as seguintes props:
        - **`id`** (number): ID único do filme.
        - **`title`** (string): Título do filme.
        - **`genre`** (string): Gênero do filme.
        - **`releaseYear`** (number): Ano de lançamento do filme.
        - **`rating`** (number): Classificação do filme.
    - Utilize PropTypes para validar as props e garantir que apenas os tipos corretos sejam aceitos.
2. **Componente de Lista de Filmes (`MovieList`):**
    - Crie um componente **`MovieList`** que represente a lista de filmes na aplicação.
    - O componente deve receber a seguinte prop:
        - **`movies`** (array): Uma lista de objetos representando os filmes.
    - Utilize PropTypes para validar que **`movies`** é uma array e que cada item na array tem a estrutura correta (de acordo com as props do **`MovieCard`**).
3. **Integração no Aplicativo Principal:**
    - Crie um aplicativo principal (**`App.js`**) que utilize os componentes **`MovieCard`** e **`MovieList`**.
    - Passe props fictícias para os componentes para simular dados de filmes.
4. **Estilização:**
    - Adicione estilos aos seus componentes para garantir uma apresentação visual atraente.
    - Certifique-se de que a aplicação seja responsiva e funcione bem em diferentes dispositivos.
5. **Bônus (Opcional):**
    - Adicione funcionalidades extras, como pesquisa por título, filtro por gênero ou uma funcionalidade de favoritos.