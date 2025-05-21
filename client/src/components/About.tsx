import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="quem-somos" className="section bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <img 
                src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/foto-giselle-.webp" 
                alt="Confeitaria ÉDoce em ação" 
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Sobre a <span className="text-primary">É</span><span className="section-highlight">Doce</span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-700 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              A ÉDoce nasceu da paixão por transformar ingredientes de qualidade em experiências sensoriais únicas. Cada doce é preparado artesanalmente, com ingredientes cuidadosamente selecionados para garantir sabor incomparável e momentos de pura felicidade. 
            </motion.p>
            
            <motion.p 
              className="text-gray-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Nossa confeitaria se destaca pela dedicação aos detalhes e pelo compromisso com a excelência em cada criação.
            </motion.p>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-secondary hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <p className="font-dancing text-2xl text-primary">
                "Ingredientes premium selecionados a dedo para sabores que encantam todos os paladares"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
