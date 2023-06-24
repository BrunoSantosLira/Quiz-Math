let acertos = 0
let erros = 0

// Obtém a referência para o elemento select
var select = document.getElementById("modos");

// Cria botões para cada opção e adiciona-os ao elemento select
for (var i = 0; i < select.options.length; i++) {
  var option = select.options[i];
  var button = document.createElement("button");
  button.id = 'select_button'
  button.innerHTML = option.innerHTML;
  button.value = option.value;
  button.addEventListener("click", function(event) {
    event.preventDefault(); // Impede o comportamento padrão do botão
    select.value = this.value;
  });
  select.parentNode.insertBefore(button, select);
}

// Esconde o elemento select
select.style.display = "none";

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
    
    let caixa_badges = window.document.getElementById('badges')

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


    if(nivel == "facil" && modo == "adicao e subtracao"){
        console.log('Dificuldade: Fácil/ Modo: Adição')

         //criando o badges
        caixa_badges.innerHTML = ''

        let badge = window.document.createElement('span')
        badge.classList = 'badge badge-pill badge-info float-right'

        let badge_nivel = window.document.createElement('span')
        badge_nivel.classList = 'badge badge-pill badge-success float-right'
        
        badge_nivel.innerText = nivel
        badge.innerText = modo

        caixa_badges.appendChild(badge_nivel)
        caixa_badges.appendChild(badge)



        let perguntas = new Array(
            {
                pergunta : "A um número foi somado 7854 e o resultado obtido foi 20000. Que número é esse??",
                resposta : "12146",
                alternativas:
                {
                    alternativa1 :"1006",
                    alternativa2 :"10056",
                    alternativa3 :"12454",
                    alternativa4 :"12146"
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
                pergunta : "Resolva a diferença: 9.829 – 2533 =?",
                resposta : "7296",
                alternativas:
                {
                    alternativa1 :"7346",
                    alternativa2 :"7296",
                    alternativa3 :"6264",
                    alternativa4 :"6175",
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

    }else if(nivel == "normal" && modo == "adicao e subtracao" ){
        console.log('Dificuldade: Fácil/ Modo: Adição')

        
         //criando o badges
         caixa_badges.innerHTML = ''
 
         let badge = window.document.createElement('span')
         badge.classList = 'badge badge-pill badge-info float-right'
 
         let badge_nivel = window.document.createElement('span')
         badge_nivel.classList = 'badge badge-pill badge-warning  float-right'
         
         badge_nivel.innerText = nivel
         badge.innerText = modo
 
         caixa_badges.appendChild(badge_nivel)
         caixa_badges.appendChild(badge)

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
                pergunta : "O perímetro de um terreno retangular é igual a 712 metros quadrados. Sabendo que seu lado maior mede 245 metros, qual a medida do lado menor desse terreno?",
                resposta : "111 metros",
                alternativas:
                {
                    alternativa1 :"111 metros",
                    alternativa2 :"211 metros",
                    alternativa3 :"312 metros",
                    alternativa4 :"467 metros"
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
                pergunta : "Um piloto de avião está no meio de uma viagem internacional de 6 mil quilômetros. Se já havia passado 4.589 quilômetros, quanto ainda falta para percorrer?",
                resposta : "1411 km",
                alternativas:
                {
                    alternativa1 :"1000 km",
                    alternativa2 :"1409 km",
                    alternativa3 :"1411 km",
                    alternativa4 :"2589 km",
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

    }else if(nivel == "dificil" && modo == "adicao e subtracao"){
        console.log('Dificuldade: Fácil/ Modo: Adição')

        caixa_badges.innerHTML = ''
 
         let badge = window.document.createElement('span')
         badge.classList = 'badge badge-pill badge-info float-right'
 
         let badge_nivel = window.document.createElement('span')
         badge_nivel.classList = 'badge badge-pill badge-danger  float-right'
         
         badge_nivel.innerText = nivel
         badge.innerText = modo
 
         caixa_badges.appendChild(badge_nivel)
         caixa_badges.appendChild(badge)

        let perguntas = new Array(
            {
                pergunta : "Na aquisição de sete computadores, uma escola gastou R$ 14.125,99. Como uma das máquinas veio defeituosa, a escola foi obrigada a devolvê-la e receber de volta R$ 2.044,25. Qual o valor gasto pela escola nos seis computadores adquiridos?",
                resposta : "R$ 12.081,74",
                alternativas:
                {
                    alternativa1 :"R$ 12.081,74",
                    alternativa2 :"R$ 12.121,74",
                    alternativa3 :"R$ 12.499,74",
                    alternativa4 :"R$ 11.121,74"
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
    else if(nivel == "facil" && modo == "multiplicacao_divisao"){
        console.log('Dificuldade: Fácil/ Modo: Adição')

        caixa_badges.innerHTML = ''
 
         let badge = window.document.createElement('span')
         badge.classList = 'badge badge-pill badge-primary float-right'
 
         let badge_nivel = window.document.createElement('span')
         badge_nivel.classList = 'badge badge-pill badge-success  float-right'
         
         badge_nivel.innerText = nivel
         badge.innerText = modo
 
         caixa_badges.appendChild(badge_nivel)
         caixa_badges.appendChild(badge)

        let perguntas = new Array(
            {
                pergunta : "Para realizar um campeonato de vôlei em uma escola o professor de educação física decidiu dividir os 96 alunos em grupos. Sabendo que cada equipe para esse esporte deve ser composta por 6 pessoas, quantas equipes o professor conseguiu formar?",
                resposta : "16",
                alternativas:
                {
                    alternativa1 :"14",
                    alternativa2 :"15",
                    alternativa3 :"16",
                    alternativa4 :"17"
                }
              
            },
            {
                pergunta : "Um prestador de serviço, após a realização do trabalho para o qual foi contratado, recebeu o pagamento em 4 notas de R$ 50,00, 2 notas de R$ 20,00 e 3 notas de R$ 2,00. Então, o valor recebido pelo serviço prestado foi igual a:",
                resposta : "R$ 246,00",
                alternativas:
                {
                    alternativa1 :"R$ 198,00",
                    alternativa2 :"R$ 206,00",
                    alternativa3 :"R$ 230,00",
                    alternativa4 :"R$ 246,00"
                }
            },
            {
                pergunta : "A dúzia é uma unidade bastante comum para a venda de alguns produtos, como ovos. Um restaurante tem um consumo diário de 3 dúzias e meia por dia, então o número de ovos consumidos durante um dia nesse restaurante é igual a:",
                resposta : "42",
                alternativas:
                {
                    alternativa1 :"36",
                    alternativa2 :"42",
                    alternativa3 :"48",
                    alternativa4 :"52",
                }
            },
            {
                pergunta : "Em uma distribuidora de bebidas, foi recebido um pedido com 12 engradados de uma determinada bebida. Sabendo que em cada engradado há 6 garrafas de 2 litros cada uma delas, então a quantidade dessa bebida em litros presente nesse pedido é igual a:",
                resposta : "144",
                alternativas:
                {
                    alternativa1 :"72",
                    alternativa2 :"124",
                    alternativa3 :"144",
                    alternativa4 :"172",
                }
            },
            {
                pergunta : "Em um cinema, a sala é composta por cadeiras separadas em colunas de A até J com cadeiras numeradas de 1 a 12. Então, o número de cadeiras que existem nessa sala é igual a:",
                resposta : "120",
                alternativas:
                {
                    alternativa1 :"120",
                    alternativa2 :"180",
                    alternativa3 :"240",
                    alternativa4 :"250",
                }
            }

        )
        exibirPergunta(perguntas)
    }else if(nivel == "normal" && modo == "multiplicacao_divisao"){
        console.log('Dificuldade: Fácil/ Modo: Adição')
        caixa_badges.innerHTML = ''
 
         let badge = window.document.createElement('span')
         badge.classList = 'badge badge-pill badge-primary float-right'
 
         let badge_nivel = window.document.createElement('span')
         badge_nivel.classList = 'badge badge-pill badge-warning float-right'
         
         badge_nivel.innerText = nivel
         badge.innerText = modo
 
         caixa_badges.appendChild(badge_nivel)
         caixa_badges.appendChild(badge)

        let perguntas = new Array(
            {
                pergunta : "Maria dará uma festa e calculou para cada convidado 700 mL de bebida. Sabendo-se que Maria convidará 150 pessoas, o total em litros de bebida que Maria deverá comprar é de, pelo menos:",
                resposta : "105",
                alternativas:
                {
                    alternativa1 :"90",
                    alternativa2 :"97",
                    alternativa3 :"100",
                    alternativa4 :"105"
                }
              
            },
            {
                pergunta : "Analisando a sequência {A, B, C, D, A, B, C, D, A, B, C, D,…}, seu 1686º termo será:",
                resposta : "B",
                alternativas:
                {
                    alternativa1 :"A",
                    alternativa2 :"B",
                    alternativa3 :"C",
                    alternativa4 :"D"
                }
            },
            {
                pergunta : "Uma geladeira com 25% de desconto que está saindo por R$ 2 465,00. Um comprador que tenha realizado um pagamento de entrada no valor de R$ 765,80 e dividido o restante em 12 parcelas iguais, pagou quanto em cada parcela?",
                resposta : "R$ 141,60",
                alternativas:
                {
                    alternativa1 :"R$ 141,60",
                    alternativa2 :"R$ 142,60",
                    alternativa3 :"R$ 144,60",
                    alternativa4 :"R$ 146,60",
                }
            },
            {
                pergunta : "Amanda, Beatriz, Carla e Daniela foram para a lanchonete durante o intervalo do trabalho e gastaram um total de R$ 35. O valor da conta foi dividido igualmente para cada uma delas, e cada uma pagou:",
                resposta : "R$ 8,75",
                alternativas:
                {
                    alternativa1 :"R$ 8",
                    alternativa2 :"R$ 8,25",
                    alternativa3 :"R$ 8,50",
                    alternativa4 :"R$ 8,75",
                }
            },
            {
                pergunta : "Em um cinema as fileiras foram distribuídas conforme as letras do alfabeto, da letra A até a letra I. Sabendo que a sala do cinema possui 126 poltronas, quantas poltronas foram colocadas em cada fileira?",
                resposta : "14",
                alternativas:
                {
                    alternativa1 :"12",
                    alternativa2 :"13",
                    alternativa3 :"14",
                    alternativa4 :"15",
                }
            }

        )
        exibirPergunta(perguntas)
    }else if(nivel == "dificil" && modo == "multiplicacao_divisao"){
        console.log('Dificuldade: Fácil/ Modo: Adição')

        caixa_badges.innerHTML = ''
 
         let badge = window.document.createElement('span')
         badge.classList = 'badge badge-pill badge-primary float-right'
 
         let badge_nivel = window.document.createElement('span')
         badge_nivel.classList = 'badge badge-pill badge-danger  float-right'
         
         badge_nivel.innerText = nivel
         badge.innerText = modo
 
         caixa_badges.appendChild(badge_nivel)
         caixa_badges.appendChild(badge)

        let perguntas = new Array(
            {
                pergunta : "Ao realizar o planejamento de uma viagem utilizando gasolina como combustível, estimou-se que seria gasto um total de 32 litros na ida e 32 litros na volta. Se a gasolina estiver custando R$ 6,00, o valor gasto com combustível nessa viagem será igual a:",
                resposta : "R$ 384,00",
                alternativas:
                {
                    alternativa1 :"R$ 290,00",
                    alternativa2 :"R$ 350, 00",
                    alternativa3 :"R$ 384,00",
                    alternativa4 :"R$ 410,00"
                }
              
            },
            {
                pergunta : "produtor dispõe de 6 vacas leiteiras, que produzem diariamente, em média, 5 litros de leite por dia. Então, a quantidade de leite produzida em uma semana em média é igual a:",
                resposta : "210",
                alternativas:
                {
                    alternativa1 :"30",
                    alternativa2 :"150",
                    alternativa3 :"180",
                    alternativa4 :"210"
                }
            },
            {
                pergunta : "Um mercado público foi construído em uma área de 6 000 metros quadrados. Na preparação do terreno, o espaço foi dividido em três partes iguais. Duas partes foram utilizadas para construir 50 boxes para os feirantes e a parte que sobrou foi reservada ao estacionamento. Calcule qual a área de cada box construído.",
                resposta : "80",
                alternativas:
                {
                    alternativa1 :"70",
                    alternativa2 :"80",
                    alternativa3 :"90",
                    alternativa4 :"95",
                }
            },
            {
                pergunta : "Uma empreiteira começou um novo empreendimento imobiliário e irá construir um grande conjunto habitacional. O projeto foi divulgado aos possíveis compradores e investidores. A empresa divulgou o número de 1 200 apartamentos. Sendo 10 edifícios de 15 andares cada. Como os edifícios seguem o mesmo padrão, quantos apartamentos haverá por andar em cada edifício?",
                resposta : "8",
                alternativas:
                {
                    alternativa1 :"8",
                    alternativa2 :"10",
                    alternativa3 :"12",
                    alternativa4 :"13",
                }
            },
            {
                pergunta : "Ao final de um campeonato de futebol, o time ganhador teve 19 pontos. Para conseguir essa pontuação, o time teve apenas um empate e foi vitorioso nos demais jogos. Determine quantos jogos eles ganharam, sabendo que um empate dá 1 ponto e uma vitória dá 3 pontos",
                resposta : "6",
                alternativas:
                {
                    alternativa1 :"5",
                    alternativa2 :"6",
                    alternativa3 :"9",
                    alternativa4 :"10",
                }
            }

        )
        exibirPergunta(perguntas)
    }
    else if(nivel == "facil" && modo == "geometria"){
        console.log('Dificuldade: Fácil/ Modo: Adição')
        caixa_badges.innerHTML = ''
 
         let badge = window.document.createElement('span')
         badge.classList = 'badge badge-pill badge-dark float-right'
 
         let badge_nivel = window.document.createElement('span')
         badge_nivel.classList = 'badge badge-pill badge-success  float-right'
         
         badge_nivel.innerText = nivel
         badge.innerText = modo
 
         caixa_badges.appendChild(badge_nivel)
         caixa_badges.appendChild(badge)

        let perguntas = new Array(
            {
                pergunta : "Quantos graus mede um quadrado?",
                resposta : "360°",
                alternativas:
                {
                    alternativa1 :"180°",
                    alternativa2 :"260°",
                    alternativa3 :"340°",
                    alternativa4 :"360°"
                }
              
            },
            {
                pergunta : "Quantos graus mede um triângulo? (Considere um triângulo equilátero)",
                resposta : "180°",
                alternativas:
                {
                    alternativa1 :"90°",
                    alternativa2 :"150°",
                    alternativa3 :"180°",
                    alternativa4 :"360°"
                }
            },
            {
                pergunta : "Quanto mede o maior ângulo de um triângulo retângulo?",
                resposta : "90°",
                alternativas:
                {
                    alternativa1 :"60°",
                    alternativa2 :"90°",
                    alternativa3 :"120°",
                    alternativa4 :"180°",
                }
            },
            {
                pergunta : "Calcule o perímetro de um triângulo com dois lados de 6 cm e um lado com 12 cm.",
                resposta : "24 cm",
                alternativas:
                {
                    alternativa1 :"18 cm",
                    alternativa2 :"20 cm",
                    alternativa3 :"22 cm",
                    alternativa4 :"24 cm",
                }
            },
            {
                pergunta : "Calcule a área de um Quadrado com lado de 20 cm.",
                resposta : "400 cm",
                alternativas:
                {
                    alternativa1 :"200 cm",
                    alternativa2 :"400 cm",
                    alternativa3 :"600 cm",
                    alternativa4 :"800 cm",
                }
            }

        )
        exibirPergunta(perguntas)
    }
    else if(nivel == "normal" && modo == "geometria"){
        console.log('Dificuldade: Fácil/ Modo: Adição')

        caixa_badges.innerHTML = ''
 
         let badge = window.document.createElement('span')
         badge.classList = 'badge badge-pill badge-dark float-right'
 
         let badge_nivel = window.document.createElement('span')
         badge_nivel.classList = 'badge badge-pill badge-warning float-right'
         
         badge_nivel.innerText = nivel
         badge.innerText = modo
 
         caixa_badges.appendChild(badge_nivel)
         caixa_badges.appendChild(badge)

        let perguntas = new Array(
            {
                pergunta : "Juliana possui dois tapetes de mesma área. O tapete quadrado possui lado de 4 m e o tapete retangular tem altura de 2 m e base de 8 m. Qual tapete apresenta o maior perímetro?",
                resposta : "O tapete retangular.",
                alternativas:
                {
                    alternativa1 :"O tapete retangular.",
                    alternativa2 :"O tapete quadrado.",
                    alternativa3 :"Os perímetros são iguais.",
                    alternativa4 :"As áreas são iguais."
                }
              
            },
            {
                pergunta : "<p>Sabendo que o triângulo tem 30 cm de perímetro e Carla está a 8 cm de distância de Ana e Ana está a 12 cm de distância de Paula, qual a distância de Carla e Paula?</p> <div class='text-center'> <img style='width:250px; height;250px;' src='imgs/exe_2.png'  alt='' id='imagem'> </div> ",
                resposta : "10 cm",
                alternativas:
                {
                    alternativa1 :"10 cm",
                    alternativa2 :"11 cm",
                    alternativa3 :"12 cm",
                    alternativa4 :"13 cm"
                }
            },
            {
                pergunta : "Lucas decidiu vender seu carro e, para conseguir um comprador rapidamente, resolveu colocar um anúncio no jornal da cidade. Sabendo que é pedido R$ 1,50 por centímetro quadrado de publicidade, quanto Lucas teve que pagar por um anúncio retangular de base 5 cm e altura de 4 cm?",
                resposta : "R$ 30,00",
                alternativas:
                {
                    alternativa1 :"R$ 15,00",
                    alternativa2 :"R$ 10,00",
                    alternativa3 :"R$ 20,00",
                    alternativa4 :"R$ 30,00",
                }
            },
            {
                pergunta : "Das formas geométricas a seguir, marque a alternativa que possui somente sólidos geométricos(três dimensões):",
                resposta : "pirâmide, cone, prisma",
                alternativas:
                {
                    alternativa1 :"cilindro, círculo, cone",
                    alternativa2 :"esfera, quadrado, triângulo",
                    alternativa3 :"pirâmide, cone, prisma",
                    alternativa4 :"circunferência, prisma, pirâmide",
                }
            },
            {
                pergunta : "<p>Os sólidos de Platão são conhecidos como os únicos poliedros regulares, ou seja, todas as faces são iguais. Dos poliedros a seguir, são considerados sólidos de Platão, exceto:</p> <div class='text-center'> <img style='width:250px; height;250px;' src='imgs/solidos_platao.png'  alt='' id='imagem'> </div> ",
                resposta : "paralelepípedo",
                alternativas:
                {
                    alternativa1 :"cubo",
                    alternativa2 :"tetraedro",
                    alternativa3 :"paralelepípedo",
                    alternativa4 :"icosaedro",
                }
            }

        )
        exibirPergunta(perguntas)
    }
    else if(nivel == "dificil" && modo == "geometria"){
        console.log('Dificuldade: Fácil/ Modo: Adição')

        console.log('Dificuldade: Fácil/ Modo: Adição')

        caixa_badges.innerHTML = ''
 
         let badge = window.document.createElement('span')
         badge.classList = 'badge badge-pill badge-dark float-right'
 
         let badge_nivel = window.document.createElement('span')
         badge_nivel.classList = 'badge badge-pill badge-danger float-right'
         
         badge_nivel.innerText = nivel
         badge.innerText = modo
 
         caixa_badges.appendChild(badge_nivel)
         caixa_badges.appendChild(badge)

        let perguntas = new Array(
            {
                pergunta : "Um terreno possui formato de um trapézio, com bases medindo 15 metros e 20 metros e a altura medindo 10 metros. Se a metade desse terreno será utilizada para a construção de uma casa, então a área construída desse terreno é de:",
                resposta : "87,5 m²",
                alternativas:
                {
                    alternativa1 :"175,0 m²",
                    alternativa2 :"105,5 m²",
                    alternativa3 :"87,5 m²",
                    alternativa4 :"82,5 m²"
                }
              
            },
            {
                pergunta : "A área de um quadrado é de 2,56 m². Nessas condições, podemos afirmar que a medida do seu lado é de:",
                resposta : "1,60 m²",
                alternativas:
                {
                    alternativa1 :"1,28 m²",
                    alternativa2 :"1,44 m²",
                    alternativa3 :"1,55 m²",
                    alternativa4 :"1,60 m²"
                }
            },
            {
                pergunta : "<p>Podemos afirmar que a área branca do círculo a seguir mede:</p> <div class='text-center'> <img style='width:250px; height;450px;' src='imgs/1-circulo-circunscrito.png'  alt='' id='imagem'> </div> ",
                resposta : "21π",
                alternativas:
                {
                    alternativa1 :"25π",
                    alternativa2 :"12π",
                    alternativa3 :"18π",
                    alternativa4 :"21π",
                }
            },
            {
                pergunta : "Marcelo e Renato herdaram de seu pai terrenos, cada um de mesma área. O terreno de Marcelo possui formato retangular com lados medindo 18 metros e 50 metros. Sabendo que o terreno de Renato é um quadrado, a medida do lado desse terreno é:",
                resposta : "30 metros",
                alternativas:
                {
                    alternativa1 :"15 metros",
                    alternativa2 :"20 metros",
                    alternativa3 :"25 metros",
                    alternativa4 :"30 metros",
                }
            },
            {
                pergunta : "Assinale a medida do lado de um quadrado, sabendo-se que o número que representa o seu perímetro é o mesmo que representa sua área.",
                resposta : "4",
                alternativas:
                {
                    alternativa1 :"5",
                    alternativa2 :"4",
                    alternativa3 :"6",
                    alternativa4 :"8",
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


        let caixa_badges = window.document.getElementById('badges')
        caixa_badges.innerHTML = ''
 

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

  
    pergunta_content.innerHTML = perguntas[perguntaAtual]['pergunta']
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
