const btnRaffle = document.querySelector(".btn-raffle");
const btnReturn = document.querySelector(".return");
const loadingSpinner = document.querySelector(".loading-spinner");

function randomNumber() {
    const inputs = document.querySelector(".inputs");
    const title = document.querySelector(".title");
    const numberResult = document.querySelector(".number-result");
    const min = Math.ceil(document.querySelector(".min").value);
    const max = Math.floor(document.querySelector(".max").value);

    if (min >= max || isNaN(min) || isNaN(max)) {
        alert("Insira valores válidos!");
        return;
    }

    // Exibe o spinner 
    loadingSpinner.style.display = "block";
    inputs.style.display = "none";
    title.innerHTML = "Sorteando...";

    // Simula o tempo de carregamento
    setTimeout(() => {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;

        // Oculta o spinner e exibe o resultado
        loadingSpinner.style.display = "none";
        title.innerHTML = "O número sorteado foi:";
        numberResult.innerHTML = result;
        btnReturn.style.display = "block";
    }, 2000); // Tempo de carregamento (2 segundos)
}

btnRaffle.addEventListener("click", randomNumber);
btnReturn.addEventListener("click", () => {
    location.reload();
}
);