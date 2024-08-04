import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference} // Ensure this is a React ref
      whileDrag={{scale:1.2}}
      dragElastic={0.2}
      className='relative w-60 h-72 bg-zinc-900/90 rounded-[50px] text-white px-8 py-10 overflow-hidden flex-shrink-0'
    >
      <FaRegFileAlt />
      <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
      <div className='footer absolute bottom-0 w-full left-0'>
        <div className='flex items-center justify-between px-8 mb-3'>
          <h5>{data.fileSize}</h5>
          <span className='w-5 h-5 bg-zinc-200 rounded-full flex items-center justify-center'>
            {data.close ? <IoIosClose color='#000' /> : <FaDownload size="0.7em" color='#000' />}
          </span>
        </div>
        {data.tag.isOpen ? (
          <div
            className={`tag w-full py-2 ${data.tag.tagColor === 'green' ? 'bg-green-600' : 'bg-blue-600'} text-white flex items-start justify-center`}
          >
            <h3 className='text-white'>{data.tag.tagTitle}</h3>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default Card;
