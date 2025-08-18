let contador = 0;

document.getElementById("Botao").onclick = () => {
    contador++;
    let toast = document.getElementById("toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        document.body.appendChild(toast);
    }
    toast.textContent = `Você clicou ${contador}`;
    toast.classList.add("show");
};