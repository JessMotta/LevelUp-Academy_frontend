"use client";
import Image from "next/image";
import starSvg from "@/public/assets/star.svg";
import { IoLogoElectron } from "react-icons/io5";
import { useActivityContext } from "@/providers/ActivityProvider";
import { useSubjectContext } from "@/providers/SubjectProvider";

interface FeedbackActivityProps {
    activityId: string;
}


export default function FeedbackActivity ({activityId}: FeedbackActivityProps) {
    const {activities} = useSubjectContext();
    const activity = activities.find(activity => activity.id === parseInt(activityId));
    //const {complete, value} = useActivityContext();

     return (
        <>
        {activity?.completed === false ? (
        // Feedback caso o grupo não tenha enviado a resposta
            <div className="bg-green-13 py-3 px-4 rounded-xl text-green-3">
                <h2 className="font-medium text-[18px]">Seu grupo não enviou resposta</h2>
                <p className="text-sm">O prazo desta atividade está encerrado e ninguém do grupo submeteu o arquivo com a resolução.</p>
            </div>

        ): (
        // Feedback caso o grupo tenha enviado a resposta
        <div className="bg-green-12 py-3 px-4 rounded-xl text-green-10">
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
            <div>
            <p className="text-sm flex">Aguarde a correção para receber pontos de experiência <IoLogoElectron/></p>
            
            </div>
        </div>
        )}
         

        
        </>
       
    );
}



