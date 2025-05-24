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
        <img 
          src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/icons8-calendar-25-50.webp" 
          alt="Calendário" 
          width="40" 
          height="40"
          className="object-contain"
        />
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
              className="instagram-button bg-white text-[#44CFC6] border-2 border-[#44CFC6] hover:bg-[#44CFC6] hover:text-white font-montserrat font-semibold rounded-full transition-all duration-300 shadow-md"
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
