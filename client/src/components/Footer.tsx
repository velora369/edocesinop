import { motion } from "framer-motion";

export default function Footer() {
  return (
    <>
      {/* Separador suave antes do footer */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-full max-w-6xl mx-auto opacity-70 my-4"></div>
      
      <footer className="bg-chocolate text-white py-12 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Footer Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
            {/* Coluna 1: Logo e Slogan */}
            <div className="flex flex-col items-center md:items-start">
              <motion.a 
                href="#" 
                className="block mb-4"
                whileHover={{ rotate: 5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="footer-logo-container w-[90px] h-[90px] rounded-full overflow-hidden border-2 border-[#F03D87] shadow-lg flex items-center justify-center bg-[#00A9A5] mx-auto md:mx-0">
                  <img 
                    src="/src/assets/logo.png" 
                    alt="Logo ÉDoce Confeitaria Artesanal" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </motion.a>
              <p className="mt-1 text-gray-200 font-dancing text-2xl">Adoçando momentos especiais</p>
              
              {/* Social Media Icons - Mobile Only */}
              <div className="flex items-center space-x-4 mt-5 md:hidden">
                <motion.a 
                  href="https://www.instagram.com/edocesinop" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] p-2.5 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fab fa-instagram text-white text-xl"></i>
                </motion.a>
                <motion.a 
                  href="https://wa.me/5566999852299" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#25D366] p-2.5 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fab fa-whatsapp text-white text-xl"></i>
                </motion.a>
              </div>
            </div>
            
            {/* Coluna 2: Links Rápidos */}
            <div className="text-center md:text-left">
              <h4 className="font-montserrat font-semibold mb-5 text-secondary text-lg border-b border-secondary/30 pb-2 inline-block">Links Rápidos</h4>
              <ul className="space-y-3">
                {[
                  { href: "#quem-somos", label: "Quem Somos", icon: "fas fa-store" },
                  { href: "#produtos", label: "Produtos", icon: "fas fa-birthday-cake" },
                  { href: "#datas-especiais", label: "Datas Especiais", icon: "fas fa-calendar-alt" },
                  { href: "#depoimentos", label: "Depoimentos", icon: "fas fa-comment-dots" }
                ].map((link, index) => (
                  <motion.li key={link.href} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                    <a 
                      href={link.href} 
                      className="group flex items-center hover:text-secondary transition-all duration-300 hover:bg-secondary/10 px-3 py-2 rounded-lg"
                    >
                      <i className={`${link.icon} mr-3 opacity-70 group-hover:opacity-100 w-5 text-center`}></i>
                      <span>{link.label}</span>
                      <i className="fas fa-chevron-right ml-auto opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1"></i>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            {/* Coluna 3: Contato e Social */}
            <div className="text-center md:text-left">
              <h4 className="font-montserrat font-semibold mb-5 text-secondary text-lg border-b border-secondary/30 pb-2 inline-block">Contato</h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="https://wa.me/5566999852299" 
                    className="group flex items-center hover:text-secondary transition-all duration-300 hover:bg-secondary/10 px-3 py-2 rounded-lg"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <div className="bg-[#25D366]/20 p-2 rounded-full mr-3">
                      <i className="fab fa-whatsapp text-[#25D366]"></i>
                    </div>
                    <span>+55 66 99985-2299</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/edocesinop" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center hover:text-secondary transition-all duration-300 hover:bg-secondary/10 px-3 py-2 rounded-lg"
                  >
                    <div className="bg-gradient-to-br from-[#833AB4]/20 via-[#FD1D1D]/20 to-[#FCAF45]/20 p-2 rounded-full mr-3">
                      <i className="fab fa-instagram text-[#E1306C]"></i>
                    </div>
                    <span>@edocesinop</span>
                  </a>
                </li>
                <li className="flex items-center px-3 py-2">
                  <div className="bg-gray-500/20 p-2 rounded-full mr-3">
                    <i className="far fa-clock text-gray-300"></i>
                  </div>
                  <span>Todos os dias, 9h às 18h</span>
                </li>
              </ul>
              
              {/* Social Media Icons - Desktop Only */}
              <div className="hidden md:flex items-center mt-8 space-x-4">
                <motion.a 
                  href="https://www.instagram.com/edocesinop" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] p-3 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fab fa-instagram text-white text-xl"></i>
                </motion.a>
                <motion.a 
                  href="https://wa.me/5566999852299" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#25D366] p-3 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fab fa-whatsapp text-white text-xl"></i>
                </motion.a>
              </div>
            </div>
          </div>
          
          {/* Copyright Section with subtle separator */}
          <div className="border-t border-gray-700/50 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0 text-center md:text-left">
              <p>© {new Date().getFullYear()} ÉDoceSinop Confeitaria Artesanal. Todos os direitos reservados.</p>
              <p className="text-gray-500 text-xs mt-1">Por Giselle Esposito</p>
            </div>
            
            {/* Botão Voltar ao Topo */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-secondary/10 hover:bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm flex items-center transition-all duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Voltar ao topo</span>
              <i className="fas fa-chevron-up ml-2"></i>
            </motion.button>
          </div>
        </div>
      </footer>
    </>
  );
}
