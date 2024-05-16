import React from 'react'
import icons from '../constants/icons'
export default function ErrorMessage({message}) {
  return (
    <div className='flex flex-row gap-2 align-items-center py-2 text-md font-bold text-red-600'>
      <icons.MdError size={20}></icons.MdError> <p>{message}</p>
    </div>
  )
}
