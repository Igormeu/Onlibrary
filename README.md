# Onlibrary

Bem-vindo ao **Onlibrary**, um sistema web de catálogo de livros, desenvolvido para facilitar a busca, visualização e compra de livros online. Esta aplicação web utiliza HTML, CSS com Bootstrap para o layout responsivo, e integra Firebase para autenticação e gerenciamento de dados.

## Funcionalidades

- **Busca de Livros**: Os usuários podem pesquisar livros pelo título ou pelo autor.
- **Autenticação de Usuários**: O sistema permite o cadastro e login de usuários utilizando Firebase para autenticação.
- **Cadastro e Exibição de Livros**: O banco de dados contém detalhes sobre cada livro, incluindo título, autor, imagem e descrição.
- **Sistema Responsivo**: Layout ajustável para dispositivos móveis, com reordenação de componentes.
- **Integração com Firebase**: Utilizado para armazenamento de dados dos livros e gerenciamento dos usuários.

## Tecnologias Utilizadas

- **Frontend**:
  - HTML5, CSS3 (com Bootstrap 5)
  - JavaScript
  - Firebase (para o backend de dados e autenticação de usuários)
  
- **Backend**:
  - PHP para comunicação com o Firebase e gerenciamento de dados.
  - Biblioteca **Kreait Firebase PHP SDK** para integração com o Firebase.
  
## Estrutura do Projeto

- `index.html`: Página inicial com a listagem de livros e uma barra de navegação.
- `Login.html`: Página de login de usuários.
- `Cadastro.html`: Página de cadastro de novos usuários.
- `CSS/style.css`: Estilos customizados para o site.
- `js/script.js`: Script para funcionalidade de busca e navegação.
- `procurar.php`: Código para busca de livros no banco de dados Firebase.
- `livros.php`: Código para carregamento dos dados iniciais de livros do Firebase.

## Configuração e Instalação

1. **Clonar o Repositório**:
   ```bash
   git clone https://github.com/seu-usuario/onlibrary.git
   cd onlibrary
   ```

2. **Instalar Dependências**:
   - No diretório raiz, instalar o **Kreait Firebase PHP SDK**.
     ```bash
     composer require kreait/firebase-php
     ```

3. **Configuração do Firebase**:
   - No Firebase, criar um projeto e baixar o arquivo de chave do serviço.
   - Substituir o arquivo `chaves/chavefirebase.json` pela chave do serviço Firebase do seu projeto.

4. **Hospedagem**:
   - O projeto pode ser hospedado em servidores PHP com suporte ao Composer e Firebase.

## Executando o Projeto

1. No navegador, abrir o arquivo `index.html`.
2. Utilize o campo de busca para encontrar livros pelo título ou autor.
3. Para interações mais avançadas, como cadastro e login, navegue até `Cadastro.html` ou `Login.html`.

## Contribuição

Contribuições são bem-vindas! Por favor, crie um *pull request* com sua proposta de melhoria ou entre em contato para discutir novas ideias.

