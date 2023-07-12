'use client'
import { AnimateSequence } from '@/Components/AnimateSequence'
import BorderAnimationTailwind from '@/Components/BorderAnimationTailwind'
import Spotlighteffect from '@/Components/Spot light effect'
import Test from '@/Components/Spot light effect'

import Image from 'next/image'

export default function page() {
  return (
    <main className="flex min-h-screen bg-zinc-900 flex-col items-center justify-between p-24">

      {/* <Spotlighteffect/> */}
      
       {/* <AnimateSequence/> */}
       <BorderAnimationTailwind/>
    </main>
  )
}
