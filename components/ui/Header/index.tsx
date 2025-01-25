import EduIcon from 'public/assets/edu-icon.svg';
import { IoMenu } from "react-icons/io5";
import Image from 'next/image';
const Header = () => {
    return(
        <div className={`bg-green-10 max-w-full h-[50px] flex items-center justify-between p-6 text-white`}>
        <button>
            <Image 
            src={EduIcon}
            alt='EduIcon'
            width={32} />
        </button>
        <button><IoMenu className='w-8'/></button>
        </div>
    )
}

export default Header;