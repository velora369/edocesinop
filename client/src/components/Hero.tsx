import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section 
      className="min-h-screen pt-20 bg-cover bg-center flex items-center relative" 
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
      }}
    >
      <div className="container mx-auto px-4 py-16 md:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-playfair text-4xl md:text-6xl text-white mb-6 leading-tight">
            Você não pode comprar felicidade, mas pode comprar 
            <span className="font-dancing text-5xl md:text-7xl">
              <span className="text-[#00A9A5]">É</span>
              <span className="text-[#F03D87]">Do</span>
              <span className="text-[#00A9A5]">ce</span>
            </span>, que é quase a mesma coisa!
          </h1>
          
          <p className="font-open-sans text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
            Confeitaria artesanal com ingredientes selecionados a dedo para tornar seus momentos especiais inesquecíveis
          </p>
          
          <Button 
            asChild
            size="lg" 
            className="bg-[#F03D87] hover:bg-[#F03D87]/90 text-white font-montserrat font-semibold rounded-full px-8 py-6 text-lg transition-all duration-300"
          >
            <a href="https://wa.me/5566999852299?text=Olá,%20gostaria%20de%20fazer%20um%20pedido">
              Fazer Pedido Agora
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
