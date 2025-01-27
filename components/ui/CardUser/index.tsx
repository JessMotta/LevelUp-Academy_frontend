import Image from "next/image";
import ProfileImage from "/public/assets/profile.svg";
import { IoLogoElectron } from "react-icons/io5";
import ProgressBar from "../ProgressBar";
import { SessionStudent } from "@/types/types";

const student: SessionStudent = {
  name: "João da Silva",
  schollYear: "7º ano",
  patent: "Aprendiz",
  currentExperience: 120,
  nextPatentExperience: 300,
};

const CardUser = () => {
  /**
   * IDEALMENTE
   * com a ID a gente faria uma chamada para o endpoint de consulta que retornaria esses dados sobre o aluno
   *
   * Talvez colocar isso num contexto
   */

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
              <IoLogoElectron className="mr-2 fill-green-12" />
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
