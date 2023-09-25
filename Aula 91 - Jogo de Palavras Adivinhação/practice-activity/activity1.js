//AULA 89
score = 0;
//ATUALIZA OS PONTOS
function updateScore(){
    //FAZ O ACRÉSCIMO DE PONTOS
     score = score + 1;
    //FAZ O LINK COM O HTML ATRAVÉS DO ID score, NO QUAL O USUÁRIO PODE VISUALIZAR.
    document.getElementById("score").innerHTML = "Pontuação = " + score;
}


//SALVA OS PONTOS
function saveScore(){
    //NO LOCAL STORAGE ARMAZENA OS VALORES E O SET ITEM INDICA PARA ARMAZENAR COMO CHAVE:VALOR 
    localStorage.setItem("score", score);
}

//PRÓXIMA PÁGINA
function nextPage(){
    //O WINDOW.LOCATION DIREICIONA PARA A PÁGINA INDICADA
    window.location = "activity_2.html";
}