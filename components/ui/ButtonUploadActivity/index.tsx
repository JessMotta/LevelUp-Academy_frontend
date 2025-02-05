"use client";
import { useState } from "react";
import { BsTrash3 } from "react-icons/bs";
import { MdOutlineFileUpload } from "react-icons/md";

export default function ButtonUploadActivity() {
  const [fileName, setFileName] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);

  // função do upload do arquivo
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setIsUploaded(true);
    }
  };


  return (
    <div className="text-white">
      {/* se a resposta já foi enviada, mostrar mensagem */}
      {isUploaded ? (
        <div className="w-full p-4 bg-green-12 text-green-10 rounded-lg mt-6">
          <p className="font-medium text-lg">A resposta do grupo foi enviada!</p>
          <p className="text-sm">Você pode remover e enviar outro arquivo dentro do prazo.</p>
          <button
            className="w-full mt-2 cursor-pointer text-center text-sm border-dashed border-2 border-green-11 text-green-11 py-2 px-4 rounded-lg flex justify-center items-center"
            onClick={() => {
              setFileName("");
              setIsUploaded(false);
            }}
          >
             Apagar resposta enviada <BsTrash3 className="ml-2 text-xl"/>
          </button>
        </div>
      ) : (
        <div className="w-full p-4 bg-green-12 text-green-10 rounded-lg mt-6">
          <p className="font-medium text-lg">Entregue sua resposta</p>
          <p className="text-sm">Pode ser feito o envio de .doc, .pdf ou foto legível:</p>

          {/* botão de upload */}
          <label className="mt-2 cursor-pointer text-center text-sm border-dashed border-2 border-green-11 text-green-11 py-2 px-4 rounded-lg flex justify-center items-center">
              Fazer upload <MdOutlineFileUpload className="ml-2 text-2xl" />
            <input type="file" accept=".pdf,.doc,.docx,.png,.jpg,.jpeg" onChange={handleFileUpload} hidden />
          </label>

          {fileName && <p className="text-xs mt-2">Arquivo: {fileName}</p>}
          <p className="text-xs mt-4 text-center">Apenas um do grupo precisa fazer o envio</p>
        </div>
      )}

      {/* botão de voltar */}
      <button
        className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300 mt-4"
        onClick={() => window.history.back()}
      >
        🔙 Voltar
      </button>
    </div>
  );
}
