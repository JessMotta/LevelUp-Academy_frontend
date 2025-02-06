import { Benefit } from "@/types/types"; 


export const BENEFITS_MOCK: Benefit[] = [
    {
        id: 1,
        title: "Apagar uma falta",
        description: "Faltou algum dia de aula? Anule essa falta",
        points: 40,
    },

    {
        id: 2,
        title: "Sair mais cedo",
        description: "Escolha um dia para ser liberado 5 minutos antes",
        points: 50,
    },

    {
        id: 3,
        title: "Segunda chance",
        description: "Deixou de fazer ou não foi bem em alguma tarefa individual obrigatória? Tenha uma nova chance! ",
        points: 60,
    },

    {
        id: 4,
        title: "0,3 pts na prova",
        description: "Garanta 0,2 pts na prova do bimestre",
        points: 120,
    },
];