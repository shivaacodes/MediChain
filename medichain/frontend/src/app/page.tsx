"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white to-cyan-50/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.h1
            className="text-8xl font-medium italic bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1.0],
            }}
          >
            MediChain
          </motion.h1>

          <motion.p
            className="mt-6 text-xl text-gray-600 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Next-generation healthcare on the blockchain
          </motion.p>

          <motion.div
            className="mt-10 flex space-x-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 201, 255, 0.1), 0 10px 10px -5px rgba(0, 201, 255, 0.04)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 text-white font-medium rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-md"
            >
              Explore Services
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 text-gray-700 font-medium rounded-full border border-gray-200 hover:border-cyan-300 transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div
            className="absolute top-20 left-20 w-64 h-64 rounded-full bg-cyan-100/20 blur-3xl"
            animate={{
              x: [0, 20, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-blue-100/20 blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
      </main>
    </>
  );
}
