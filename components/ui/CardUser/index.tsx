"use client";

import Image from "next/image";
import ProfileImage from "/public/assets/profile.svg";
import ProgressBar from "../ProgressBar";
import { useSessionContext } from "@/providers/AuthProvider";

import iniciante from "@/public/assets/patentIcons/Iniciante.png";
import assistente from "@/public/assets/patentIcons/Assistente.png";
import especialista from "@/public/assets/patentIcons/Especialista.png";
import aprendiz from "@/public/assets/patentIcons/Aprendiz.png";
import monitor from "@/public/assets/patentIcons/Monitor.png";
import explorador from "@/public/assets/patentIcons/Explorador.png";
import lider from "@/public/assets/patentIcons/Lider.png";

const patentIcon: { [key: string]: string } = {
  INICIANTE: iniciante.src,
  APRENDIZ: aprendiz.src,
  MONITOR: monitor.src,
  ASSISTENTE: assistente.src,
  EXPLORADOR: explorador.src,
  LIDER: lider.src,
  ESPECIALISTA: especialista.src,
};

const CardUser = () => {
  const { user: student } = useSessionContext();

  if (!student) return <></>;

  return (
    <div className="w-full mx-auto md:w-3/4">
      <div
        className={`
            bg-primary rounded-[12px] h-auto m-3
            `}
      >
        <div className="text-white p-3 flex items-center justify-start">
          <Image
            className="mr-4"
            src={ProfileImage}
            alt="Foto de perfil"
            width={54}
            height={54}
          />
          <div className="mr-4 w-full">
            <h3 className="text-base font-medium">{student.name}</h3>
            <p className="text-[10px] font-medium">{student.schollYear}</p>
            <div className="w-full">
              <div className="flex items-center mt-2">
                <Image
                  src={patentIcon[student.patent]}
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
                currPoints={student.currentExperience}
                nextLevelPoints={student.nextPatentExperience}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardUser;
