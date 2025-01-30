"use client";

import Image from "next/image";
import ProfileImage from "/public/assets/profile.svg";
import ProgressBar from "../ProgressBar";
import { useSessionContext } from "@/providers/AuthProvider";

import iniciante  from '@/public/assets/patentIcons/Iniciante.png';
import assistente from '@/public/assets/patentIcons/Assistente.png';
import especialista from '@/public/assets/patentIcons/Especialista.png';
import aprendiz from '@/public/assets/patentIcons/Aprendiz.png';
import monitor from '@/public/assets/patentIcons/Monitor.png';
import explorador from '@/public/assets/patentIcons/Explorador.png';
import lider from '@/public/assets/patentIcons/Lider.png';

const patentIcon: { [key: string]: string } = {
  Iniciante: iniciante.src,
  Aprendiz: aprendiz.src,
  Monitor: monitor.src,
  Assistente: assistente.src,
  Explorador: explorador.src,
  Lider: lider.src,
  Especialista: especialista.src,
};

const CardUser = () => {
  const { user: student } = useSessionContext();

  if (!student) return <></>;

  return (
    <div
      className={`
            bg-primary rounded-[12px] w-[300px] h-auto mx-auto my-4
            `}
    >
      <div className="text-white p-4 flex items-center justify-start">
        <Image
          className="mr-4"
          src={ProfileImage}
          alt="Foto de perfil"
          width={54}
          height={54}
        />
        <div className="mr-4">
          <h3 className="text-base font-medium">{student.name}</h3>
          <p className="text-[10px] font-medium">{student.schollYear}</p>
          <div>
            <div className="flex items-center mt-2">
            <Image 
              src={patentIcon[student.patent] || "@/public/assets/patentIcons/Default.png" }
              width={30}
              height={30}
              alt={student.patent} 
              className="w-8 h-8"
            />
              <div className="uppercase text-[10px] font-bold">
                {student.patent}
              </div>
            </div>
            <ProgressBar
              percent={student.currentExperience / student.nextPatentExperience}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardUser;
