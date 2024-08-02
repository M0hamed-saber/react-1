import img1 from '../../imges/poert1.png'
import img2 from '../../imges/port2.png'
import img3 from '../../imges/port3.png'

export default function Protfilo() {
  return <>
  <div className='text-center '>
    <h2 className='text-gray-800 font-bold pt-8 text-4xl'>PROTFOLIO COMPONENT</h2>
    <div className='flex items-center justify-center mb-3 pt-3'>
    <div className='line h-1 w-20 bg-gray-900 '></div>
    <div className='line h-1 w-20 bg-gray-900 ms-5'></div>
    </div>
  </div>
  <div className='container mx-auto'>
      <div className='flex flex-wrap'>
        <div className='w-1/3 p-2'>
        <img src={img1} alt="img-1" className='w-full rounded-xl' />
        </div>
        <div className='w-1/3 p-2'>
        <img src={img2} alt="img-1" className='w-full rounded-xl' />
        </div>
        <div className='w-1/3 p-2'>
        <img src={img3} alt="img-1" className='w-full rounded-xl' />
        </div>
        <div className='w-1/3 p-2'>
        <img src={img1} alt="img-1" className='w-full rounded-xl' />
        </div>
        <div className='w-1/3 p-2'>
        <img src={img2} alt="img-1" className='w-full rounded-xl' />
        </div>
        <div className='w-1/3 p-2'>
        <img src={img3} alt="img-1" className='w-full rounded-xl' />
        </div>
      </div>
  </div>
  
  
  
  
  </>
}
