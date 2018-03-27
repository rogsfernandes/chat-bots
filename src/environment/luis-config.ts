export const config = {
    culture: 'pt-br',
    luisAppName: 'foodbot',
    version: '0.1',
    intents: [
        {
            defaultMessage: 'Diga o que quer saber sobre mim, o seu Bot de Recomendação de Comidas.',
            name: 'sobre',
        },
        {
            defaultMessage: 'Me fale sobre o que você gosta de comer que te faço uma recomendação',
            name: 'recomendar-comida',
        },
        {
            defaultMessage: 'Não consegui entender o que quis dizer. Posso te ajudar fazendo uma recomendação de comida?',
            name: 'None',
        },
        {
            defaultMessage: 'Olá! Tudo bem? Sou um bot de recomendação de comidas.',
            name: 'cumprimento',
        },
        {
            defaultMessage: 'Bom dia, boa tarde e boa noite! Me informe seu ID de usuário para que eu faça recomendações de comida para você.',
            name: 'apresentacao',
        },
    ],
};
