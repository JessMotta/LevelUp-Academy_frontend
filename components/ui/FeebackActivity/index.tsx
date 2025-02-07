"use client";
import Image from "next/image";
import starSvg from "@/public/assets/star.svg";
import { useSubjectContext } from "@/providers/SubjectProvider";

interface FeedbackActivityProps {
    activityId: string;
}


export default function FeedbackActivity ({activityId}: FeedbackActivityProps) {
    const {activities} = useSubjectContext();
    const activity = activities.find(activity => activity.id === parseInt(activityId));

     return (
        <>
        {(activity?.completed === false && activity.id === 1) ? (
            <div className="bg-green-13 py-3 px-4 rounded-xl text-green-3 mt-3">
                <h2 className="font-medium text-[18px]">Seu grupo não enviou resposta</h2>
                <p className="text-sm">O prazo desta atividade está encerrado e ninguém do grupo submeteu o arquivo com a resolução.</p>
            </div>

        ): (activity?.id !== 1 && activity?.completed !== true) ?(
            <></>
        ): (
        <div className="bg-green-12 py-3 px-4 rounded-xl text-green-10 mt-3">
            <h2 className="font-medium text-[18px]">A resposta do grupo foi enviada!</h2>
            <div className="flex flex-row items-center">
                <p className="text-sm">Você recebeu:</p>
                <div className="flex ">
                    <p
            className="font-semibold text-[18px] ml-3"
          >
            {activity?.prestigeValue}
          </p>
          <Image
            src={starSvg}
            alt="Star"
            width={24}
            className="custom-svg"
          />
        </div>
            </div>
    
            <p className="text-sm flex flex-row items-center">Aguarde a correção para receber pontos de experiência</p>
        </div>
        )}
         

        
        </>
       
    );
}



