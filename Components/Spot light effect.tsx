'use client'
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Spotlighteffect() {
  const notify = () => toast("Spot light effect!");
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="  group relative max-w-md rounded-xl border border-white/10 bg-zinc-800/40 px-8 py-16 shadow-2xl"
      onMouseMove={handleMouseMove} onClick={notify}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div>
        
        <div className="mt-2 flex items-center gap-x-2">
          <span className="text-5xl font-bold tracking-tight text-white">
            Hero
          </span>
        </div>
        <p className="mt-6 text-base leading-7 text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit, facilis
          illum eum ullam nostrum atque quam.
        </p>
      </div>
      <ToastContainer 
     position="top-center"
     autoClose={5000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme="light"
     
      />
    </div>
  );
}