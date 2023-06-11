let acertos = 0
let erros = 0

function iniciar() {
    //Pegando valores
    let nivel_selecionado = window.document.getElementById('niveis').value
    let modo_selecionado = window.document.getElementById("modos").value

    if(nivel_selecionado == '' || modo_selecionado == ''){
        console.log("Selecione uma dificuldade e um modo de jogo primeiro")
        let caixa_modo_invalido = window.document.getElementById('modo_invalido')
        caixa_modo_invalido.textContent = "Selecione um modo de jogo e uma dificuldade para jogar!!"

    }else{
        window.location.href = `app.html?nivel=${nivel_selecionado}&modo=${modo_selecionado}`
    }
    console.log(nivel_selecionado);
}

function verificar(verificar=0){

    const urlParams = new URLSearchParams(window.location.search);

    //condição que apaga o placar caso o usuario decida reiniciar o jogo
    if(verificar == 1){
        acertos = 0
        erros = 0;
    }

    // Obter valor de um parâmetro específico
    const modo = urlParams.get('modo');
    const nivel = urlParams.get('nivel')

    //Erros e acertos


    if(nivel == "facil" && modo == "adicao"){
        console.log('Dificuldade: Fácil/ Modo: Adição')

        let perguntas = new Array(
            {
                pergunta : "Qual o resultado de 1+1?",
                resposta : "2",
                alternativas:
                {
                    alternativa1 :"1",
                    alternativa2 :"2",
                    alternativa3 :"3",
                    alternativa4 :"4"
                }
              
            },
            {
                pergunta : "Qual o resultado de 999+999?",
                resposta : "1.998",
                alternativas:
                {
                    alternativa1 :"1.996",
                    alternativa2 :"1.998",
                    alternativa3 :"1.999",
                    alternativa4 :"2.000"
                }
            },
            {
                pergunta : "Qual o resultado de 1299+1999?",
                resposta : "3.298",
                alternativas:
                {
                    alternativa1 :"3.298",
                    alternativa2 :"3.499",
                    alternativa3 :"2.519",
                    alternativa4 :"2.099",
                }
            },
            {
                pergunta : "Qual é o dobro 1500?",
                resposta : "3.000",
                alternativas:
                {
                    alternativa1 :"1.500",
                    alternativa2 :"2.000",
                    alternativa3 :"3.000",
                    alternativa4 :"6.000",
                }
            },
            {
                pergunta : "Some 3 + (-2)",
                resposta : "1",
                alternativas:
                {
                    alternativa1 :"1",
                    alternativa2 :"2",
                    alternativa3 :"4",
                    alternativa4 :"5",
                }
            }

        )

        exibirPergunta(perguntas)

    }else if(nivel == "normal" && modo == "adicao"){
        console.log('Dificuldade: Fácil/ Modo: Adição')

        let perguntas = new Array(
            {
                pergunta : "Quantos alunos estudam em uma escola em que há 1 407 pela manhã e 1 825 pela tarde?",
                resposta : "3.232",
                alternativas:
                {
                    alternativa1 :"2.987",
                    alternativa2 :"2.998",
                    alternativa3 :"3.142",
                    alternativa4 :"3.232"
                }
              
            },
            {
                pergunta : "João foi ao supermercado e comprou R$ 115,15 em mercadorias. Quando retornou à casa, ele viu que seu filho também havia ido ao mercado e comprado os mesmos produtos. Quanto os dois gastaram juntos?",
                resposta : "R$ 230,30",
                alternativas:
                {
                    alternativa1 :"R$ 230,50",
                    alternativa2 :"R$ 230,30",
                    alternativa3 :"R$ 220,20",
                    alternativa4 :"R$ 220,30"
                }
            },
            {
                pergunta : "Um fazendeiro mediu sua terra, de formato retangular, para cercá-la inteiramente com uma cerca de madeira. Quantos metros de cerca ele deverá fazer para sua fazenda que possui 1500 metros de largura por 2789 metros de comprimento?",
                resposta : "8578 metros",
                alternativas:
                {
                    alternativa1 :"8000 metros",
                    alternativa2 :"4289 metros",
                    alternativa3 :"9000 metros",
                    alternativa4 :"8578 metros",
                }
            },
            {
                pergunta : "Qual é o triplo de 2500?",
                resposta : "7.500",
                alternativas:
                {
                    alternativa1 :"6.500",
                    alternativa2 :"5.000",
                    alternativa3 :"7.500",
                    alternativa4 :"8.000",
                }
            },
            {
                pergunta : "Calcule : ( + 6) + (– 7) – (– 2)",
                resposta : "1",
                alternativas:
                {
                    alternativa1 :"-1",
                    alternativa2 :"1",
                    alternativa3 :"2",
                    alternativa4 :"-2",
                }
            }

        )
        exibirPergunta(perguntas)

    }else if(nivel == "dificil" && modo == "adicao"){
        console.log('Dificuldade: Fácil/ Modo: Adição')

        let perguntas = new Array(
            {
                pergunta : "Em uma viagem, um turista gastou R$ 7.600 em passagem aérea, R$ 4.850 em hospedagem e R$ 6.250 em alimentação e gastos adicionais. Quanto o turista gastou nessa viagem?",
                resposta : "R$ 18.700,00",
                alternativas:
                {
                    alternativa1 :"R$ 18.560,00",
                    alternativa2 :"R$ 18.700,00",
                    alternativa3 :"R$ 18.890,00",
                    alternativa4 :"R$ 19.100,00"
                }
              
            },
            {
                pergunta : "Um clube tem uma piscina com capacidade de 28.000 litros de água, uma de 16.000 litros e uma outra de 21.000 litros. Quantos litros de água são necessários para encher as três piscinas completamente?",
                resposta : "65.000 litros",
                alternativas:
                {
                    alternativa1 :"65.000 litros",
                    alternativa2 :"65.200 litros",
                    alternativa3 :"64.900 litros",
                    alternativa4 :"64.950 litros"
                }
            },
            {
                pergunta : "Resolva o seguinte sistema de equação: x + y = 10  x − y = 8",
                resposta : "x = 9, y = 1",
                alternativas:
                {
                    alternativa1 :"x = 9, y = 1",
                    alternativa2 :"x = 3, y = 7",
                    alternativa3 :"x = 8, y = 2",
                    alternativa4 :"x = 6, y = 4",
                }
            },
            {
                pergunta : "João e Ana são irmãos. João tem cinco irmãos a mais do que irmãs. Quantos irmãos Ana tem a mais do que irmãs?",
                resposta : "7",
                alternativas:
                {
                    alternativa1 :"2",
                    alternativa2 :"3",
                    alternativa3 :"5",
                    alternativa4 :"7",
                }
            },
            {
                pergunta : "No início do ano, 14.730 funcionários trabalhavam em uma grande empresa. No decorrer do ano 748 funcionários foram demitidos e 924 foram contratados. Quantos funcionários a empresa tem agora?",
                resposta : "14.906 funcionários.",
                alternativas:
                {
                    alternativa1 :"13.921 funcionários.",
                    alternativa2 :"14.839 funcionários.",
                    alternativa3 :"14.906 funcionários.",
                    alternativa4 :"14.996 funcionários.",
                }
            }

        )
        exibirPergunta(perguntas)
    }

 
    console.log(nivel)
    console.log(modo); // Output: valor1

}

