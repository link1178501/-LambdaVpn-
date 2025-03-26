import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Moon, Sun, Menu, ShieldQuestion, PencilRuler, 
  Home, ShieldBan, ShieldCheck 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const VPNClient = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [connected, setConnected] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className={`${darkMode ? "bg-[#000000] text-white" : "bg-[#FFFFFF] text-black"} flex flex-col items-center justify-center h-screen relative`}>
      
      {/* Hamburger Menu Button */}
      <div className="absolute top-4 left-4 z-20">
        <Menu 
          size={28} 
          className={`${darkMode ? "text-white" : "text-black"} cursor-pointer`} 
          onClick={() => setMenuOpen(true)} 
        />
      </div>

      {/* Sliding Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`absolute top-0 left-0 h-full w-1/4 ${darkMode ? "bg-gray-800 text-white" : "bg-[#c1bfbf] text-black"} shadow-lg z-20`}
          >
            <div className="p-4 flex justify-between items-center border-b border-gray-700">
              <Menu 
                size={28} 
                className="cursor-pointer" 
                onClick={() => setMenuOpen(false)} 
              />
              <h2 className="text-lg font-semibold">Menu</h2>
            </div>

            <ul className="p-4 space-y-4">
              <li 
                className="cursor-pointer p-2 rounded flex items-center space-x-2 transition-colors duration-200 hover:bg-gray-700"
                onClick={() => setCurrentPage("home")}
              >
                <Home size={20} />
                <span>Home</span>
              </li>
              
              <li 
                className="cursor-pointer p-2 rounded flex items-center space-x-2 transition-colors duration-200 hover:bg-gray-700"
                onClick={() => setCurrentPage("tools")}
              >
                <PencilRuler size={20} />
                <span>Tools</span>
              </li>
              
              <li 
                className="cursor-pointer p-2 rounded flex items-center space-x-2 transition-colors duration-200 hover:bg-gray-700"
                onClick={() => window.open("https://github.com/link1178501/-LambdaVpn-", "_blank")}
              > 
                <ShieldQuestion size={20} />
                <span>About</span>
              </li>
            </ul>

            {/* Dark Mode Toggle */}
            <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2">
              <Button 
                onClick={() => setDarkMode(!darkMode)} 
                variant="ghost" 
                className="rounded-full p-2 text-black dark:text-gray-300"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            </div>

            {/* Ko-Fi Button */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <a href="https://ko-fi.com/mapzink" target="_blank" rel="noopener noreferrer">
                <img 
                  src={darkMode ? "https://storage.ko-fi.com/cdn/brandasset/v2/support_me_on_kofi_badge_dark.png" : "https://storage.ko-fi.com/cdn/brandasset/v2/support_me_on_kofi_badge_beige.png"} 
                  alt="Support me on Ko-fi" 
                  className="w-32" 
                />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Transitions */}
      <AnimatePresence mode="wait">
        {currentPage === "home" && (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center space-y-6 mt-20"
          >
            <img 
              src="https://cdn.discordapp.com/attachments/1352592600695177266/1352592803372339231/logo.png?ex=67dfe536&is=67de93b6&hm=f8f4fc59140a7110db359e867a0a175b6199de9e52ec711f72a7b42fc8ed9523&" 
              alt="ΛVPN Logo" 
              className={`w-20 h-20 ${darkMode ? "invert" : ""}`} 
            />
            <h1 className="text-xl font-semibold">ΛVPN Client</h1>
            <p className={`text-sm opacity-80 ${connected ? "text-[#5fee5f]" : "text-[#ee5f5f]"}`}>
              {connected ? "Connected" : "Disconnected"}
            </p>
            <motion.button 
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setConnected(!connected)} 
              className={`w-[500%] py-1.5 text-sm font-medium rounded-lg text-white ${
                connected ? "bg-[#ee5f5f] hover:bg-red-600" : "bg-[#5fee5f] hover:bg-green-600"
              }`}
            >
              {connected ? "Disconnect" : "Connect"}
            </motion.button>
          </motion.div>
        )}

        {currentPage === "tools" && (
          <motion.div
            key="tools"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 gap-6 p-6 w-full max-w-2xl"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-2xl shadow-lg border border-black flex flex-col items-center justify-center ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
            >
              <ShieldBan size={32} className="mb-4" />
              <h2 className="text-lg font-bold underline">Kappa Ad Block</h2>
              <div className="flex items-center space-x-2 mt-6">
                <ShieldCheck size={24} />
                <h3 className="text-2xl font-bold underline">Built-in</h3>
              </div>
            </motion.div>

            {Array(3).fill(0).map((_, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-2xl shadow-lg border border-black flex items-center justify-center text-xl font-semibold ${
                  darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
                }`}
              >
                Coming Soon
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VPNClient;
