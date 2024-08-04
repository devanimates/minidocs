import React, { useRef } from 'react';
import Card from './Card';

function Foreground(){

    const constraintsRef = useRef(null);
    const data=[

        {
            desc:"this is the background color that will be displayed",
            fileSize:".9mb",
            close:true,
            tag:{isOpen:true, tagTitle:"Download Now",tagColor:"green"},
        },
        {
            desc:"this is the background color that will be displayed",
            fileSize:".9mb",
            close:true,
            tag:{isOpen:true, tagTitle:"Download Now",tagColor:"blue"},
        },
        {
            desc:"this is the background color that will be displayed",
            fileSize:".9mb",
            close:true,
            tag:{isOpen:true, tagTitle:"Upload Now",tagColor:"green"},
        },

    ];
    return (
        <div ref={constraintsRef} className="fixed z-[3] top-0 left-0 w-full h-full bg-sky-800/50 flex gap-10 flex-wrap p-5">
          {data.map((item, index) => (
            <Card key={index} data={item} reference={constraintsRef} />
          ))}
        </div>
      );
};

export default Foreground;