import React from 'react'

export default function BorderAnimationTailwind() {
  return (
    <div className="flex justify-center items-center  bg-slate-900">
  <div className="group relative mx-auto max-w-lg w-[90%]">
    
    <div className="gradient-bg relative rounded-xl p-1">
      <div className="relative flex flex-col justify-between rounded-lg bg-slate-400 p-6">
        <div>
          <p className="text-sm font-medium text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. odit esse asperiores aut? Aperiam dolorum non assumenda, nihil fuga numquam voluptatibus molestias.</p>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <button aria-label="Primary Button" type="button" className="focus:ring-brand-200 flex flex-shrink-0 content-center items-center justify-center rounded-md border border-transparent bg-black px-4 py-2 text-center text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2">Button</button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
