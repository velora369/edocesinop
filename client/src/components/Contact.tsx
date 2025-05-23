import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const contactInfo = [
    {
      id: 1,
      text: "Atendemos todos os dias, das 9h às 18h",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4B2E1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      ariaLabel: "Horário de Atendimento"
    },
    {
      id: 2,
      text: "Encomendas com pelo menos 24h de antecedência",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4B2E1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" fill="#72CEC3"></rect>
          <line x1="16" y1="2" x2="16" y2="6" stroke="#4B2E1F" strokeWidth="2"></line>
          <line x1="8" y1="2" x2="8" y2="6" stroke="#4B2E1F" strokeWidth="2"></line>
          <line x1="3" y1="10" x2="21" y2="10" stroke="#4B2E1F" strokeWidth="1.5"></line>
          <rect x="8" y="14" width="2" height="2" fill="#4B2E1F" rx="0.5"></rect>
          <rect x="12" y="14" width="2" height="2" fill="#4B2E1F" rx="0.5"></rect>
          <rect x="16" y="14" width="2" height="2" fill="#4B2E1F" rx="0.5"></rect>
        </svg>
      ),
      ariaLabel: "Prazo de Encomendas"
    },
    {
      id: 3,
      text: "Consulte opções de entrega",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4B2E1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
      ),
      ariaLabel: "Opções de Entrega"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-[#F03D87] text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">Faça seu pedido e adoce seu dia</h2>
          <p className="text-lg mb-10 opacity-90">
            Estamos prontos para tornar seus momentos ainda mais especiais com nossas criações. Entre em contato e faça seu pedido!
          </p>
          
          <motion.div 
            className="bg-white text-chocolate rounded-xl p-8 shadow-xl mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={item.id}
                  className="flex flex-col items-center p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                >
                  <div 
                    className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110"
                    aria-label={item.ariaLabel}
                  >
                    {item.icon}
                  </div>
                  <p className="font-medium text-center">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-opacity-90 text-white font-montserrat font-semibold rounded-full transition transform hover:scale-105 border-2 border-white"
            >
              <a href="https://wa.me/5566999852299?text=Olá,%20gostaria%20de%20fazer%20um%20pedido.">
                <i className="fab fa-whatsapp text-xl mr-2"></i>
                Fazer Pedido via WhatsApp
              </a>
            </Button>
            
            <Button
              asChild
              size="lg"
              className="bg-white border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-montserrat font-semibold rounded-full transition-all duration-300 shadow-md"
            >
              <a 
                href="https://www.instagram.com/edocesinop" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <i className="fab fa-instagram text-xl mr-2"></i>
                <span>Seguir no Instagram</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
