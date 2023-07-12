//Cria lista de filmes
//// Os operadores (??) (?) e (:) substituem a formatação condicional
let sListaFilmes = localStorage.getItem("listafilmes") ?? "[]";
let listaFilmes = JSON.parse(sListaFilmes);

//Cria eventos das opções do menu
document.querySelector("#item1").onclick = function () {
  location.assign("./index.html");
};

document.querySelector("#item2").onclick = function () {
  location.assign("./busca.html");
};

document.querySelector("#item3").onclick = function () {
  location.assign("./sobre.html");
};

document.querySelector("#menuButtom").onclick = function () {
  document.querySelector("#menuLista").classList.toggle("ativo");
};

//Função para gerar o código HTML dos filmes
let htmlFilme = function (f) {
  return `
      <article id="filme${f.id}">
          <figure>
            <img
              src="./posters/${f.poster}"
              alt="Poster do filme ${f.titulo}"
            />
          </figure>
          <div class="content">
            <h2 class="nomeFilme">${f.titulo}</h2>
            <ul class="dados">
              <li class="anoFilme">${f.ano}</li>
              <li class="recomendacao">${f.recomendacao}</li>
              <li class="duracao">${f.duracao}</li>
            </ul>
            <p class="sinopse">
              ${f.sinopse}
            </p>
            <h3>Gênero</h3>
            <ul class="genero">
              ${f.genero
                .map(function (e) {
                  return "<li>" + e + "</li>";
                })
                .join("")}
            </ul>
            <h3>Diretor</h3>
            <ul class="diretor">
              ${f.direcao
                .map(function (e) {
                  return "<li>" + e + "</li>";
                })
                .join("")}
            </ul>
            <h3>Elenco</h3>
            <ul class="elenco">
              ${f.elenco
                .map(function (e) {
                  return "<li>" + e + "</li>";
                })
                .join("")}
            </ul>
            <p class="vejamais"><a id="linkFilme${
              f.id
            }"href="#">Veja mais</a></p>
          </div>
        </article>
      `;
};
