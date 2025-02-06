"use client";

import { GrDocumentPdf } from "react-icons/gr";

export function ButtonPDF () {
      // url do pdf de teste
  const pdfUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
     // função pra abrir o pdf
  const handleOpenPdf = () => {
    if (pdfUrl) {
      window.open(pdfUrl, "_blank");
    } else {
      alert("PDF não encontrado.");
    }
  };
    return (
        <>  {/* botão pra acessar o pdf*/}
                <button
                    onClick={handleOpenPdf}
                    className="w-full text-center bg-blue text-sm font-medium text-white py-3 px-6 rounded-xl flex justify-center items-center mt-4"
                >
                    <GrDocumentPdf className="mr-2" /> Acesse o PDF do exercício
                </button>
        </>
    
    )
}