function exibirPergunta(perguntas, atual=0){
    let selecione_caixa = window.document.getElementById('selecione_resposta');
    selecione_caixa.innerHTML = 'Selecione a resposta correta'


    //caixa pergunta   
    let pergunta_content = document.getElementById('pergunta')
    pergunta_content.textContent = ''
    //resetando botão próxima pergunta
    let caixa_prox_pergunta = window.document.getElementById('prox_pergunta');
    caixa_prox_pergunta.innerHTML = ''

    //resetando caixa resultado:
    let resultado_caixa = window.document.getElementById('resultado');
    resultado_caixa.innerHTML = ''
    
    let caixa_alternativa_buttons = window.document.getElementById('caixa_alternativas')
    caixa_alternativa_buttons.innerHTML = ''
    
    if(atual == 5){
        console.log('Tela de resultado')
        let selecione_caixa = window.document.getElementById('selecione_resposta');
        selecione_caixa.innerHTML = ''

        let voltar_menu_caixa = window.document.getElementById('prox_pergunta');
        voltar_menu_caixa.innerHTML = `<i style="cursor:pointer; color:blue;" onclick="verificar(1)" class="fa-solid fa-rotate-left fa-2xl"></i> <a href="index.html"> <i class="fa-solid fa-house fa-2xl"></i> </a> `

 

        pergunta_content.innerHTML = `Acertos: ${acertos} <br> Erros: ${erros}`


    }else{

    let perguntaAtual = atual;

    let resposta_correta = perguntas[perguntaAtual]['resposta']
    
    //ALTERNATIVAS
    let alternativas = new Array(
        perguntas[perguntaAtual]['alternativas']['alternativa1'],
        perguntas[perguntaAtual]['alternativas']['alternativa2'],
        perguntas[perguntaAtual]['alternativas']['alternativa3'],
        perguntas[perguntaAtual]['alternativas']['alternativa4'],
    )
    
    alternativas.forEach( item => {
        let btn = document.createElement('button');
        btn.classList = "btn  btn-lg btn-block";
        btn.textContent = item
    
        btn.addEventListener("click", function() {
           let retorno = user_resposta(item,resposta_correta);
        
           if(retorno == 1){
                btn.classList.add('btn-success')
                acertos+=1
                caixa_alternativa_buttons.innerHTML = ''
                let selecione_caixa = window.document.getElementById('selecione_resposta');
                selecione_caixa.innerHTML = ''

                
                console.log('ACERTOS:', acertos)
                //return exibirPergunta(perguntas,atual+=1)
                botão_prox_pergunta(perguntas,atual+=1)
           }else{
                btn.classList.add('btn-danger')
                erros+=1
                

                caixa_alternativa_buttons.innerHTML = ''
                let selecione_caixa = window.document.getElementById('selecione_resposta');
                selecione_caixa.innerHTML = ''

                
                console.log('ERROS:', erros)
                //return exibirPergunta(perguntas,atual+=1)
                botão_prox_pergunta(perguntas,atual+=1)
           }


          });

        caixa_alternativa_buttons.appendChild(btn)
    })

  
    pergunta_content.textContent = perguntas[perguntaAtual]['pergunta']
    console.log(perguntas[perguntaAtual])
    console.log(`Estamos na pergunta : ${atual}`)
    }

    
}

function user_resposta(item,resposta_correta){
    let resultado_caixa = window.document.getElementById('resultado');
    
    console.log(`O usuario selecionou ${item}`);
    console.log(`Resposta correta: ${resposta_correta}`);

    if(item == resposta_correta){
        console.log('O USUÁRIO ACERTOU!!!');
        resultado_caixa.textContent = "RESPOSTA CORRETA";
        resultado_caixa.style.color = 'yellow';
        return 1
        
    }else{
        console.log('Resposta incorreta');
        resultado_caixa.textContent = "RESPOSTA INCORRETA";
        resultado_caixa.style.color = 'red';
        return 0
    }

}

function botão_prox_pergunta(perguntas,atual){
    let caixa_prox_pergunta = window.document.getElementById('prox_pergunta');
    caixa_prox_pergunta.innerHTML = ''
    let btn_prox = window.document.createElement('button');
    let btn = document.createElement('button');
    btn_prox.classList = "btn  btn-lg";
    btn_prox.style.backgroundColor = 'yellow'
    btn_prox.innerHTML = 'Próxima pergunta <i class="fa-solid fa-arrow-right"></i>'

    btn_prox.addEventListener("click", function() {
            exibirPergunta(perguntas,atual)
       });

    caixa_prox_pergunta.appendChild(btn_prox)
}
