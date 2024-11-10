// Obtendo o elemento de busca
const inputSerch = document.getElementById("busca");
let cod = "";

// Função que será chamada ao clicar no botão de busca
function testeprocura() {
    const busca = inputSerch.value; // Pega o valor do input

    // Verifique se o campo de busca não está vazio
    if (busca.trim() === "") {
        alert("Por favor, insira um título ou autor para buscar.");
        return;
    }

    // Faça a requisição para o PHP
    fetch("procurar.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `busca=${encodeURIComponent(busca)}`
    })
    .then(response => response.json())
    .then(data => {
        console.log("Dados retornados:", data);
        const livrosAdicionados = new Set(); // Para rastrear livros já adicionados
        cod = ""; // Limpa o código HTML acumulado

        // Loop através dos livros retornados
        data.forEach(livro => {
            const nome_livro = livro.nome;
            const img_livro = livro.imagens;
            const desc_livro = livro.desc;

            // Adiciona apenas se não estiver no Set
            if (!livrosAdicionados.has(nome_livro)) {
                livrosAdicionados.add(nome_livro); // Marca o livro como adicionado
                cod += `<div class="card">
                            <div class="bcgimg">
                                <img src="${img_livro}" class="capa card-img-top" alt="imgs/teste.jpg">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title bookTitle">${nome_livro}</h5>
                                <p class="card-text description">"${desc_livro}"</p>
                                <a href="#" class="linkSell btn btn-primary">amazon.com.br</a>
                            </div>
                        </div>`;
            }
        });
        
        // Adiciona o HTML gerado à página
        addHTML(cod);
    })
    .catch(error => console.error('Error:', error));
}

// Função para adicionar HTML à página
function addHTML(cod) {
    document.getElementById("teste").innerHTML = cod;   
}

// Função para carregar livros iniciais
function carregarlivros() {
    fetch("livros.php")
    .then(response => response.json())
    .then(data => {
        data.forEach(livro => {
            const nome_livro = livro.nome;
            const img_livro = livro.imagens;
            const desc_livro = livro.desc;

            cod += `<div class="card">
                        <div class="bcgimg">
                            <img src="${img_livro}" class="capa card-img-top" alt="imgs/teste.jpg">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title bookTitle">${nome_livro}</h5>
                            <p class="card-text description">"${desc_livro}"</p>
                            <a href="#" class="linkSell btn btn-primary">amazon.com.br</a>
                        </div>
                    </div>`;
        });
        addHTML(cod);
        cod = "";
    })
    .catch(error => console.error('Error:', error));
}

// Carregar os livros iniciais quando a página for carregada
document.addEventListener("DOMContentLoaded", carregarlivros);
