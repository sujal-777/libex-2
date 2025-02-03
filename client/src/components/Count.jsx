import React from 'react'

function Count({bclr,clr,logo,cnt,data}) {
  return (
    <div className={`${bclr} p-10 rounded-full flex flex-col items-center justify-center` }>
        <div className={`${clr} rounded-full w-14 h-14 m-3 flex justify-center items-center`}>
          <img src={logo} alt="" />
        </div>
        <div className='font-semibold text-3xl'>{cnt} + </div>
        <div className='text-gray-500 text-2xl mt-3'>{data}</div>
    </div>
  )
}

export default Count