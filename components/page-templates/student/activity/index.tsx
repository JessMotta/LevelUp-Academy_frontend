import { useState } from "react";

interface SubjectActivityTemplateProps {
  activityId: string;
}

export default function SubjectActivityTemplate({
  activityId,
}: SubjectActivityTemplateProps) {
  const [fileName, setFileName] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);

  // url do pdf de teste
  const pdfUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  // função do upload do arquivo
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setIsUploaded(true);
    }
  };

  // função pra abrir o pdf
  const handleOpenPdf = () => {
    if (pdfUrl) {
      window.open(pdfUrl, "_blank");
    } else {
      alert("PDF não encontrado.");
    }
  };

  return (
    <div className="text-white">
      <h1>Página da atividade #{activityId}</h1>

      {/* botão pra acessar o pdf*/}
      <div className="w-full p-0.1 bg-gray-800 rounded-lg text-center mt-6">
      <button
        onClick={handleOpenPdf}
        className="w-full text-center bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 block mt-4"
      >
        📄 Acesse o PDF do exercício
      </button>
      </div>

      {/* se a resposta já foi enviada, mostrar mensagem */}
      {isUploaded ? (
        <div className="w-full p-4 bg-green-200 text-green-800 rounded-lg text-center mt-6">
          <p className="font-bold">A resposta do grupo foi enviada!</p>
          <p className="text-xs">Você pode remover e enviar outro arquivo dentro do prazo.</p>
          <button
            className="w-full mt-2 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
            onClick={() => {
              setFileName("");
              setIsUploaded(false);
            }}
          >
             🗑️ Apagar resposta enviada
          </button>
        </div>
      ) : (
        <div className="w-full p-4 bg-green-100 text-green-800 rounded-lg text-center mt-6">
          <p className="font-bold">Entregue sua resposta</p>
          <p className="text-xs">Pode ser feito o envio de .doc, .pdf ou foto legível:</p>

          {/* botão de upload */}
          <label className="block mt-2 cursor-pointer bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">
            📤 Fazer Upload
            <input type="file" accept=".pdf,.doc,.docx,.png,.jpg,.jpeg" onChange={handleFileUpload} hidden />
          </label>

          {fileName && <p className="text-xs mt-2">Arquivo: {fileName}</p>}
          <p className="text-xs mt-4">Apenas um do grupo precisa fazer o envio</p>
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
