import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <motion.h1 
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        👑💧 HypeTix Admin — InnoFrmda0
      </motion.h1>
      <p className="text-gray-400">Login with your combo to continue.</p>
    </div>
  );
}
