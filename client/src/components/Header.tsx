import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll event to add shadow to header and make it sticky
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const headerClasses = `fixed w-full top-0 z-50 transition-all duration-300 ${
    scrolled 
      ? "bg-white shadow-lg translate-y-0" 
      : "bg-white/95"
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <motion.a 
          href="#" 
          className="relative"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="logo-container w-[60px] h-[60px] md:w-[60px] md:h-[60px] sm:w-[45px] sm:h-[45px] rounded-full overflow-hidden border-2 border-[#F03D87] shadow-lg flex items-center justify-center bg-[#00A9A5]">
            <img 
              src="/src/assets/logo.png" 
              alt="Logo ÉDoce Confeitaria Artesanal" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.a>
        
        <nav className="hidden md:flex items-center space-x-6">
          {[
            { href: "#quem-somos", label: "Quem Somos" },
            { href: "#produtos", label: "Produtos" },
            { href: "#datas-especiais", label: "Datas Especiais" },
            { href: "#depoimentos", label: "Depoimentos" },
            { href: "#contato", label: "Contato" }
          ].map((item, index) => (
            <motion.a 
              key={item.href}
              href={item.href} 
              className="font-montserrat text-sm font-medium hover:text-primary transition duration-300 relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>
        
        <div className="flex items-center">
          <motion.a 
            href="https://wa.me/5566999852299?text=Olá,%20gostaria%20de%20fazer%20um%20pedido" 
            className="md:flex items-center hidden text-white bg-green-500 hover:bg-green-600 transition px-4 py-2 rounded-full font-medium text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fab fa-whatsapp mr-2 text-lg"></i>
            Fazer Pedido
          </motion.a>
          
          <motion.button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-chocolate p-2"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
            className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100 px-4 py-2 overflow-hidden shadow-xl"
          >
            <nav className="flex flex-col space-y-4 py-3">
              {[
                { href: "#quem-somos", label: "Quem Somos", icon: "fas fa-store" },
                { href: "#produtos", label: "Produtos", icon: "fas fa-birthday-cake" },
                { href: "#datas-especiais", label: "Datas Especiais", icon: "fas fa-calendar-alt" },
                { href: "#depoimentos", label: "Depoimentos", icon: "fas fa-comment-dots" },
                { href: "#contato", label: "Contato", icon: "fas fa-envelope" }
              ].map((item, index) => (
                <motion.a 
                  key={item.href}
                  href={item.href} 
                  className="font-montserrat font-medium hover:text-primary transition-all duration-300 flex items-center p-2 rounded-lg hover:bg-gray-50"
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={`${item.icon} w-6 text-secondary`}></i>
                  <span className="ml-2">{item.label}</span>
                </motion.a>
              ))}
              <div className="pt-3">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    asChild
                    className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full py-6 shadow-md"
                  >
                    <a href="https://wa.me/5566999852299?text=Olá,%20gostaria%20de%20fazer%20um%20pedido">
                      <i className="fab fa-whatsapp mr-2 text-xl"></i>
                      Fazer Pedido
                    </a>
                  </Button>
                </motion.div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
