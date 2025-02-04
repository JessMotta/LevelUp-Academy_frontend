"use client";

//import { useRouter } from "next/navigation";


export default function ActivityDescription () {
    //const router = useRouter();
    return (
        <div className="bg-green-11 rounded-xl text-white p-4 mb-3">
            <h2 className="font-semibold">Estudo Dirigido</h2>
            <div className="flex flex-row items-center">
                <h3 className="text-sm">Atividade em grupo</h3>
                <button
              onClick={() => console.log("Clicou")}
              className="text-xs text-white underline text-end p-2"
            >
              Veja quem está no seu grupo
            </button>
            </div>
            <p className="text-sm mt-5">Você e seus colegas devem juntos responder as perguntas sobre lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
    )

}