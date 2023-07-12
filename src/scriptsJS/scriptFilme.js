let fSelecionado = document.querySelector("#filmeSelecionado");
fSelecionado.innerHTML = "";

let fID = location.search.substring(location.search.search("=")+ 1,10);
let i = listaFilmes.findIndex(function (f) {
  if (f.id == fID) return true;
  else return false;
});
fSelecionado.innerHTML = htmlFilme(listaFilmes[i]);
