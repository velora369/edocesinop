import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll event to add shadow to header
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
    scrolled ? "bg-white shadow-md" : "bg-white/95"
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="font-playfair font-bold text-3xl text-primary">
          É<span className="text-secondary">Doce</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#quem-somos" className="font-montserrat text-sm font-medium hover:text-primary transition duration-300">
            Quem Somos
          </a>
          <a href="#produtos" className="font-montserrat text-sm font-medium hover:text-primary transition duration-300">
            Produtos
          </a>
          <a href="#datas-especiais" className="font-montserrat text-sm font-medium hover:text-primary transition duration-300">
            Datas Especiais
          </a>
          <a href="#depoimentos" className="font-montserrat text-sm font-medium hover:text-primary transition duration-300">
            Depoimentos
          </a>
          <a href="#contato" className="font-montserrat text-sm font-medium hover:text-primary transition duration-300">
            Contato
          </a>
        </nav>
        
        <div className="flex items-center">
          <a 
            href="https://wa.me/5566999852299?text=Olá,%20gostaria%20de%20fazer%20um%20pedido" 
            className="md:flex items-center hidden text-white bg-green-500 hover:bg-green-600 transition px-4 py-2 rounded-full font-medium text-sm"
          >
            <i className="fab fa-whatsapp mr-2 text-lg"></i>
            Fazer Pedido
          </a>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-chocolate p-2"
            aria-label="Toggle menu"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 px-4 py-2 overflow-hidden"
          >
            <nav className="flex flex-col space-y-3 py-3">
              <a 
                href="#quem-somos" 
                className="font-montserrat text-sm font-medium hover:text-primary transition duration-300"
                onClick={handleLinkClick}
              >
                Quem Somos
              </a>
              <a 
                href="#produtos" 
                className="font-montserrat text-sm font-medium hover:text-primary transition duration-300"
                onClick={handleLinkClick}
              >
                Produtos
              </a>
              <a 
                href="#datas-especiais" 
                className="font-montserrat text-sm font-medium hover:text-primary transition duration-300"
                onClick={handleLinkClick}
              >
                Datas Especiais
              </a>
              <a 
                href="#depoimentos" 
                className="font-montserrat text-sm font-medium hover:text-primary transition duration-300"
                onClick={handleLinkClick}
              >
                Depoimentos
              </a>
              <a 
                href="#contato" 
                className="font-montserrat text-sm font-medium hover:text-primary transition duration-300"
                onClick={handleLinkClick}
              >
                Contato
              </a>
              <div className="pt-2">
                <Button
                  asChild
                  className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full"
                >
                  <a href="https://wa.me/5566999852299?text=Olá,%20gostaria%20de%20fazer%20um%20pedido">
                    <i className="fab fa-whatsapp mr-2"></i>
                    Fazer Pedido
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
