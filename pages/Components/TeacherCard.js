import Image from 'next/image'
import React from 'react'

// import director from './Images/director.jpg'
const TeacherCard = ({name,qualification,img}) => {
  return (
    <div className='  m-5 '>
        <div className='w-64 h-64 overflow-hidden rounded-full mx-auto m-2 object-cover '>
            {/* <img src={img.src} alt="" className='h-full w-full object-cover' /> */}
      <Image src={img} width={300} height={300} />
          </div>
        <h1 className='text-xl font-semibold text-center'>{name}</h1>
        <p className='text-sm text-gray-800 text-center' >{qualification}</p>
    </div>
  )
}

export default TeacherCard