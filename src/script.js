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