const loginBtn = document.getElementById("att-cad");
const modal = document.getElementById("edit-modal");

loginBtn.onclick = function () {
    modal.style.display = "block";
}

const closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function () {
    modal.style.display = "none";}

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    $(document).ready(function () {
        var $campo = $("#cep");
        $campo.mask('00000-000', { reverse: true });
    });

    $(document).ready(function(){
        $('#telefone').mask('(00) 0000-0000');
    });
    
    $(document).ready(function(){
        $('#telefone1').mask('(00) 0000-0000');
    });
    
    function alterarTexto(obj){

        //Se clicar
        if (obj.classList.contains('initialColor')) { // se o obj tiver a class initialColor
          obj.classList.remove('initialColor'); //remove a initialColor
          // Altera a cor do botão adicionando a classe 'botao-selecionado'
          obj.classList.add('botao-selecionado2'); //Adiciona a class botao-selecionado2 que muda a cor
          obj.textContent = 'CONSULTA CONCLUIDA!';//Altera o texto do botao
          alert("Parabéns, consulta marcada com sucesso!!!")
        }
        //Se não ter clicado (click novamente)
        else{
          obj.classList.remove('botao-selecionado2'); //remove a class botao-selecionado2 que muda a cor
          // Altera a cor do botão adicionando a classe 'botao-selecionado'
          obj.classList.add('initialColor'); //adiciona a cor do class initialColor que é a cor inicial
          obj.textContent = 'CONCLUIR CONSULTA';// altera o texto 
          alert("Deseja cancelar a consulta?")
        }
        
    
       }
        

       function clicou(obj)
{
    const collection = document.getElementsByClassName("navHeader")
    
    for(let i = 0; i < collection.length; i++){
    collection[i].classList.remove("selected");
    }
    obj.classList.add("selected");    
}