import Image from "next/image";
import React, { useEffect, useState } from "react";

import darkStar from "@/public/assets/dark-star.svg";
import { TRANSACTIONS_MOCK } from "@/__mocks__/transactions";

type Transaction = {
  id: string;
  titulo: string;
  descricao: string;
  amount: number;
};

export const PrestigePointsHistory = () => {
  const [history, setHistory] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  /**
   * REQUEST
   * Aqui seria ideal a gente fazer um fetch pra pegar as transações de prestigio (+ / -) para listar.
   *
   *
   * Como indicar que é transação positiva ou negativa?
   * */

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setHistory(TRANSACTIONS_MOCK as unknown as Transaction[]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="mt-4">
      <h4 className="text-white mb-1">Extrato de prestígio</h4>
      <div className="bg-brand-300 rounded-3xl p-7 w-full md:w-2/6">
        {loading && <span>Loading...</span>}
        {!loading &&
          history.map((item) => (
            <div
              key={item.id}
              className="flex flex-row justify-between items-center py-2.5 "
            >
              <div>
                <h1 className="text-base font-semibold">{item.titulo}</h1>
                <p className="text-lg">{item.descricao}</p>
              </div>
              <div className="flex flex-row items-center">
                <h1 className="text-3xl font-light">+{item.amount}</h1>
                <Image src={darkStar} alt="coin" width={30} height={30} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
