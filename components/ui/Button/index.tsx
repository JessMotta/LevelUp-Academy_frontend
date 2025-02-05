"use client";

import { useRouter } from "next/navigation";

export default function Button(){
    const router = useRouter();
    return(
        <>
            {/* botão de voltar */}
            <button
                    className="w-full bg-green-5 text-dark text-base py-2 px-4 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300 mt-4"
                    onClick={() => router.back()}
                >
                    Voltar
            </button>
        </>
    )
}