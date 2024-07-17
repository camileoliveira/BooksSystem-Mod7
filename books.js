const prompt = require("prompt-sync")({ sigint: true });

let arrBooks = [
  {
    id: 1,
    title: "Alice no pais das maravilhas",
    year: "1865",
    author: " Lewis Carroll",
    genre: "Fantasia",
  },
  {
    id: 2,
    title: "Os miseraveis",
    year: "1862",
    author: "Victor Hugo",
    genre: "Romance",
  },
  {
    id: 3,
    title: "A Metamorfose",
    year: "1915",
    author: "Franz Kafka",
    genre: "Ficção Científica",
  },
];

function menu() {
  let questionInicial = prompt(` Digite: 
    1 para adicionar um novo livro;
    2 para listar;
    3 para ataulizar dados;
    4 para remover;
    5 para pesquisar;
    x para sair
    `);
  while (questionInicial != "x") {
    if (questionInicial == 2) {
      seeBooks();
    }
    if (questionInicial == 1) {
      addBook();
    }
    if (questionInicial == 3) {
      atualizar();
    }
    if (questionInicial == 4) {
      remove();
    }

    if (questionInicial == "5") {
      findBook();
    }
    questionInicial = prompt(` Digite: 
            1 para adicionar um novo livro;
            2 para listar;
            3 para ataulizar dados;
            4 para remover;
            5 para pesquisar;
            x para sair
            `);
  }
}

menu();

function addBook() {
  let id = prompt("Id: ");
  let title = prompt("Title: ");
  let author = prompt("Author: ");
  let year = prompt("Year: ");
  let genre = prompt("Genre: ");

  const objectBooks = new Object();
  objectBooks.id = id;
  objectBooks.title = title;
  objectBooks.author = author;
  objectBooks.year = year;
  objectBooks.genre = genre;

  arrBooks.push(objectBooks);
}

function seeBooks() {
  arrBooks.forEach((book) => {
    console.log(
      `Id: ${book.id} - Title: ${book.title}, Year: ${book.year}, Author: ${book.author}, Genre: ${book.genre}`
    );
  });
}

function atualizar() {
  findId = prompt("Dados do qual id você quer atualizar? ");
  for (var i = 0; i < arrBooks.length; i++) {
    if (findId == arrBooks[i].id) {
      let info = prompt(`Qual informação do Id ${findId} você quer alterar? `);
      if (info == "title") {
        let newTitle = prompt("Novo título: ");
        arrBooks[i].title = newTitle;
      }

      if (info == "year") {
        let newYar = prompt("Ano:");
        arrBooks[i].year = newYar;
      }

      if (info == "author") {
        let newAuthor = prompt("Autor: ");
        arrBooks[i].author = newAuthor;
      }

      if (info == "genre") {
        let newGenre = prompt("Gênero: ");
        arrBooks[i].genre = newGenre;
      }

      console.log("Dados alterados com sucesso!");
    }
  }
}

function remove() {
  let id = prompt("Dados do qual id você quer remover?");
  let position;
  for (var i = 0; i < arrBooks.length; i++) {
    if (id == arrBooks[i].id) {
      position = id;
    }
  }

  for (var i = position; i < arrBooks.length; i++) {
    arrBooks[i] = arrBooks[i + 1];
  }

  arrBooks.length = arrBooks.length - 1;
  console.log("Dados excluídos.");
}

function findBook() {
  let criterioDeBusca = prompt(`Por qual critério você quer buscar o livro?
  `);
  let title;

  if (criterioDeBusca == "title") {
    title = prompt("Qual título você quer buscar? ");

    for (var i = 0; i < arrBooks.length; i++) {
      if (title == arrBooks[i].title) {
        console.log(
          `Id: ${arrBooks[i].id} - Title: ${arrBooks[i].title}, Year: ${arrBooks[i].year}, Author: ${arrBooks[i].author}, Genre: ${arrBooks[i].genre}`
        );
      } else console.log("Título não econtrado");
    }
  }

  let year;
  if (criterioDeBusca == "year") {
    year = prompt("Qual ano você quer buscar? ");

    for (var i = 0; i < arrBooks.length; i++) {
      if (year == arrBooks[i].year) {
        console.log(
          `Id: ${arrBooks[i].id} - Title: ${arrBooks[i].title}, Year: ${arrBooks[i].year}, Author: ${arrBooks[i].author}, Genre: ${arrBooks[i].genre}`
        );
      }
    }
  }

  let author
  if(criterioDeBusca == 'author'){

    author = prompt("Qual autor você quer buscar? ");

    for(var i = 0; i < arrBooks.length; i++){
      if (author == arrBooks[i].author){
        console.log(
          `Id: ${arrBooks[i].id} - Title: ${arrBooks[i].title}, Year: ${arrBooks[i].year}, Author: ${arrBooks[i].author}, Genre: ${arrBooks[i].genre}`
        );
      }
    }
  }

  let genre 
  if(criterioDeBusca == 'genre'){
    genre = prompt("Qual gênero você quer buscar? ")
    for(var i = 0; i < arrBooks.length; i++){
      if(genre == arrBooks[i].genre){
        console.log(
          `Id: ${arrBooks[i].id} - Title: ${arrBooks[i].title}, Year: ${arrBooks[i].year}, Author: ${arrBooks[i].author}, Genre: ${arrBooks[i].genre}`
        );
      }
    }
  } else{
  console.log("Resultado não encontrado.")
  }
}
