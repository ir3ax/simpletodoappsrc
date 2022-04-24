import React from 'react'
import Logo from '../images/logo.gif'
import "../index.css";
import black_a from '../images/black_a.png'
import black_g from '../images/black_g.png'
import black_e from '../images/black_e.png'
import black_n from '../images/black_n.png'
import black_d from '../images/black_d.png'
import work from '../images/work_card.jpg'
import school from '../images/school_card.jpg'
import gym from '../images/gym_card.jpg'
import food from '../images/food_card.jpg'
import hygiene from '../images/hygiene_card.jpg'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='Navbar animate-transitionIn'>
        <div className='navbarHolderMain h-screen bg-light-cyan'>
        <div className="navBarHolder fixed top-0 z-50 w-full h-24 bg-black shadow-very-light-cyan shadow-md xs:h-20">
            <img className={`absolute mt-5 ml-8 xs:mt-2`} src={Logo} alt="" />
            <Link to="/dashboard" className='absolute top-6 right-8 p-2 border-2 rounded-md cursor-pointer text-md font-medium text-white hover:text-black hover:bg-light-cyan xs:top-4'>Wrote Now!</Link>
        </div>
        <div className="LettersHolder h-full bg-pencils-img bg-cover space-x-5 flex m-auto items-center justify-center text-white text-2xl shadow-black shadow-lg xs:space-x-2 xs:h-full xs:shadow-md">
            <img className='imgHolder w-52  drop-shadow-xl animate-bounce xl:w-40 lg:w-32 md:w-24 sm:w-20 xs:w-12' src={black_a} alt="A_BLACK"/>
            <img className='imgHolder w-48  drop-shadow-xl animate-bounce animation-delay-1000 xl:w-36 lg:w-28 md:w-20 sm:w-16 xs:w-12' src={black_g} alt="G_BLACK"/>
            <img className='imgHolder w-44  drop-shadow-xl animate-bounce xl:w-32 lg:w-24 md:w-16 sm:w-12 xs:w-10' src={black_e} alt="E_BLACK"/>
            <img className='imgHolder w-44  drop-shadow-xl animate-bounce animation-delay-1000 xl:w-32 lg:w-24 md:w-16 sm:w-12 xs:w-12' src={black_n}  alt="N_BLACK"/>
            <img className='imgHolder w-52  drop-shadow-xl animate-bounce xl:w-40 lg:w-32 md:w-24 sm:w-20 xs:w-12' src={black_d}  alt="D_BLACK"/>
            <img className='imgHolder w-44  drop-shadow-xl animate-bounce animation-delay-1000 xl:w-32 lg:w-24 md:w-16 sm:w-12 xs:w-12' src={black_a}  alt="A_BLACK"/>
        </div>
        </div>

        <div className="cardHolder h-auto w-full bg-slate-50">
           
                <div className="m-12 xs:p-12 xs:m-0"> 
                <h1 className='mt-36 mb-24 text-6xl font-mono font-extrabold xs:text-4xl xs:mt-0 xs:mb-11'>You can write anything you want!</h1> 
                
                <div className='cardImageHolder 2md:p-8 h-auto flex 2md:overflow-x-auto 3xl:justify-evenly md:flex-col md:h-auto'>

                <div className="flex-shrink-0 w-80 h-2/4 rounded-xl overflow-hidden shadow-black shadow-md md:mb-4 md:w-full md:h-2/5">
                  <img className="w-full h-48 md:h-1/2" src={work} alt="Work"/>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Work</div>
                    <p className="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#motivation</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#codingis!fun</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#work</span>
                  </div>
                </div>

                 <div className="flex-shrink-0 ml-4 w-80 h-2/4 rounded-xl overflow-hidden shadow-black shadow-md md:mb-4 md:w-full md:h-2/5 md:ml-0">
                  <img className="w-full h-48 md:h-1/2" src={school} alt="School"/>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">School</div>
                    <p className="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#informationtechnology</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#programming</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#virus</span>
                  </div>
                </div>

                 <div className="flex-shrink-0 ml-4 w-80 h-2/4 rounded-xl overflow-hidden shadow-black shadow-md md:mb-4 md:w-full md:h-2/5 md:ml-0">
                  <img className="w-full h-48 md:h-1/2" src={gym} alt="School"/>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Fitness</div>
                    <p className="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#lazy</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#GetFit</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#newYearnewMe</span>
                  </div>
                </div>

                <div className="flex-shrink-0 ml-4 w-80 h-2/4 rounded-xl overflow-hidden shadow-black shadow-md md:mb-4 md:w-full md:h-2/5 md:ml-0">
                  <img className="w-full h-48 md:h-1/2" src={food} alt="School"/>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Food</div>
                    <p className="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#foodislayp</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Foodie</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Homemade</span>
                  </div>
                </div>

                <div className="flex-shrink-0 ml-4 w-80 h-2/4 rounded-xl overflow-hidden shadow-black shadow-md md:mb-4 md:w-full md:h-2/5 md:ml-0">
                  <img className="w-full h-48 md:h-1/2" src={hygiene} alt="School"/>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Hygiene</div>
                    <p className="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#skincare</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#selfcare</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Showerroutine</span>
                  </div>
                </div>
              
                </div>

                <div className='mt-16 flex items-center justify-center'>
                <Link to="/dashboard" className='p-4 border-4 rounded-md cursor-pointer text-xl font-medium animate-bounce border-light-cyan text-black hover:text-white hover:bg-light-cyan'>Wrote Now!</Link>
                </div>

              </div>
                
        </div>
        
    </div>
  )
}

export default HomePage