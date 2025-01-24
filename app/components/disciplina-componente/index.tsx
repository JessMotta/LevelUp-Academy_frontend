import React from 'react';
import Image from 'next/image';
import starSvg from '@/app/Assets/Vector.svg';

function DisciplinaCard() {
  return (
    <div className="flex flex-col rounded-xl w-3/4 md:w-2/6 p-3" style={{background: ('var(--color-green-11)')}}>
      <div className="flex flex-grow justify-between">
        <div className="">
          <h1 className='text-white font-bold text-3xl'>Biologia</h1>
          <h2 className='text-sm font-normal'  style={{color: ('var(--color-green-3)')}}>Prof. Manuela Garcia</h2>
          <div className="h-0.5 w-[150%] md:w-[190%]" style={{background: ('var(--color-green-7)')}}></div>
          <h2 className='text-sm font-normal mt-2' style={{color: ('var(--color-green-3)')}}>Média até agora: 7,6</h2>
          <h2 className='text-sm font-normal mb-2' style={{color: ('var(--color-green-3)')}}>Presença: 91%</h2>
        </div>
        <div className="flex rounded-full w-[80px] h-[80px] items-center justify-center mr-4 relative" style={{background: ('var(--color-green-1)')}}>
          <Image src={starSvg} alt="Star" width={40} className='absolute left-[-4px] top-[-4px]' /> 
          <p className='absolute text-amber-400 font-normal text-3xl bottom-[15px]' style={{color: ('var(--color-yellow)')}}>98</p>
        </div>
      </div>
      <div className="flex flex-col">
        <button className=' p-2 rounded-md flex items-center gap-2' style={{background: ('var(--color-green-8)')}}>
          <div className="h-1.5 w-1.5 rounded-full ml-4" style={{background: ('var(--color-red)')}}></div>
          <p className='text-sm font-normal text-gray-800'>Tarefa obrigatória pendente</p>
        </button>
        <a href="#" className='text-sm text-white hover:underline text-end p-2'>Acessar sala virtual</a>
      </div>
    </div>
  );
}

export default DisciplinaCard;