import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section 
      className="min-h-screen pt-20 bg-cover bg-center flex items-center relative overflow-hidden" 
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary opacity-10 rounded-full blur-3xl"></div>
      
      {/* Sprinkles decoration */}
      <div className="sugar-sprinkles absolute top-20 left-0 w-full"></div>
      
      {/* Animated floating decorations */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-70 z-10"
          style={{
            background: i % 3 === 0 ? '#F03D87' : i % 3 === 1 ? '#00A9A5' : '#4B2E1F',
            width: Math.random() * 10 + 5 + 'px',
            height: Math.random() * 10 + 5 + 'px',
            top: Math.random() * 80 + 10 + '%',
            left: Math.random() * 80 + 10 + '%',
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 py-16 md:py-24 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto backdrop-blur-sm bg-black/10 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Você não pode comprar felicidade, mas pode comprar <motion.span 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8, type: "spring" }}
                className="font-dancing inline-block"
              >
                <span className="text-[#00A9A5]">É</span><span className="text-[#4B2E1F]">Do</span><span className="text-[#00A9A5]">ce</span>
              </motion.span>, que é quase a mesma coisa!
            </h1>
          </motion.div>
          
          <motion.p 
            className="font-montserrat text-lg md:text-xl text-white mb-10 max-w-3xl mx-auto opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Confeitaria artesanal com ingredientes selecionados com excelência para tornar seus momentos especiais inesquecíveis
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
              className="bg-secondary hover:bg-opacity-90 text-white font-montserrat font-semibold rounded-full px-10 py-7 text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group pulse-animation"
            >
              <a href="https://wa.me/5566999852299?text=Olá,%20gostaria%20de%20fazer%20um%20pedido" className="flex items-center gap-2">
                <span className="relative z-10 mr-1">Fazer Pedido Agora</span>
                <motion.span 
                  className="relative z-10"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >→</motion.span>
                <span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
            </Button>
          </motion.div>
          

        </motion.div>
      </div>
    </section>
  );
}
