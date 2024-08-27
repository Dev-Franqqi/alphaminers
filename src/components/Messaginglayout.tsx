import { Link } from 'react-router-dom';

import { FaTelegram } from 'react-icons/fa';
export default function Messaginglayout() {
  return (
    <div className="fixed left-0 top-[90%] transform -translate-y-1/2 z-50 p-4">
        <div className='w-fit h-fit p-3 rounded-md bg-white border-2'>
    <Link to="https://t.me/florabrown6">
      <FaTelegram className="text-blue-500 text-4xl cursor-pointer hover:text-blue-700" />
    </Link>


        </div>
    </div>
  );
};

