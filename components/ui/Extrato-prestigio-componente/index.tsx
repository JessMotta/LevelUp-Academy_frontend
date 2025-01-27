import Image from "next/image";
import React from "react";

import darkStar from '@/public/assets/dark-star.svg';

const extratos = [
  { id: 1, titulo: "Fórum", descricao: "Participou da discussão", pontos: 1 },
  { id: 2, titulo: "Quiz", descricao: "Completou o desafio semanal", pontos: 3 },
  { id: 3, titulo: "Projeto", descricao: "Finalizou uma atividade prática", pontos: 5 },
  { id: 4, titulo: "Login", descricao: "Acessou a plataforma por 7 dias seguidos", pontos: 2 }
];

export const ExtratoPrestigioComponente = () => {
  return (
    <div className="bg-sky-300 rounded-3xl p-7 w-3/4 md:w-2/6" style={{ background: "var(--color-baby-blue)", color: "var(--color-green-4)" }}>
      {extratos.map((item) => (
        <div key={item.id} className="flex flex-row justify-between items-center py-4 ">
          <div>
            <h1 className="text-base">{item.titulo}</h1>
            <p className="text-lg">{item.descricao}</p>
          </div>
          <div className="flex flex-row items-center">
            <h1 className="text-3xl font-light">+{item.pontos}</h1>
            <Image src={darkStar} alt="coin" width={30} height={30} />
          </div>
        </div>
      ))}
    </div>
  );
};
