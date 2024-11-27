'use client';
import { useState } from "react"

export default function NavBar(){
    const [opened,setOpened] =useState(false)
    return(
        <header className="text-neutral-300 bg-black ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row md:items-center">
    <nav className={`flex flex-col mt-6 md:mt-0 space-y-2 lg:space-y-0 ${opened?'':'md:block hidden'} md:flex-row lg:w-2/5 my-2 md:my-0 md:items-center  text-base md:ml-auto`}>
      <a className="mr-5 cursor-pointer hover:text-neutral-200">Why OneRoof?</a>
      <a className="mr-5 cursor-pointer hover:text-neutral-200">The Team</a>
      <a className="mr-5 cursor-pointer hover:text-neutral-200">Support</a>
      <a className="hover:text-neutral-200 cursor-pointer">GitHub</a>
    </nav>
    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-0 md:mb-0">
    <svg xmlns="http://www.w3.org/2000/svg" className="bg-pink-500 text-lg border-white rounded-full text-white w-8 h-8 p-[4px]" stroke-width="10" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 19q-.671 0-1.143-.472t-.472-1.144v-2q0-.67.472-1.143q.472-.472 1.143-.472h2q.671 0 1.143.472t.472 1.143v2q0 .672-.472 1.144T13 19zm-8-7.061q-.177.115-.365.094q-.189-.021-.323-.198q-.135-.177-.111-.366t.195-.323l8.629-6.433q.217-.161.472-.232T12 4.409t.503.072t.472.232l3.371 2.51v-1.28q0-.395.274-.669T17.288 5t.669.274t.274.668V8.62l3.398 2.527q.171.135.192.323q.021.189-.113.365q-.135.177-.323.199q-.189.02-.366-.095l-8.653-6.413Q12.212 5.41 12 5.41t-.365.115z"></path></svg>
      <span className="ml-3 text-xl">The <span className="underline font-bold">One</span>Roof</span>
      <button onClick={()=>setOpened(!opened)} className={`md:hidden transition-all ease-linear duration-300 block w-max w-8 h-8 ml-auto rounded-lg  p-2 bg-neutral-800 hover:bg-neutral-700`}>
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 12H10m10-7H4m16 14H4" color="currentColor"></path></svg>
    </button>
    </a>
    <div className={`lg:w-2/5  inline-flex lg:justify-end md:ml-5 lg:ml-0 ${opened?'':'md:inline-flex hidden'}`}>
      <button className="inline-flex transition-all ease-linear duration-300 items-center text-neutral-300 font-semibold bg-neutral-800 border-0 py-2 px-5 focus:outline-none hover:bg-neutral-700 rounded-lg  text-base mt-4 md:mt-0">Sign Up
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
      
    </div>
    
  </div>
</header>
    )

}