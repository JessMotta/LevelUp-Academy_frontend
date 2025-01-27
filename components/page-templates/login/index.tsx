"use client";

import React from "react";
import Image from "next/image";
import loginImage from "@/public/assets/login-image.png";
import logo from "@/public/assets/logo.svg";

export const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 md:px-16">
      <div className="absolute top-6 left-10 flex items-center gap-3 sm:w-1/5">
        <Image src={logo} alt="Company Logo" width={68} height={68} />
        <h1
          className="text-lg font-bold"
          style={{ color: "var(--color-green-9)" }}
        >
          Level UP Academy
        </h1>
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-6xl items-center justify-between gap-20">
        <div className="w-full md:w-1/3 max-w-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-10">Faça login</h1>
          <form className="space-y-5">
            <div>
              <label className="text-gray-700 font-medium">Email*</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-gray-700 font-medium">Password*</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-500" />
              <span className="ml-2 text-gray-600 text-sm">
                Lembrar do meu login!
              </span>
            </div>
          </form>
          <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
            <a href="/aluno">Entrar</a>
          </button>
        </div>

        <div className="hidden md:block w-full md:w-1/2 relative">
          <div className="relative w-full ">
            <Image
              src={loginImage}
              alt="Study"
              layout="full"
              objectFit="cover"
              className=""
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <h2 className="text-2xl font-bold">
                Estude, evolua e conquiste!
              </h2>
              <p className="mt-2 text-sm w-4/5 text-slate-200">
                A cada tarefa concluída, novas recompensas são desbloqueadas,
                tornando o processo de aprendizagem mais interativo e
                recompensador.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
