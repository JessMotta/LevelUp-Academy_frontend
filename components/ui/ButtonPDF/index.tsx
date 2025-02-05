

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
            <div className="w-full p-0.1 bg-gray-800 rounded-lg text-center mt-6">
                <button
                    onClick={handleOpenPdf}
                    className="w-full text-center bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 block mt-4"
                >
                    📄 Acesse o PDF do exercício
                </button>
            </div>        
        </>
    
    )
}