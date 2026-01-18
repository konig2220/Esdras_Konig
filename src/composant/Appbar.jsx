import React from 'react'
import { Github,Menu, X } from 'lucide-react'
function Appbar() {

const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <header>
        <div className='fixed top-0 left-0 p-2.5 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800'>
        <div className="justify-between items-center max-w-7xl mx-auto px-4  flex">

            <div className="">
                <h1 className='text-3xl text-white font-black'>Kon<span className='text-blue-500'>iG</span></h1>
            </div>

            <div className="hidden md:block lg:flex lg:items-center lg:gap-6">
                <nav>
                    <ul className='flex gap-6 text-white'>
                        <li>
                            <a href="#home" className='hover:text-blue-500  font-semibold'>Accueil</a>
                        </li>
                        <li>
                            <a href="#about" className='hover:text-blue-500 font-semibold'>À propos</a>
                        </li>
                        <li>
                            <a href="#skills" className='hover:text-blue-500 font-semibold'>Compétences</a>
                        </li>
                        <li>
                            <a href="#projects" className='hover:text-blue-500 font-semibold'>Projects</a>
                        </li>
                        <li>
                            <a href="#contact" className='hover:text-blue-500 font-semibold'>Contact</a>
                        </li>
                    </ul>
                </nav>

        </div> 

        {/* Mobile menu button */}
    
       {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 md:hidden">
            <nav>
                <ul className='flex flex-col gap-4 text-white p-4'>
                    <li>
                        <a href="#home" className='hover:text-blue-500 font-semibold'>Accueil</a>
                    </li>
                    <li>
                        <a href="#about" className='hover:text-blue-500 font-semibold'>À propos</a>
                    </li>
                    <li>
                        <a href="#skills" className='hover:text-blue-500 font-semibold'>Compétences</a>
                    </li>
                    <li>
                        <a href="#projects" className='hover:text-blue-500 font-semibold'>Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className='hover:text-blue-500 font-semibold'>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )}

        <div className='flex items-center gap-0.5'>
            <a href="https://github.com/konig2220" className="text-white hover:text-blue-500">
                <Github className="w-6 h-6" />
    
            </a>    

            <button className='bg-gray-950/85  cursor-pointer p-2 text-center rounded-full flex items-center hover:bg-blue-500/85 border border-gray-800'>
                <span className='text-white font-semibold'>CG</span>
            </button>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6 cursor-pointer hover:text-blue-500" /> : <Menu className="w-6 h-6 cursor-pointer hover:text-blue-500" />}
          </button>
        </div>

        </div>

        </div>
    </header>
  )
}

export default Appbar