import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-chocolate text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
            <motion.a 
              href="#" 
              className="block mb-3"
              whileHover={{ rotate: 10 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="footer-logo-container w-[80px] h-[80px] md:w-[80px] md:h-[80px] sm:w-[60px] sm:h-[60px] rounded-full overflow-hidden border-2 border-[#F03D87] shadow-lg flex items-center justify-center bg-[#00A9A5] mx-auto md:mx-0">
                <img 
                  src="/src/assets/logo.png" 
                  alt="Logo ÉDoce Confeitaria Artesanal" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.a>
            <p className="mt-1 text-gray-300 font-dancing text-xl">Adoçando momentos especiais</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h4 className="font-montserrat font-semibold mb-3 text-secondary">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#quem-somos" className="hover:text-secondary transition">Quem Somos</a></li>
                <li><a href="#produtos" className="hover:text-secondary transition">Produtos</a></li>
                <li><a href="#datas-especiais" className="hover:text-secondary transition">Datas Especiais</a></li>
                <li><a href="#depoimentos" className="hover:text-secondary transition">Depoimentos</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-montserrat font-semibold mb-3 text-secondary">Contato</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://wa.me/5566999852299" className="flex items-center hover:text-secondary transition">
                    <i className="fab fa-whatsapp mr-2"></i>
                    +55 66 99985-2299
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/edocesinop" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-secondary transition"
                  >
                    <i className="fab fa-instagram mr-2"></i>
                    @edocesinop
                  </a>
                </li>
                <li className="flex items-start">
                  <i className="far fa-clock mt-1 mr-2"></i>
                  <span>Todos os dias, 9h às 18h</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} ÉDoce Confeitaria Artesanal. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
