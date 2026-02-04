import { AnimatePresence, motion as Motion } from "framer-motion"
import { useEffect, useMemo, useState } from "react"

export default function IntroAnimation({onFinish}) {
  const greetings = useMemo(()=>[

"Hello", "Salam", "Hola", 
      "Ciao", "Olá", "Здравствуйте",
      "Merhaba",  "Hallo" ,"नमस्ते"


  ],[])

  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (index < greetings.length-1) {
      const id = setInterval(() => setIndex(i => i + 1), 180)
      return () => clearInterval(id)
    } else {
      const t=setTimeout(() => {
        setVisible(false)
        onFinish()
      }, 600)
      return () => clearTimeout(t)}
  },[index, greetings.length, onFinish])

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {visible && (
        <Motion.div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black text-white overflow-hidden"
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] } }}
        >
          <Motion.h1
            key={index}
            className="text-6xl md:text-8xl font-bold text-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
          >
            {greetings[index]}
          </Motion.h1>
        </Motion.div>
      )}
    </AnimatePresence>
  )
}