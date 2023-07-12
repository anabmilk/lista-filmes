//Gerar a lista inicial de filmes
let lFilmes = document.querySelector("#listaFilmes");
//Esvazia a lista
lFilmes.innerHTML = "";
listaFilmes.forEach(function (f) {
  lFilmes.innerHTML += htmlFilme(f);
  document.querySelector("#linkFilme" + f.id).href = "./filme.html?id=" + f.id;
});