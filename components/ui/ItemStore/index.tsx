import Image from 'next/image';
import StarIcon from '/public/assets/star.svg';

const ItemStore = () => {
  const data = {
    title: 'Apagar uma falta',
    description: 'Faltou algum dia de aula? Anule essa falta',
    price: 40,
  };

  return (
    <div className="bg-brand-600 w-[144px] h-auto rounded-[12px] shadow-[0px_4px_4px_rgba(138,138,138,0.25)] mx-auto my-4">
      <div className="text-white p-4 flex flex-col items-center justify-start gap-2">
        <div className="flex flex-col gap-2 items-center">
          <h4 className="font-semibold text-base">{data.title}</h4>
          <p className="text-center w-[133px] text-[10px]">
            {data.description}
          </p>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src={StarIcon}
              alt="Icone de estrelas"
              width={16}
              height={16}
            />
            <span className="text-medium text-sm">{data.price}</span>
          </div>
        </div>
        <button className="border rounded-[20px] w-[67px] h-[22px] text-[10px] text-medium">
          Adquirir
        </button>
      </div>
    </div>
  );
};

export default ItemStore;
