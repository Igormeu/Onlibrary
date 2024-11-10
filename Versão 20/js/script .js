
function searchBooks() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const books = document.querySelectorAll('.book');
  const booksContainers = document.querySelectorAll('#booksContainer');
  const searchResults = document.getElementById('searchResults');
  const searchResultsContainer = document.getElementById('searchResultsContainer');
  const notFoundMessage = document.getElementById('notFoundMessage');

  // Limpa a seção de resultados da busca
  searchResultsContainer.innerHTML = '';
  notFoundMessage.style.display = 'none';  // Esconde a mensagem "não encontrado" por padrão

  if (searchInput === '') {
      // Exibe todos os livros se a busca estiver vazia
      booksContainers.forEach(container => container.style.display = 'flex');
      searchResults.style.display = 'none';
      return;
  }

  let hasResults = false;  // Variável para verificar se há resultados

  books.forEach(book => {
      const title = book.getAttribute('data-title').toLowerCase();
      const author = book.getAttribute('data-author').toLowerCase();

      // Verifica se o título ou autor incluem o termo de busca
      if (title.includes(searchInput) || author.includes(searchInput)) {
          // Clona o livro para exibi-lo na seção de resultados
          const bookClone = book.cloneNode(true);
          searchResultsContainer.appendChild(bookClone);
          hasResults = true;
      }
  });

  if (hasResults) {
      booksContainers.forEach(container => container.style.display = 'none'); // Oculta todos os containers de livros
      searchResults.style.display = 'flex';      // Exibe a seção de resultados
  } else {
      booksContainers.forEach(container => container.style.display = 'none');  // Oculta todos os containers de livros
      searchResults.style.display = 'flex';      // Exibe a seção de resultados
      notFoundMessage.style.display = 'block'; 
      notFoundMessage.innerHTML = `Nenhuma correspondência para "${searchInput}"` 
       // Exibe mensagem "não encontrado"
  }
}

