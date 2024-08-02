const receitas = [
    {
        "titulo": "Brigadeiro",
        "imagem": "brigadeiro.png",
        "preparo": "Junte esses ingredientes numa panela. Adicione o achocolatado e a manteiga, e mexa até criar consistência, ou seja, até começar a engrossar. Despeje tudo numa vasilha de vidro e leve à geladeira. Espere aproximadamente uma hora e meia. Logo em seguida adicione o granulado e está pronto!",
        "ingredientes": [
            "1 lata de leite condensado",
            "4 colheres de achocolatado",
            "Açúcar",
            "2 colheres de manteiga",
            "Granulado"
        ]
    },
    {
        "titulo": "Pudim",
        "imagem": "pudim.png",
        "preparo": "Primeiro, bata bem os ovos no liquidificador. Acrescente o leite condensado e o leite, e bata novamente. Coloque em uma forma redonda e despeje a massa do pudim por cima. Asse em forno médio por 45 minutos, com a assadeira redonda dentro de uma maior com água. Espete um garfo para ver se está bem assado. Deixe esfriar e desenforme.",
        "ingredientes": [
            "1 lata de leite condensado",
            "1 lata de leite",
            "3 ovos inteiros",
            "1 xícara (chá) de açúcar",
            "1/2 xícara de água"
        ]
    },
    {
        "titulo": "Biscoito de Polvilho",
        "imagem": "biscoito.png",
        "preparo": "Em uma vasilha acrescente o polvilho, a água fervente e o óleo, misture bem e acrescente o sal a gosto. Adicione por último os ovos, um de cada vez, até obter uma massa consistente. Coloque a massa em um saquinho de confeiteiro e modele os biscoitos em uma forma (não é necessário untar a forma). Leve para assar em forno médio (180°C), preaquecido, por 25 minutos. E está pronto!",
        "ingredientes": [
            "500 g de polvilho azedo",
            "200 ml de água fervente",
            "150 ml de óleo em temperatura ambiente",
            "5 ovos",
            "Sal a gosto"
        ]
    }
];

function getListaIngredientes(receita) {
    return `<ul>${receita.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('')}</ul>`;
}

function getCard(receita) {
    return `
        <div class="card">
            <img src="${receita.imagem}" class="card-img-top" alt="${receita.titulo}">
            <div class="card-body">
                <h5 class="card-title">${receita.titulo}</h5>
                <div class="card-text">
                    ${getListaIngredientes(receita)}
                    <hr>
                    <p>${receita.preparo}</p>
                </div>
            </div>
        </div>
    `;
}

function preencheCatalogo() {
    const pnlCatalogo = document.getElementById("pnlCatalogo");
    const cardsHtml = receitas.map(getCard).join('');
    pnlCatalogo.innerHTML = cardsHtml;
}


window.onload = preencheCatalogo;
