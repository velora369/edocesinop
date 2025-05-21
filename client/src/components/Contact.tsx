import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const contactInfo = [
    {
      id: 1,
      icon: "far fa-clock",
      text: "Atendemos todos os dias, das 9h às 18h"
    },
    {
      id: 2,
      icon: "far fa-calendar-alt",
      text: "Encomendas com pelo menos 24h de antecedência"
    },
    {
      id: 3,
      icon: "fas fa-truck",
      text: "Consulte opções de entrega"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-r from-primary to-accent text-white">
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
                  <div className="w-16 h-16 rounded-full bg-primary bg-opacity-20 flex items-center justify-center mb-4">
                    <i className={`${item.icon} text-2xl text-primary`}></i>
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
              className="bg-secondary hover:bg-opacity-90 text-white font-montserrat font-semibold rounded-full transition transform hover:scale-105"
            >
              <a href="https://wa.me/5566999852299?text=Olá,%20gostaria%20de%20fazer%20um%20pedido.">
                <i className="fab fa-whatsapp text-xl mr-2"></i>
                Fazer Pedido via WhatsApp
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white text-secondary hover:bg-gray-100 font-montserrat font-semibold rounded-full transition"
            >
              <a 
                href="https://www.instagram.com/edocesinop" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram text-xl mr-2"></i>
                Seguir no Instagram
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
