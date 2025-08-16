function esconderDescricoes() {
  const descricoes = document.querySelectorAll("descricao");
  descricoes.forEach(function(item) {
    item.style.display = "none";
  });
}

function mostrarDescricao(id) {
  const hacker = document.getElementById(id);
  const descricao = hacker.nextElementSibling;
  descricao.style.display = "inline";
}

function ocultarDescricao(id) {
  const hacker = document.getElementById(id);
  const descricao = hacker.nextElementSibling;
  descricao.style.display = "none";
}

window.onload = function() {
  esconderDescricoes();

  const hackers = ["white", "black", "gray", "script", "red", "blue", "delator"];

  hackers.forEach(function(id) {
    const hacker = document.getElementById(id);
    hacker.addEventListener("mouseover", function() {
      mostrarDescricao(id);
    });
    hacker.addEventListener("mouseout", function() {
      ocultarDescricao(id);
    });
  });
};