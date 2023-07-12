// listaFilmes

let campo = document.querySelector("#campoBusca");
let resultado = document.querySelector("#listaFilmes");

campo.onkeydown = function (e) {
  if (e.key == "Enter") buscar(campo.value.toLowerCase());
};

document.querySelector("#limpaBusca").onclick = function () {
  campo.value = "";
  resultado.innerHTML = "";
};

function buscar(trechoTitulo) {
  let filmeEncontrado = listaFilmes.filter(
    function(f) {
      return f.titulo.toLowerCase().includes(trechoTitulo);
    }
  );

  if(filmeEncontrado.length == 0) {
    resultado.innerHTML = "<p>Nenhum filme encontrado.</p>";
    return;
  }

  resultado.innerHTML = "";
  filmeEncontrado.forEach(function (f) {
    resultado.innerHTML += htmlFilme(f);
    document.querySelector("#linkFilme" + f.id).href =
      "./filme.html?id=" + f.id;
  });
};
