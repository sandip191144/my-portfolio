import React, { useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

export default function OverlayMenu({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <Motion.div
          className='fixed inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-sm'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >


          <ul className='space-y-6 text-center'>
            {[
              "Home",
              "About",
              "Skills",
              "Projects",
              "Experience",
              "Testimonials",
              "Contact"
            ].map((item, index) => (
              <Motion.li
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
              >
                <a href={`#${item.toLowerCase()}`} onClick={() => onClose()} className='text-white text-xl font-medium hover:text-blue-400'>
                  {item}
                </a>
              </Motion.li>
            ))}
          </ul>

        </Motion.div>
      )}
    </AnimatePresence>
  )
}