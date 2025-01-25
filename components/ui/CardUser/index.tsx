import Image from 'next/image';
import ProfileImage from '/public/assets/profile.svg'
import { IoLogoElectron } from "react-icons/io5";
import ProgressBar from '../ProgressBar';


const CardUser = () => {
    return (
        <div className={`
            bg-primary rounded-[12px] w-[300px] h-auto mx-auto my-4
            `}>
            <div className="text-white p-4 flex items-center justify-start">
                <Image
                className='mr-4'
                src={ProfileImage}
                alt='Foto de perfil'
                width={54}
                height={54}
                />
                <div className='mr-4'>
                    <h3 className="text-base font-medium">Maria da Silva</h3>
                    <p className="text-[10px] font-medium">7º ano</p>
                    <div>
                        <div className="flex items-center mt-2">
                            <IoLogoElectron className='mr-2 fill-green-12'/>
                            <div className="uppercase text-[10px] font-bold">Aprendiz</div>
                        </div>
                        <ProgressBar/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardUser;