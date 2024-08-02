
export default function Contact() {
  return <>
  <div className='contact'>
    <div className='text-center '>
    <h2 className='text-gray-800 font-bold pt-8 text-4xl'>CONTACT SECTION</h2>
    <div className='flex items-center justify-center mb-3 pt-3'>
    <div className='line h-1 w-20 bg-gray-900 '></div>
    <div className='line h-1 w-20 bg-gray-900 ms-5'></div>
    </div>
  </div>

  <div className='form pt-20 pe-96 ms-40'>
    <input type='text' className='p-2 w-2/4 block m-2 mx-auto' placeholder='userName'></input>
    <hr className='w-2/4 mx-auto pb-4'/>
    <input type='text' className='p-2 w-2/4 block m-2 mx-auto' placeholder='userAge'></input>
    <hr className='w-2/4 mx-auto pb-4'/>
    <input type='text' className='p-2 w-2/4 block m-2 mx-auto' placeholder='userEmail'></input>
    <hr className='w-2/4 mx-auto pb-4'/>
    <input type='text' className='p-2 w-2/4 block m-2 mx-auto' placeholder='userPassword'></input>
    <hr className='w-2/4 mx-auto pb-4'/>
  </div>

  <div className='button me-40 pe-96'>
      <button className='bg-green-500 p-2 rounded-xl text-white w-40 mb-5 '>send massage</button>
    </div>
    </div>
  
  </>

}
