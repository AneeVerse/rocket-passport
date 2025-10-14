"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import { IoIosClose, IoMdChatboxes } from "react-icons/io";
import { MdContentCopy } from 'react-icons/md';

const FloatingActionButton = () => {
  const [open, setOpen] = useState(false);
  const [showFloatingButtons, setShowFloatingButtons] = useState(true);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => setOpen(false))
      .catch((err) => alert('Failed to copy: ' + err));
  };

  // Framer Motion variants for animation
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    hover: { scale: 1.1, rotate: 360 },
    tap: { scale: 0.95 }
  };

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-40">
      {showFloatingButtons && (
        <motion.div 
          initial="hidden" 
          animate="visible" 
          exit="exit" 
          className="flex flex-col items-center gap-3 mb-4"
        >
          <motion.a
            href="https://wa.me/+919920540535"
            className="w-14 h-14 bg-white text-[#027b7a] rounded-full flex items-center justify-center shadow-lg border-2 border-[#027b7a] hover:bg-[#027b7a] hover:text-white transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaWhatsapp size={26} />
          </motion.a>

          <motion.a
            href="mailto:rocketsinghentps@gmail.com"
            className="w-14 h-14 bg-white text-[#027b7a] rounded-full flex items-center justify-center shadow-lg border-2 border-[#027b7a] hover:bg-[#027b7a] hover:text-white transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope size={26} />
          </motion.a>

          <motion.a
            href="tel:+919920540535"
            className="w-14 h-14 bg-white text-[#027b7a] rounded-full flex items-center justify-center shadow-lg border-2 border-[#027b7a] hover:bg-[#027b7a] hover:text-white transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaPhone size={26} />
          </motion.a>
        </motion.div>
      )}

      {open && (
        <motion.div 
          initial="hidden" 
          animate="visible" 
          exit="exit" 
          className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            className="bg-white relative rounded-xl shadow-lg p-8 max-w-md md:max-w-lg w-full text-center mx-4"
            variants={containerVariants}
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Get in Touch</h2>
            <motion.button
              className="text-[#027b7a] absolute top-3 right-3 px-1 py-1 rounded-full focus:outline-none hover:bg-[#027b7a]/10 transition-colors duration-200"
              onClick={() => setOpen(false)}
              whileHover={{ scale: 1.2 }}
            >
              <IoIosClose className="self-center h-8 w-8" />
            </motion.button>
            <div className="flex flex-col gap-5">
              <motion.div 
                className="flex items-center justify-between p-4 border-2 border-[#027b7a] rounded-xl hover:bg-[#027b7a]/5 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
              >
                <a
                  href="https://wa.me/+919920540535"
                  className="flex items-center text-[#027b7a] cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={24} />
                  <span className="ml-3 text-lg font-medium text-gray-700">WhatsApp: +91 9920540535 / +91 992001383</span>
                </a>
                <motion.button
                  onClick={() => handleCopy('+91 99205 40535')}
                  className="text-gray-500 hover:text-[#027b7a] focus:outline-none transition-colors duration-200"
                  whileTap={{ scale: 0.9 }}
                >
                  <MdContentCopy size={20} />
                </motion.button>
              </motion.div>
              
              <motion.div 
                className="flex items-center justify-between p-4 border-2 border-[#027b7a] rounded-xl hover:bg-[#027b7a]/5 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
              >
                <a
                  href="mailto:rocketsinghentps@gmail.com"
                  className="flex items-center text-[#027b7a] cursor-pointer"
                >
                  <FaEnvelope size={24} />
                  <span className="ml-3 text-lg font-medium text-gray-700">Email: rocketsinghentps@gmail.com</span>
                </a>
                <motion.button
                  onClick={() => handleCopy('rocketsinghentps@gmail.com')}
                  className="text-gray-500 hover:text-[#027b7a] focus:outline-none transition-colors duration-200"
                  whileTap={{ scale: 0.9 }}
                >
                  <MdContentCopy size={20} />
                </motion.button>
              </motion.div>

              <motion.div 
                className="flex items-center justify-between p-4 border-2 border-[#027b7a] rounded-xl hover:bg-[#027b7a]/5 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
              >
                <a
                  href="tel:+919920540535"
                  className="flex items-center text-[#027b7a] cursor-pointer"
                >
                  <FaPhone size={24} />
                  <span className="ml-3 text-lg font-medium text-gray-700">Call: +91 9920540535</span>
                </a>
                <motion.button
                  onClick={() => handleCopy('+91 9920540535')}
                  className="text-gray-500 hover:text-[#027b7a] focus:outline-none transition-colors duration-200"
                  whileTap={{ scale: 0.9 }}
                >
                  <MdContentCopy size={20} />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <motion.button
        className="w-14 h-14 bg-[#027b7a] text-white rounded-full flex items-center justify-center shadow-lg focus:outline-none hover:bg-[#026968] transition-colors duration-200"
        onClick={() => {
          if (showFloatingButtons) {
            setShowFloatingButtons(false);
          } else if (open) {
            setOpen(false);
          } else {
            setShowFloatingButtons(true);
          }
        }}
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
      >
        <div>
          {open ? (
            <IoIosClose className='self-center h-7 w-7' />
          ) : showFloatingButtons ? (
            <IoIosClose className='self-center h-7 w-7' />
          ) : (
            <IoMdChatboxes className="self-center h-8 w-8" />
          )}
        </div> 
      </motion.button>
    </div>
  );
};

export default FloatingActionButton;
