"use client";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IoMenu, IoClose } from "react-icons/io5";
import { IoBook, IoSchool, IoSettings, IoHelpCircle, IoLogOut } from "react-icons/io5";
import LogoIcon from "@/public/assets/up-logo.png";
import { useSessionContext } from "@/providers/AuthProvider";
import ProfileImage from "@/public/assets/profile.svg";



export function Navbar() {



  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useSessionContext();
  const initial = user ? "/aluno" : "/";


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full z-20 p-2.5">
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
        />
      )}

      <nav
        className={`px-4 py-2 w-full h-14 bg-brand-900 flex justify-between items-center rounded-lg shadow-md transition-all duration-300 ${
          isMenuOpen ? "opacity-0 pointer-events-none" : "" 
        }`}
      >
        <button onClick={() => router.push(initial)}>
          <div className="w-10 h-10 bg-white rounded-md flex justify-center items-center">
            <Image src={LogoIcon} alt="Logo" width={28} height={28} />
          </div>
        </button>
        {isMobile ? (
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <IoClose className="h-8 w-8 text-white" />
            ) : (
              <IoMenu className="h-8 w-8 text-white" />
            )}
          </button>
        ) : (
          <div className="flex gap-4">
            <button
              key="/minhas-disciplinas"
              className="text-white hover:text-gray-300"
              onClick={() => router.push("/aluno")}
            >
              Minhas Disciplinas
            </button>
            {pathname.includes("/aluno/disciplina") ? (
              <button
              key="/meus-beneficios"
              className="text-white hover:text-gray-300"
              onClick={() => router.push(`${pathname}/beneficios`)}
            >
              Meus Benefícios
            </button>
            ) : null}            
            <button
              key="/manual-do-aluno"
              className="text-white hover:text-gray-300"
              onClick={() => router.push("/aluno")} // Substituir por "/manual-do-aluno" quando a página estiver pronta
            >
              Manual do Aluno
            </button>
            <button
              key="/configuracoes"
              className="text-white hover:text-gray-300"
              onClick={() => router.push("/aluno")} // ubstituir por "/configuracoes" quando a página estiver pronta
            >
              Configurações
            </button>
            <button
              key="/logout"
              className="rounded-md text-black p-2 font-mono bg-slate-100"
              onClick={() => {
                // Adicione aqui a lógica para o logout
                router.push("/"); // Exemplo de navegação
              }}
            >
              Logout
            </button>
          </div>
        )}
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-20 flex justify-end bg-transparent mt-2.5 mb-2.5">
          <div className="w-4/5 h-full bg-brand-900 rounded-lg shadow-lg p-6 flex flex-col items-center transition-all duration-300 mr-4">
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <IoClose className="h-8 w-8" />
            </button>

            <div className="flex flex-col items-center flex-grow justify-center">
              {user ? (
                <>
                  <Image
                    src={ProfileImage}
                    alt="Foto de perfil"
                    width={60}
                    height={60}
                    className="rounded-full mb-4"
                  />
                  <p className="text-lg font-semibold text-white text-center">{user.name}</p>
                  <p className="text-sm mb-4 text-white text-center">{user.schollYear}</p>
                </>
              ) : (
                <p className="text-lg font-semibold text-white text-center">Aluno</p>
              )}
              <hr className="w-full border-gray-600 mb-4" />

              <div className="w-full flex flex-col gap-2">
                <button
                  className="flex items-center gap-2 w-full py-2 px-4 hover:bg-brand-800 rounded-md text-white"
                  onClick={() => {
                    router.push("/aluno")
                    setIsMenuOpen(false);
                  }}
                >
                  <IoSchool className="text-white" />
                  Minhas Disciplinas
                </button>
                {pathname.includes("/aluno/disciplina") ? (
                <button
                  className="flex items-center gap-2 w-full py-2 px-4 hover:bg-brand-800 rounded-md text-white"
                  onClick={() => {
                    router.push(`${pathname}/beneficios`)
                    setIsMenuOpen(false);
                  }}
                >
                  <IoSettings className="text-white" />
                  Meus Benefícios
                </button>
                ): null}
                <button
                  className="flex items-center gap-2 w-full py-2 px-4 hover:bg-brand-800 rounded-md text-white"
                  onClick={() => {
                    router.push("/aluno")
                    setIsMenuOpen(false);
                  }}
                >
                  <IoHelpCircle className="text-white" />
                  Manual do Aluno
                </button>
                <button
                  className="flex items-center gap-2 w-full py-2 px-4 hover:bg-brand-800 rounded-md text-white"
                  onClick={() => {
                    router.push("/aluno")
                    setIsMenuOpen(false);
                  }}
                >
                  <IoSettings className="text-white" />
                  Configurações
                </button>
                <button
                  className="flex items-center gap-2 w-full py-2 px-4 hover:bg-brand-800 rounded-md text-white"
                  onClick={() => {
                    router.push("/");
                    setIsMenuOpen(false);
                  }}
                >
                  <IoLogOut className="text-white" />
                  Logout
                </button>
              </div>
            </div>

            <div className="absolute bottom-4 left-1/2 transform translate-x-1">
              <Image
                src={LogoIcon}
                alt="Logo"
                width={32}
                height={32}
                className="text-white"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
