import Image from "next/image";

export default function Home() {
  return (
   <div className="bg-neutral-950 ">
    <section className="">
  <div className="py-8 px-10 mx-auto max-w-screen-xl w-full flex flex-col items-center content-center sm:py-14 lg:px-6">
      <div className="max-w-screen-md w-full mb-10 md:mt-0 mt-4 md:mb-14">
          <h2 className="mb-4 text-4xl tracking-tight text-center mx-auto font-semibold text-white">One central place for all your needs</h2>
          <p className=" sm:text-base my-5 text-gray-300 text-center mx-auto">Here at OneRoof, we provide the one central solution for all the needs of every SASTRA student. From a rental marketplace - to a lost and find system, we have got everything covered for you!</p>
          <div className="flex mx-auto w-max md:flex-row md:items-end content-end md:space-x-2 flex-col space-x-0 space-y-2 md:space-y-0 mt-8">
              <button className="button-primary">Get Started</button>
                <button className="font-poppins rounded-xl text-sm  px-8 py-4 hover:scale-105 duration-200 transition-all ease-linear  text-white font-semibold">Know More</button>
          </div>
          
      </div>
     
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          
          
         
          <div className="shadow-xl duration-200 ease-linear transition-all bg-black bg-opacity-0  px-6 py-12">
              <div className="flex justify-center items-center mx-auto mb-4 w-max p-6 bg-neutral-800/30">
                 <svg width="24" height="24" className="w-8 h-8  text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="currentColor" d="M9.5 11v-1a2.5 2.5 0 0 1 5 0v.039a2 2 0 0 1-.75 1.562l-1 .798a2 2 0 0 0-.75 1.562V15.5m0 1.5v2M5.5 4.5v17m13 0v-17h-2.027m-8.946 0H.5v.25l.055.31a45.7 45.7 0 0 1 0 15.88l-.055.31v.25h23v-.25l-.055-.31a45.7 45.7 0 0 1 0-15.88l.055-.31V4.5h-7.027m-8.946 0a4.5 4.5 0 0 1 8.946 0m-8.946 0h8.946"/></svg>
              </div>
              <h3 className="mb-2 text-lg font-bold mx-auto text-center text-white">Lost Items</h3>
              <p className="text-gray-400 text-sm lg:text-base mx-auto px-6 text-center">Post items that you have lost on the public billboard to alert others and possibly aid you in finding them back.</p>
          </div>
     <div className="shadow-xl duration-200 ease-linear transition-all bg-black bg-opacity-0  px-6 py-12">
                        

              <div className="flex justify-center mx-auto items-center mb-4  w-max p-6 bg-neutral-800/30">
               <svg width="24" height="24" className="text-white w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 21h2m16 0h-2M5 21h14M5 21V9.328M19 21V9.328m-14 0a2 2 0 0 1-.11-.068l-.54-.36a2 2 0 0 1-.747-2.407l.894-2.236A2 2 0 0 1 6.354 3h11.292a2 2 0 0 1 1.857 1.257l.894 2.236A2 2 0 0 1 19.65 8.9l-.54.36a2 2 0 0 1-.11.068m-14 0a2 2 0 0 0 2.11-.068L9 8l1.89 1.26a2 2 0 0 0 2.22 0L15 8l1.89 1.26a2 2 0 0 0 2.11.068"/><path d="M14 21v-5a2 2 0 1 0-4 0v5"/></g></svg>
              </div>
              <h3 className="mb-2 text-lg font-bold mx-auto text-center text-white">Marketplace</h3>
              <p className="text-sm lg:text-base text-gray-400 mx-auto text-center px-6">Sell your old stuff, excess items or previous year books, unused notebooks, lab manuals, class notes etc on the marketplace</p>
          </div>
      <div className="shadow-xl duration-200 ease-linear transition-all bg-black bg-opacity-0   px-6 py-12">
              <div className="flex mx-auto justify-center items-center mb-4  w-max p-6 bg-neutral-800/30">
               <svg width="512" height="512" className="w-8 h-8 text-white" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" fillRule="evenodd" d="m256 34.347l192 110.851v221.703L256 477.752L64 366.901V145.198zM106.666 192.001v150.266l128 73.9V265.902zm298.667.001l-128 73.9v150.265l128-73.9zM256 83.614l-125.867 72.67L256 228.952l125.867-72.67z"/></svg>
              </div>
              <h3 className="mb-2 text-lg font-bold mx-auto text-center text-white">Project Showcase</h3>
              <p className="text-gray-400 px-6 lg:text-base text-sm mx-auto text-center">Showcase your projects - both hobby or professional ones on the public showcase for others to view, support and critique</p>
          </div>
      </div>
  </div>
</section>
    </div>
  );
}
