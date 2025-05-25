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
              src="/src/assets/logo.png" 
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
            className="md:hidden relative z-50 w-12 h-12 bg-gradient-to-br from-[#00A9A5] to-[#4B2E1F] rounded-2xl shadow-lg hover:shadow-xl backdrop-blur-sm border border-white/20 transition-all duration-300 flex items-center justify-center group overflow-hidden"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <motion.div
                initial={false}
                animate={mobileMenuOpen ? "open" : "closed"}
                className="w-6 h-6 flex flex-col justify-center items-center"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0, width: "20px" },
                    open: { rotate: 45, y: 2, width: "20px" }
                  }}
                  transition={{ duration: 0.3 }}
                  className="block h-0.5 bg-white rounded-full origin-center"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1, width: "16px" },
                    open: { opacity: 0, width: "16px" }
                  }}
                  transition={{ duration: 0.3 }}
                  className="block h-0.5 bg-white rounded-full mt-1.5"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0, width: "20px" },
                    open: { rotate: -45, y: -2, width: "20px" }
                  }}
                  transition={{ duration: 0.3 }}
                  className="block h-0.5 bg-white rounded-full mt-1.5 origin-center"
                />
              </motion.div>
            </div>
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu - Modern Futuristic Design */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop with blur effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Modern floating menu */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 25 }}
              className="fixed top-20 left-4 right-4 z-50 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00A9A5]/5 via-transparent to-[#F03D87]/5 pointer-events-none" />
              
              {/* Header with logo */}
              <div className="relative p-6 border-b border-white/20">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00A9A5] to-[#4B2E1F] flex items-center justify-center shadow-lg">
                    <img 
                      src="/src/assets/logo.png" 
                      alt="Logo ÉDoce" 
                      className="w-12 h-12 object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
              
              {/* Navigation items */}
              <nav className="relative p-6 space-y-3">
                {[
                  { href: "#quem-somos", label: "Quem Somos", icon: "fas fa-store", color: "from-[#00A9A5] to-[#44CFC6]" },
                  { href: "#produtos", label: "Produtos", icon: "fas fa-birthday-cake", color: "from-[#F03D87] to-[#FF6B9D]" },
                  { href: "#datas-especiais", label: "Datas Especiais", icon: "fas fa-calendar-alt", color: "from-[#4B2E1F] to-[#6B4F8B]" },
                  { href: "#depoimentos", label: "Depoimentos", icon: "fas fa-comment-dots", color: "from-[#00A9A5] to-[#44CFC6]" },
                  { href: "#contato", label: "Contato", icon: "fas fa-envelope", color: "from-[#F03D87] to-[#FF6B9D]" }
                ].map((item, index) => (
                  <motion.a 
                    key={item.href}
                    href={item.href} 
                    className="group relative flex items-center p-4 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/30 hover:bg-white/60 transition-all duration-300 overflow-hidden"
                    onClick={(e) => {
                      e.preventDefault();
                      handleMobileNavigation(item.href);
                    }}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    {/* Hover gradient effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    {/* Icon container */}
                    <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mr-4 shadow-md group-hover:shadow-lg transition-all duration-300`}>
                      <i className={`${item.icon} text-white text-lg`}></i>
                    </div>
                    
                    {/* Label */}
                    <span className="font-montserrat font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      {item.label}
                    </span>
                    
                    {/* Arrow indicator */}
                    <i className="fas fa-chevron-right text-gray-400 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"></i>
                  </motion.a>
                ))}
                
                {/* WhatsApp button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="pt-4"
                >
                  <a
                    href="https://wa.me/5566999852299?text=Olá,%20gostaria%20de%20fazer%20um%20pedido"
                    className="group relative flex items-center justify-center w-full p-4 bg-gradient-to-r from-green-500 to-green-400 rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300"
                  >
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    
                    <i className="fab fa-whatsapp text-white text-2xl mr-3"></i>
                    <span className="font-montserrat font-semibold text-white">Fazer Pedido</span>
                  </a>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
