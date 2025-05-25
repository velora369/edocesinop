import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section 
      className="min-h-screen pt-20 bg-cover bg-center flex items-center relative overflow-hidden" 
      style={{ 
        backgroundImage: "linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url('https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
      }}
    >
      {/* Enhanced decorative elements with animation */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary opacity-10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      <motion.div 
        className="absolute -bottom-12 -right-12 w-96 h-96 bg-secondary opacity-10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.18, 0.1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      ></motion.div>
      <motion.div 
        className="absolute top-1/3 right-1/4 w-48 h-48 bg-accent opacity-10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.12, 0.08]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      ></motion.div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto backdrop-blur-md bg-white/60 rounded-3xl p-8 md:p-12 shadow-[var(--shadow-xl)] border border-white/20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-black font-bold mb-8 leading-tight">
              Você não pode comprar felicidade, mas pode comprar 
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8, type: "spring" }}
                className="relative inline-block mx-2"
              >
                <span className="relative z-10 font-dancing">
                  <span className="text-[#00A9A5] drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">É</span>
                  <span className="text-[#4B2E1F] drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">Do</span>
                  <span className="text-[#00A9A5] drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">ce</span>
                </span>

              </motion.div>, que é quase a mesma coisa!
            </h1>
          </motion.div>
          
          <motion.p 
            className="font-montserrat text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto opacity-95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="relative inline-block">
              <span className="relative z-10">Confeitaria artesanal com ingredientes selecionados com excelência para tornar seus momentos especiais inesquecíveis</span>
              <motion.span
                className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.8, duration: 1.2 }}
              ></motion.span>
            </span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex justify-center"
          >
            <Button 
              asChild
              size="lg" 
              className="bg-gradient-to-r from-secondary to-secondary/90 hover:shadow-[var(--shadow-highlight-secondary)] text-white font-montserrat font-semibold rounded-full px-10 py-7 text-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
            >
              <a href="https://wa.me/5566999852299?text=Olá,%20gostaria%20de%20fazer%20um%20pedido" className="flex items-center gap-2">
                <span className="relative z-10 group-hover:tracking-wider transition-all duration-300">Fazer Pedido Agora</span>
                <motion.span 
                  className="relative z-10 transition-all duration-300"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                  }}
                >→</motion.span>
                <span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
                <motion.div 
                  className="absolute -inset-1 rounded-full blur-md bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                ></motion.div>
              </a>
            </Button>
          </motion.div>
          

        </motion.div>
      </div>
    </section>
  );
}
