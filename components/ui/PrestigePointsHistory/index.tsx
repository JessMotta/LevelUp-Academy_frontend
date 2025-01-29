import Image from "next/image";

import darkStar from "@/public/assets/dark-star.svg";
import { useSubjectContext } from "@/providers/SubjectProvider";
import { TransactionMode } from "@/types/types";

export const PrestigePointsHistory = () => {
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
    <div className="mt-4">
      <h4 className="text-white mb-1">Extrato de prestígio</h4>
      <div className="bg-brand-300 rounded-3xl p-7 w-full md:w-2/6">
        {loading && <span>Loading...</span>}
        {!loading &&
          history.map((item) => (
            <div
              key={item.id}
              className="flex flex-row justify-between items-center py-2 px-1.5 gap-3"
            >
              <div>
                <h1 className="text-base font-semibold uppercase">
                  {item.titulo}
                </h1>
                <p className="text-sm">{item.descricao}</p>
              </div>
              <div className="flex flex-row items-center gap-0.5">
                <h1 className="text-2xl font-bold whitespace-nowrap">
                  {mode(item.mode)} {item.amount}
                </h1>
                <Image src={darkStar} alt="coin" width={30} height={30} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
