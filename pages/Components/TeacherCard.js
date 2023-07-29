import React from 'react'
import director from './Images/director.jpg'
const TeacherCard = ({name,qualification,img}) => {
  return (
    <div className='  m-5 '>
        <div className='w-64 h-64 overflow-hidden rounded-full mx-auto m-2'>
            <img src={director.src} alt="" className='h-full w-full' />
        </div>
        <h1 className='text-xl font-semibold text-center'>{name}</h1>
        <p className='text-sm text-gray-800 text-center' >{qualification}</p>
    </div>
  )
}

export default TeacherCard