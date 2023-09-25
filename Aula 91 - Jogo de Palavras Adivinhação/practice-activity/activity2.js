//AULA 90 - PARTE 4
 function back(){
    //retorna à página anterior.
    window.location = "activity_1.html";
 }

 function getScore(){
    // localStorage: nos permitirá buscar dados do armazenamento local.
    //getItem(“score”): é o método usado para obter o valor do armazenamento local.
    //E score é a chave a ser passada para getItem(), o que significa que ele só obterá o valor cuja chave é score.
    //E então o armazenamos dentro da variável score.
    score = localStorage.getItem("score");
    //aqui é apresentado na página web a pontuação
    document.getElementById("update").innerHTML = "<h1> Pontuação: " +score+ "</h1>";
 }
 //AULA 90 - PT4 FINALIZADA