import React from 'react'
import c1 from "./Images/c1.png";
const Curriculum = ({title,desc,img}) => {
    console.log(c1);
    return (
        <div className='curriculumcardshadow border-green-600 w-[290px] p-4 rounded-2xl m-4 hover:scale-105 transition-all duration-200' >
            <div className='w-full  border-black h-44 rounded-xl'>
                    <img src={img.src} alt=""  className='w-full h-full' />
            </div>
            <h1 className='my-2 text-center text-xl font-bold'>{title}</h1>
            <p className='text-center'>{desc}
            </p>
        </div>
    )
}

export default Curriculum