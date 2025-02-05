import Image from 'next/image';
import StarIcon from '/public/assets/star.svg';

interface ItemStoreProps {
  title: string;
  description: string;
  price: number;
}

interface Props {
  item?: ItemStoreProps;
  onCLick?: () => void;
}

const ItemStore = ({ item, onCLick }: Props) => {
  if (!item) return null;

  return (
    <div className="bg-brand-600 min-w-36 max-w-40 h-auto rounded-md shadow-[0px_4px_4px_rgba(138,138,138,0.25)] mx-auto my-4">
      <div className="text-white p-4 flex flex-col items-center justify-start gap-2">
        <div className="flex flex-col gap-2 items-center">
          <h4 className="font-semibold text-base">{item.title}</h4>
          <p className="text-center min-w-36 max-w-40 text-xxs">
            {item.description}
          </p>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src={StarIcon}
              alt="Icone de estrelas"
              width={16}
              height={16}
            />
            <span className="text-medium text-sm">{item.price}</span>
          </div>
        </div>
        <button
          className="border rounded-md min-w-16 max-w-20 min-h-5 max-h-6 text-[10px] text-medium"
          onClick={onCLick}
        >
          Adquirir
        </button>
      </div>
    </div>
  );
};

export default ItemStore;
