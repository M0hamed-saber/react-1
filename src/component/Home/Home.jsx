import logo from '../../imges/avataaars.svg'

export default function Home() {
  return  <> 
    <div className='home'>
      <div className='content pt-20'>
        <img src={logo} alt="logo" className='mx-auto w-1/5' />
        <h2 className='font-bold text-white text-center pt-5 text-4xl'> START FRAMEWORK </h2>
        <div className='flex items-center justify-center  pt-3'>
    <div className='line h-1 w-20 bg-white '></div>
    <div className='line h-1 w-20 bg-white ms-5'></div>
    </div>
    <div className='text-center pt-4'> 
    <span className=' text-white '>Graphic Artist - Web Designer - Illustrator</span>
    </div>
      </div>
    </div>
    </>

}

