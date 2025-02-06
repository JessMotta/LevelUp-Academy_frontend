import Image from "next/image";

import darkStar from "@/public/assets/dark-star.svg";
import { useSubjectContext } from "@/providers/SubjectProvider";
import { TransactionMode } from "@/types/types";
import { LiaFileInvoiceSolid } from "react-icons/lia";

export default function PrestigePointsHistory() {
  /**
   * REQUEST
   * Essa request está acontecendo no SubjectContext
   * */
  const {
    transactions: { loading, history },
  } = useSubjectContext();

  const mode = (transacMode: TransactionMode) => {
    const modes: {
      [key in TransactionMode]: string;
    } = {
      add: "+",
      sub: "-",
    };

    return modes[transacMode];
  };

  return (
    <div className="flex flex-col w-full justify-center items-center gap-1 mt-2.5">
      <div className="flex flex-row gap-2 items-start w-full text-white ">
      <LiaFileInvoiceSolid className="text-xl"/>
      <h4 className="mb-1 w-full">Extrato de Prestígio</h4>
      </div>
      <div className="bg-green-8 rounded-3xl px-3 py-2 w-full md:w-2/6">
        {loading && <span>Loading...</span>}
        {!loading &&
          history.map((item) => (
            <div
              key={item.id}
              className="flex flex-row justify-between items-center py-2 px-1.5 gap-3"
            >
              <div>
                <h1 className="text-sm font-semibold">
                  {item.titulo}
                </h1>
                <p className="text-sm">{item.descricao}</p>
              </div>
              <div className="flex flex-row items-center gap-0.5">
                <h1 className="text-sm font-medium whitespace-nowrap">
                  {mode(item.mode)} {item.amount}
                </h1>
                <Image src={darkStar} alt="coin" width={20} height={20} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
