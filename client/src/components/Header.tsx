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
  
  // Close mobile menu when clicking on a link and handle smooth scrolling
  const handleMobileNavigation = (href: string) => {
    setMobileMenuOpen(false);
    
    if (href === '#') return;
    
    // Small delay to ensure the menu closes first
    setTimeout(() => {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
        const targetPosition = (targetElement as HTMLElement).offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const headerClasses = `fixed w-full top-0 z-50 transition-all duration-300 ${
    scrolled 
      ? "bg-white/95 backdrop-blur-md shadow-[var(--shadow-md)] translate-y-0" 
      : "bg-white/90 backdrop-blur-sm"
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
          <div className="logo-container w-[60px] h-[60px] md:w-[60px] md:h-[60px] sm:w-[45px] sm:h-[45px] rounded-full overflow-hidden border-2 border-[#F03D87] shadow-[var(--shadow-md)] flex items-center justify-center bg-gradient-to-br from-[#00A9A5] to-[#44CFC6] transition-all duration-300 hover:shadow-[var(--shadow-highlight)] hover:scale-105">
            <img 
              src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/logo.png" 
              alt="Logo ÉDoce Confeitaria Artesanal" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.a>
        
        <nav className="hidden md:flex items-center space-x-6">
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
              className="font-montserrat text-sm font-medium hover:text-primary transition-all duration-300 relative group flex items-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="absolute inset-0 rounded-full bg-primary/5 scale-0 transition-transform duration-300 group-hover:scale-100"></span>
              <i className={`${item.icon} mr-1 text-xs text-primary opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0`}></i>
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>
        
        <div className="flex items-center">
          <motion.a 
            href="https://wa.me/5566999852299?text=Olá,%20gostaria%20de%20fazer%20um%20pedido" 
            className="md:flex items-center hidden text-white bg-gradient-to-r from-green-500 to-green-400 hover:shadow-[0_0_12px_rgba(74,194,107,0.5)] hover:from-green-400 hover:to-green-500 transition-all duration-300 px-5 py-2.5 rounded-full font-medium text-sm overflow-hidden relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute w-0 h-0 transition-all duration-300 bg-white rounded-full opacity-20 group-hover:w-32 group-hover:h-32 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></span>
            <i className="fab fa-whatsapp mr-2 text-lg"></i>
            Fazer Pedido
          </motion.a>
          
          <motion.button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-chocolate p-2 relative z-50 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:shadow-md transition-all duration-300"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl transition-all duration-300 ${mobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}></i>
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
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-4 py-2 overflow-hidden shadow-[var(--shadow-lg)] rounded-b-3xl"
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
                  className="font-montserrat font-medium hover:text-primary transition-all duration-300 flex items-center p-3 rounded-xl hover:bg-gradient-to-r hover:from-white hover:to-gray-50 hover:shadow-[var(--shadow-sm)] group"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileNavigation(item.href);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-all duration-300">
                    <i className={`${item.icon} text-primary`}></i>
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
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
                    className="w-full bg-gradient-to-r from-green-500 to-green-400 hover:shadow-[0_0_12px_rgba(74,194,107,0.5)] hover:from-green-400 hover:to-green-500 text-white rounded-full py-6 overflow-hidden relative group"
                  >
                    <a href="https://wa.me/5566999852299?text=Olá,%20gostaria%20de%20fazer%20um%20pedido" className="flex items-center justify-center">
                      <span className="absolute w-0 h-0 transition-all duration-300 bg-white rounded-full opacity-20 group-hover:w-64 group-hover:h-64 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></span>
                      <i className="fab fa-whatsapp mr-2 text-xl"></i>
                      <span className="group-hover:scale-105 transition-transform duration-300">Fazer Pedido</span>
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
