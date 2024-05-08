import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function WaitlistSuccess() {
  const navigate=useNavigate();

  useEffect(()=>{
    setTimeout(()=>{
      navigate("/")
    },3000)
  },[])
  return (
    <div className='hScreen w-full flex flex-col justify-center items-between pb-16'>
    <div className="mx-auto flex flex-col justify-center items-center">
      <h2 className="w-fit text-2xl pompiere">You've Been Added!!!</h2>
      <h1 className="w-fit londrinaSketch text-9xl text-[#DD3F22]">HURRAY!!!</h1>
    </div>
  </div>
  )
}

export default WaitlistSuccess
