import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen pt-20 relative overflow-hidden flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-pink-50">
      {/* Modern decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl"
        animate={{ 
          y: [-20, 20, -20],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute top-32 right-20 w-24 h-24 bg-gradient-to-r from-secondary/30 to-primary/30 rounded-full blur-xl"
        animate={{ 
          y: [20, -20, 20],
          x: [-10, 10, -10]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Floating icons */}
      <motion.div 
        className="absolute top-1/4 right-1/3 text-secondary/30"
        animate={{ 
          rotate: [0, 360],
          y: [-10, 10, -10]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Sparkles size={40} />
      </motion.div>

      <motion.div 
        className="absolute bottom-1/3 left-1/4 text-accent/40"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, -15, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <Heart size={32} />
      </motion.div>

      <motion.div 
        className="absolute top-1/2 left-20 text-primary/30"
        animate={{ 
          rotate: [0, 180, 360],
          scale: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      >
        <Star size={28} />
      </motion.div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto relative"
        >
          {/* Modern glass card */}
          <div className="backdrop-blur-xl bg-white/80 rounded-[2rem] p-8 md:p-16 shadow-2xl border border-white/50 relative overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-primary/5 rounded-[2rem]" />
            
            {/* Content */}
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-gray-800 mb-8 leading-tight">
                  Você não pode comprar felicidade, mas pode comprar 
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8, type: "spring" }}
                    className="relative inline-block mx-2"
                  >
                    <span className="relative z-10 font-dancing text-6xl md:text-8xl">
                      <span className="text-[#00A9A5] drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">É</span>
                      <span className="text-[#4B2E1F] drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">Do</span>
                      <span className="text-[#00A9A5] drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">ce</span>
                    </span>
                  </motion.div>, que é quase a mesma coisa!
                </h1>
              </motion.div>
              
              <motion.p 
                className="font-montserrat text-lg md:text-xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="relative inline-block">
                  <span className="relative z-10">Confeitaria artesanal com ingredientes selecionados com excelência para tornar seus momentos especiais inesquecíveis</span>
                  <motion.span
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary/40 via-secondary/40 to-accent/40 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.8, duration: 1.2 }}
                  />
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
                  className="bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary text-white font-montserrat font-semibold rounded-full px-12 py-8 text-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden group transform-gpu"
                >
                  <a href="https://wa.me/5566999852299?text=Olá,%20gostaria%20de%20fazer%20um%20pedido" className="flex items-center gap-3">
                    <span className="relative z-10 group-hover:tracking-wider transition-all duration-300">Fazer Pedido Agora</span>
                    <motion.span 
                      className="relative z-10 transition-all duration-300 text-2xl"
                      animate={{ x: [0, 8, 0] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut"
                      }}
                    >→</motion.span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}