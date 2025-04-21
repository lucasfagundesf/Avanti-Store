// Seleciona todos os itens no menu e as divs
const maisOpcoesItem = document.querySelectorAll(".maisOpcoesItem");
const contentDivs = document.querySelectorAll(".content-div");

// Adiciona o evento de clique a cada item
maisOpcoesItem.forEach((item) => {
  item.addEventListener("click", () => {
    const targetId = item.getAttribute("data-target");
    const targetDiv = document.getElementById(targetId);

    // Verifica se a div correspondente já está visível
    if (!targetDiv.classList.contains("hidden")) {
      // Se já estiver visível, oculta a div
      targetDiv.classList.add("hidden");
    } else {
      // Fecha todas as divs
      contentDivs.forEach((div) => div.classList.add("hidden"));

      // Abre a div correspondente ao item clicado
      targetDiv.classList.remove("hidden");
    }
  });
});

// Função para search bar
// Seleciona os elementos da barra de pesquisa
const searchInput = document.querySelector(".searchInput");
const searchButton = document.querySelector(".searchButton");
const searchResult = document.getElementById("searchResult");

// Função para exibir o resultado da pesquisa
function handleSearch() {
  const query = searchInput.value.trim();

  if (query === "") {
    searchResult.textContent = "Por favor, digite algo para buscar.";
    searchResult.classList.remove("hidden", "bg-green-200");
    searchResult.classList.add("bg-red-100");
  } else {
    searchResult.textContent = `Você buscou por: "${query}"`;
    searchResult.classList.remove("hidden", "bg-red-100", "text-red-700");
    searchResult.classList.add("bg-green-200");
  }
}

searchButton.addEventListener("click", handleSearch);

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleSearch();
  }
});
