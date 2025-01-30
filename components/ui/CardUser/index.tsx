"use client";

import Image from "next/image";
import ProfileImage from "/public/assets/profile.svg";
import { IoLogoElectron } from "react-icons/io5";
import ProgressBar from "../ProgressBar";
import { useSessionContext } from "@/providers/AuthProvider";

const CardUser = () => {
  const { user: student } = useSessionContext();

  if (!student) return <></>;

  return (
<<<<<<< HEAD
    <div className="w-full mx-auto md:w-3/4">
    <div
      className={`
            bg-primary rounded-[12px] h-auto m-3
            `}
    >
      <div className="text-white p-3 flex items-center justify-start">
=======
    <div
      className={`
            bg-primary rounded-[12px] w-[300px] h-auto mx-auto my-4
            `}
    >
      <div className="text-white p-4 flex items-center justify-start">
>>>>>>> 15df82e61209bc4a3a5ca0924591b01ec742c053
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
<<<<<<< HEAD
        </div>
      </div>
    </div>
    </div>
  );
};

=======
>>>>>>> 15df82e61209bc4a3a5ca0924591b01ec742c053
        </div>
      </div>
    </div>
  );
};

export default CardUser;
