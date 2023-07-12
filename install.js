let listaFilmes = [
  {
    id: 1,
    titulo: "INTERESTELAR",
    poster: "interestelar.jpg",
    ano: 2014,
    recomendacao: 10,
    duracao: "2h49",
    sinopse:
      "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço, na tentativa de garantir a sobrevivência da humanidade.",
    genero: ["Aventura", "Drama", "Ficção Científica"],
    direcao: ["Christopher Nolan"],
    elenco: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
  },
  {
    id: 2,
    titulo: "CORINGA",
    poster: "coringa.jpg",
    ano: 2019,
    recomendacao: 16,
    duracao: "2h02",
    sinopse:
      "Um comediante falido enlouquece e se torna um assassino psicopata.",
    genero: ["Policial", "Drama", "Suspense"],
    direcao: ["Todd Phillips"],
    elenco: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
  },
  {
    id: 3,
    titulo: "BOHEMIAN RHAPSODY",
    poster: "bohemianrapsody.jpg",
    ano: 2018,
    recomendacao: 14,
    duracao: "2h14",
    sinopse:
      "História da lendária banda de rock Queen e do vocalista Freddie Mercury.",
    genero: ["Biografia", "Drama", "Musical"],
    direcao: ["Bryan Singer"],
    elenco: ["Rami Malek", "Lucy Boynton", "Gwilym Lee"],
  },
  {
    id: 4,
    titulo: "EXTRAORDINÁRIO",
    poster: "extraordinario.jpg",
    ano: 2017,
    recomendacao: 10,
    duracao: "1h53",
    sinopse:
      "Conta a inspiradora e doce história de August Pullman, um menino que nasceu com uma síndrome genética",
    genero: ["Drama", "Família"],
    direcao: ["Stephen Chbosky"],
    elenco: [
      "Jacbob Tremblay",
      "Owen Wilson",
      "Izabela Vidovic",
      "Sonia Braga",
    ],
  },

  {
    id: 5,
    titulo: "QUESTÃO DE TEMPO",
    poster: "questaodetempo.jpg",
    ano: 2013,
    recomendacao: 12,
    duracao: "2h03",
    sinopse: "Tim descobre que pode viajar no tempo e mudar o que acontece",
    genero: ["Comédia", "Drama", "Fantasia"],
    direcao: ["Richard Curtis"],
    elenco: ["Domhnall Gleeson", "Rachel McAdams", "Bill Nighty"],
  },

  {
    id: 6,
    titulo: "JOJO RABIT",
    poster: "jojorabbit.jpg",
    ano: 2019,
    recomendacao: 14,
    duracao: "1h48",
    sinopse:
      "Um jovem parte do exército nazi descobre que sua mãe esconde uma menina judia em casa",
    genero: ["Comédia", "Drama", "Guerra"],
    direcao: ["Taika Waititi"],
    elenco: ["Roman Griffin Davis", "Thomasin McKenzie", "Scarlett Johanson"],
  },

  {
    id: 7,
    titulo: "WHIPLASH: Em busca da perfeição",
    poster: "whiplash.jpg",
    ano: 2014,
    recomendacao: 12,
    duracao: "1h46",
    sinopse:
      "Um jovem e promissor baterista se matricula em um conservatório famoso",
    genero: ["Drama", "Musical"],
    direcao: ["Damien Chazelle"],
    elenco: ["Miles Teller", "J.K. Simmons", "Melissa Benoist"],
  },

  {
    id: 8,
    titulo: "AVATAR",
    poster: "avatar.jpg",
    ano: 2009,
    recomendacao: 12,
    duracao: "2h42",
    sinopse:
      "Um militar paraplégico é despachado para a lua Pandora em uma missão",
    genero: ["Ação", "Aventura", "Fantasia"],
    direcao: ["James Cameron"],
    elenco: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
  },

  {
    id: 9,
    titulo: "NASCE UMA ESTRELA",
    poster: "nasceumaestrela.jpg",
    ano: 2018,
    recomendacao: 16,
    duracao: "2h16",
    sinopse: "Um experiente músico descobre uma jovem artista desconhecida",
    genero: ["Drama", "Musical", "Romance"],
    direcao: ["Bradley Cooper"],
    elenco: ["Lady Gaga", "Bradley Cooper", "Sam Elliott"],
  },
];

localStorage.clear();
localStorage.setItem("listafilmes", JSON.stringify(listaFilmes));

if (localStorage.getItem("listafilmes") != null)
  document.querySelector("#resultado").innerHTML = "Base de dados criada";
else 
  document.querySelector("#resultado").innerHTML = "Erro na base de dados";
