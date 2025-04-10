import React from 'react'

function App() {
  return (
<div className=' w-full h-screen bg-slate-500' >
      <div className='w-1/2 h-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-slate-300/5 backdrop-blur-[10px] border border-white/30  shadow-2xl p-3' >
      <div className='w-full h-full relative rounded-2xl overflow-hidden '  >
      <Input />
      </div>
      </div>
     <button> <div className='w-1/2 h-1/6 absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl mt-72  bg-slate-300/5 backdrop-blur-[10px] border border-white/30  shadow-2xl p-3 ' >
      <h1 className='absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-medium text-white'>Convert Currency</h1>
      </div></button>
      
    </div>
  )
}

export default App
