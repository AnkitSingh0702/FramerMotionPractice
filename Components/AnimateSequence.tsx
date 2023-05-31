'use client'
import { useAnimate } from "framer-motion";

export function AnimateSequence() {
    const [scope, animate] = useAnimate();

    function sequence() {
        animate([
            [scope.current, { rotate: -90 }],
            [scope.current, { scale: 1.5 }],
            [scope.current, { rotate: 0 }],
            [scope.current, { scale: 1 }]
        ]);
    }

    return (
        <div
            style={{
                width: 150,
                height: 150,
                borderRadius: 30,
                backgroundColor: "#fff",
                cursor: "pointer"
            }}
            ref={scope}
            onClick={sequence}

            className="m-2 p-10 text-white rounded-xl  bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-400 bg-size-200 bg-pos-0 hover:bg-pos-100"
        />
    );
}
