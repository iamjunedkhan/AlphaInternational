import React from 'react'
import c1 from "./Images/c1.png";
import c2 from "./Images/c2.png";
import c3 from "./Images/c3.png";
const Curriculum = ({title,desc,img}) => {
    console.log(img);
    return (
        <div className='curriculumcardshadow border-green-600 w-[290px] p-4 rounded-2xl m-4 hover:scale-105 transition-all duration-200' >
            <div className='w-full  border-black h-44 rounded-xl'>
                {
                img=="c1"?<img src={c1.src} alt=""  className='w-full h-full' />:(img=="c2"?<img src={c2.src} alt=""  className='w-full h-full' />:<img src={c3.src} alt=""  className='w-full h-full' />)
                }
            </div>
            <h1 className='my-2 text-center text-xl font-bold'>{title}</h1>
            <p className='text-center'>{desc}
            </p>
        </div>
    )
}

export default Curriculum