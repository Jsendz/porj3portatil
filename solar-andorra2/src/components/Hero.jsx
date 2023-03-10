import React from 'react'

export const Hero = () => {
  return (
    <div className="h-screen w-full max-w-7xl md:mx-auto pt-24 md:pt-0 flex flex-col md:flex-row"  >
        
         <div className="w-full h-full my-auto  flex flex-col  items-center justify-center ">
        <h2 className="text-3xl md:text-6xl text-center md:text-left font-extrabold text-slate-800 px-0.5">Tu Hogar. Energia Verde. Tranquilidad.</h2>
        <p className="text-xl text-center w-[90%] text-slate-500 py-4 px-8 mx-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, a.</p>
        <button className="py-4 px-6 bg-slate-800 text-white rounded-lg  ">Como funciona?</button>
        </div>
        <div className="h-full w-full flex justify-center items-center">
            <div className=" ">
            <img className="md:rounded-lg" src="https://static.vecteezy.com/system/resources/previews/000/663/027/non_2x/vector-solar-panel-isometric-illustration.jpg" alt="" />
            </div>
          </div>
        
        

    </div>
  )
}