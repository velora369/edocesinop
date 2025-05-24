import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="quem-somos" className="section py-24 bg-gradient-to-b from-gray-50 to-white relative">
      {/* Elementos decorativos sutis */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-10"></div>
      <div className="absolute -top-5 left-1/4 w-24 h-24 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-secondary/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-lg)] group">
              {/* Bordas decorativas */}
              <div className="absolute -inset-0.5 bg-gradient-to-tr from-primary via-secondary to-accent opacity-20 rounded-3xl blur-sm group-hover:opacity-40 transition-opacity duration-700 z-0"></div>
              
              <div className="relative overflow-hidden rounded-3xl z-10">
                <img 
                  src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/foto-giselle-.webp" 
                  alt="Confeitaria ÉDoce em ação" 
                  className="w-full h-auto transition-all duration-700 group-hover:scale-105 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Badge decorativo */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md text-sm font-medium text-primary flex items-center transform rotate-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                  <span className="mr-1">✨</span> Artesanal
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="relative mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="font-playfair text-4xl md:text-5xl relative inline-block">
                Sobre a <span className="relative">
                  <span className="relative z-10 font-dancing">
                    <span className="text-primary">É</span><span className="text-secondary">Do</span><span className="text-primary">ce</span>
                  </span>

                </span>
              </h2>
              <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full mt-4"></div>
            </motion.div>
            
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.p 
                className="text-gray-700 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                A <span className="text-primary font-medium">ÉDoce</span> nasceu da paixão por transformar ingredientes de qualidade em experiências sensoriais únicas. Cada doce é preparado artesanalmente, com ingredientes cuidadosamente selecionados para garantir sabor incomparável e momentos de pura felicidade.
              </motion.p>
              
              <motion.p 
                className="text-gray-700 text-lg leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Nossa confeitaria se destaca pela dedicação aos detalhes e pelo compromisso com a excelência em cada criação.
              </motion.p>
              
              <motion.div 
                className="relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-[var(--shadow-md)] border border-gray-100 hover:shadow-[var(--shadow-lg)] transition-all duration-500 overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ y: -5 }}
              >
                {/* Elementos decorativos */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl"></div>
                
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary via-secondary to-primary opacity-70"></div>
                
                <p className="font-dancing text-2xl md:text-3xl relative z-10 text-primary drop-shadow-sm group-hover:tracking-wide transition-all duration-300">
                  "Ingredientes premium cuidadosamente selecionados para sabores que encantam todos os paladares"
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
